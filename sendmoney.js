const Browseth = require('browseth').default;
const cliInteract = require('cli-interact');
const HWTransportNodeHid = require('@ledgerhq/hw-transport-node-hid').default;

const sendEth = async () => {
  const beth = new Browseth('https://mainnet.infura.io/mew');
  Browseth.Signers.Ledger.Transport = HWTransportNodeHid;

  const wallet = new Browseth.Wallets.Offline(
    beth.rpc,
    new Browseth.Signers.Ledger()
  );

  try {
    walletType = cliInteract.question('Enter number of wallet you wish to send money from:\n1. Private Key\n2. Ledger\n> ');
  } catch (e) {console.error(e); return;}

  switch (walletType) {
    case '1': 
      beth.wallet = new Browseth.Wallets.Offline(beth.rpc, getPrivateKey());
      console.log('Your address is:', await beth.wallet.account());
      return;
    case '2':
      handleLedger(beth);
      return;
    default:
      return (console.error(`Invalid input. Please enter '1' or '2'.`));
  }
};

const getPrivateKey = () => {
  try {
    pk = cliInteract.question('Enter private key: ');
  } catch (e) {console.error(e); return;}
  if (pk.replace('0x', '').length !== 64) {
    console.error('Incorrect length. Not 64 characters.');
  }
  return new Browseth.Signers.PrivateKey(pk);
}

const handleLedger = async (beth) => {
  try {
    account = cliInteract.question('Which account do you want to use: ');
  } catch (e) {console.error(e); return;}
  if (isNaN(account)) {
    console.error('Not a number');
    return;
  }
  ledger = new Browseth.Signers.Ledger();
  ledger.defaultIndex = +account;
  beth.wallet = new Browseth.Wallets.Offline(beth.rpc, ledger);
  
  addr = await beth.wallet.account().catch((e)=>{console.error('QWE', e)});
  balance = await beth.rpc.send('eth_getBalance', addr, 'latest');
  console.log(`Account: '${addr}' contains ${balance}ETH`);
}

sendEth();