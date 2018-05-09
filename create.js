const Browseth = require('browseth').default;
const fs = require('fs');
const cliInteract = require('cli-interact');

const createKeystore = async () => {
  const pk = Browseth.Signers.PrivateKey.fromRandomBytes();
  const pkey = `0x${pk.toString()}`;
  console.log('Your private key is:', pkey);

  let pw;
  // Prompt user for a password
  try {
    pw = cliInteract.question('Enter a new password: ');
  } catch (e) {
    console.error(e);
    return;
  }

  console.log('Please wait a few seconds...');
  const keystore = await pk.toV3(pw).catch(e => {
    console.error(e);
  });
  const filename = pk.getKeyStoreFileName();

  fs.writeFile(filename, keystore, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Generated Keystorefile '${filename}'\n`);
  });
};

createKeystore();
