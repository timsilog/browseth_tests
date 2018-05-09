const Browseth = require('browseth');

const beth = new Browseth('https://mainnet.infura.io/mew');

const RegistrarJson = [
  {
    constant: false,
    inputs: [{name: '_hash', type: 'bytes32'}],
    name: 'releaseDeed',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{name: '_hash', type: 'bytes32'}],
    name: 'getAllowedTime',
    outputs: [{name: 'timestamp', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{name: 'unhashedName', type: 'string'}],
    name: 'invalidateName',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: 'bidder', type: 'address'},
      {name: 'seal', type: 'bytes32'},
    ],
    name: 'cancelBid',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{name: '_hash', type: 'bytes32'}],
    name: 'entries',
    outputs: [
      {name: '', type: 'uint8'},
      {name: '', type: 'address'},
      {name: '', type: 'uint256'},
      {name: '', type: 'uint256'},
      {name: '', type: 'uint256'},
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ens',
    outputs: [{name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_hash', type: 'bytes32'},
      {name: '_value', type: 'uint256'},
      {name: '_salt', type: 'bytes32'},
    ],
    name: 'unsealBid',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {name: 'hash', type: 'bytes32'},
      {name: 'value', type: 'uint256'},
      {name: 'salt', type: 'bytes32'},
    ],
    name: 'shaBid',
    outputs: [{name: 'sealedBid', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{name: '_hash', type: 'bytes32'}],
    name: 'transferRegistrars',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{name: '', type: 'address'}, {name: '', type: 'bytes32'}],
    name: 'sealedBids',
    outputs: [{name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{name: '_hash', type: 'bytes32'}],
    name: 'state',
    outputs: [{name: '', type: 'uint8'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: '_hash', type: 'bytes32'},
      {name: 'newOwner', type: 'address'},
    ],
    name: 'transfer',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {name: '_hash', type: 'bytes32'},
      {name: '_timestamp', type: 'uint256'},
    ],
    name: 'isAllowed',
    outputs: [{name: 'allowed', type: 'bool'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{name: '_hash', type: 'bytes32'}],
    name: 'finalizeAuction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'registryStarted',
    outputs: [{name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{name: 'sealedBid', type: 'bytes32'}],
    name: 'newBid',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{name: 'labels', type: 'bytes32[]'}],
    name: 'eraseNode',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{name: '_hashes', type: 'bytes32[]'}],
    name: 'startAuctions',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: 'hash', type: 'bytes32'},
      {name: 'deed', type: 'address'},
      {name: 'registrationDate', type: 'uint256'},
    ],
    name: 'acceptRegistrarTransfer',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{name: '_hash', type: 'bytes32'}],
    name: 'startAuction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rootNode',
    outputs: [{name: '', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {name: 'hashes', type: 'bytes32[]'},
      {name: 'sealedBid', type: 'bytes32'},
    ],
    name: 'startAuctionsAndBid',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {name: '_ens', type: 'address'},
      {name: '_rootNode', type: 'bytes32'},
      {name: '_startDate', type: 'uint256'},
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'hash', type: 'bytes32'},
      {indexed: false, name: 'registrationDate', type: 'uint256'},
    ],
    name: 'AuctionStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'hash', type: 'bytes32'},
      {indexed: true, name: 'bidder', type: 'address'},
      {indexed: false, name: 'deposit', type: 'uint256'},
    ],
    name: 'NewBid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'hash', type: 'bytes32'},
      {indexed: true, name: 'owner', type: 'address'},
      {indexed: false, name: 'value', type: 'uint256'},
      {indexed: false, name: 'status', type: 'uint8'},
    ],
    name: 'BidRevealed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'hash', type: 'bytes32'},
      {indexed: true, name: 'owner', type: 'address'},
      {indexed: false, name: 'value', type: 'uint256'},
      {indexed: false, name: 'registrationDate', type: 'uint256'},
    ],
    name: 'HashRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'hash', type: 'bytes32'},
      {indexed: false, name: 'value', type: 'uint256'},
    ],
    name: 'HashReleased',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, name: 'hash', type: 'bytes32'},
      {indexed: true, name: 'name', type: 'string'},
      {indexed: false, name: 'value', type: 'uint256'},
      {indexed: false, name: 'registrationDate', type: 'uint256'},
    ],
    name: 'HashInvalidated',
    type: 'event',
  },
];

const e = new Browseth.Apis.EventListener(beth.rpc, RegistrarJson, false, '0x539990');
e.startPolling();

const subscription = e.addEventListener(
  '0x6090a6e47849629b7245dfa1ca21d94cd15878ef',
  'AuctionStarted',
  [],
  // logs => {
  //   console.log(
  //     'asdasdasd',
  //     logs.find(log => {
  //       // console.log(e.abi.event.AuctionStarted.signature, log.topics[0]);
  //       console.log(e.abi);
  //       return (
  //         '0x' + e.abi.event.AuctionStarted.signature === log.topics[0]
  //       );
  //     }),
  //   );

// },
logs => console.log(logs)
);

// const x = setInterval(() => {
  // console.log(subscription);
// }, 1000)
// e.stopPolling();