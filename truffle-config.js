require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remind concert grace beauty forget sponsor'; 
let testAccounts = [
"0xe85e60e74b1121f0eef280b859d525b292d1ecd8a5cb8043dbe3e7572284f21e",
"0xcf0dca991dfc935bdf311cfaa3b94cb2a6c4e6b1eaa373843e6b8ca61de2a113",
"0x43e00d3a6a280a9b27a58f3c458d1ae977e9511ae0fe5094f73dac08e110c534",
"0xf84b439f2fc59a868066c8618d71c0acf507776438e309cd99d9136ac57f1faa",
"0xac1f2719ed8e159ce5016c37cbf589a171b3f0805ae645575a9fd7be1e28e837",
"0xafc5fb690b81bf768cacc29cc8f82c9dfda0b135015923f4923c80881650ea68",
"0x6a699a92b1916058274dca18caffbfec2a661415f7bd965b72e232c49dac2077",
"0x9a5987627d73bc439d50890327f035462d5dd92b6e5426c56fb6ff1e97599ef2",
"0x0d5876c1342232b8b3b857fde90e61f59da7fd885dd4b70e8481a3a612371737",
"0xf61b1f3df5c577f036fe0b9b9fa651f258ba1710bc7c0de2fb0c5303833384c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
