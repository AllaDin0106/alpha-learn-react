const bip39 = require('bip39');
const crypto = require('crypto');
const m2p = require('mnemonic-to-key-pair');

const Seed = async mnemonic => {
    return await bip39.mnemonicToSeed(mnemonic);
}

const Phrase = async () => {
    const bytes = crypto.randomBytes(16);
    return bip39.entropyToMnemonic(bytes.toString('hex'));
}

const Public = async mnemonic => {
    const k = await m2p(mnemonic, "m'/44'/60'/0'/0");
    return '0x' + crypto.createHmac('sha256', k.publicKey).digest('hex');
}

const Private = async mnemonic => {
    const k = await m2p(mnemonic, "m'/44'/60'/0'/0");
    return '0x' + crypto.createHmac('sha256', k.privateKey).digest('hex');
}

export { Public, Private, Seed, Phrase };