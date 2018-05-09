const Browseth = require('browseth');

const fun = async () => {
  const beth = new Browseth('https://mainnet.infura.io/mew');
  beth.rpc.batch(() => {console.log("asd")},
    [
      {
        method: 'eth_getTransactionReceipt',
        params: ['0x318c3a828a65bd20452064fbe1076dfd8efc2d9a67fa82c93b4941dfd887ad60'],
      },
      (err, res) => {
        if (err) {
          console.log(err);
        }
        console.log("ASDASDSAD", res);
      }
    ]
  );
}

fun();