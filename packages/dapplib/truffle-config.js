require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strong dash maze color gloom arena metal giant'; 
let testAccounts = [
"0xcf25576824575ce69ccb331871a4c4b6caa80ab3c83a9683aacc343fe2344665",
"0x72b6fe16d9866e67fa570b521a678878cf22233a10476e5e250c339390be0a3a",
"0xb85687e348d4ec781dd2c702ad98533d1d6dea0c735f38b3fdc7ba9ec534d85b",
"0x7403659e2442b6073c20b3d9c10ab1194f71ad1ca4f081337092159d96974520",
"0x37f827f99ff264a442c275d0ba8e98d424ae546df3541bbf26c252e2197b5f28",
"0xf591a9859c95772af63f21b6cd749b364262d51cf4bec591dfb40a80e1f484ff",
"0x5761cd49f51c0e5faeee300bd13f5e1e5e1b0b419ae54f4ae9a48bdc418523ca",
"0x8a7a9936210c33233a63c3c0b1a3adc38a1a40bf27603cabe0f8ff461ef171d8",
"0x826f298deb09a4b60369cb8595003158307421dec9b6c37bd9e01dd81723ce91",
"0x0165ade7af90b4955059a664e4cf5242cada710c59075300e7edbc6a8753655e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

