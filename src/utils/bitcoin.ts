import { HDKey } from 'ethereum-cryptography/hdkey';
import {
  generateMnemonic as genMnemonic,
  mnemonicToSeedSync,
} from 'ethereum-cryptography/bip39';
import { wordlist } from 'ethereum-cryptography/bip39/wordlists/english';
import { toHex as toHexUtil } from 'ethereum-cryptography/utils';
import * as bitcoin from 'bitcoinjs-lib';

export const generateMnemonic = () => {
  return genMnemonic(wordlist);
};

export const generateSeedFromMnemonic = (mnemonic: string) => {
  const seed = mnemonicToSeedSync(mnemonic);
  return seed;
};

export const generateHdKey = (seed: Uint8Array) => {
  const hdKey = HDKey.fromMasterSeed(seed, {private: 0x04b2430c, public: 0x04b24746 });
  return hdKey;
};

export const generatePath = (index: number) => {
  const path = `m/84'/0'/0'/0`;
  return path;
};

export const generateDerivedBIP84ExtendedPublicKey = (
  hdKey: HDKey,
  path: string
) => {
  const derived = hdKey.derive(path);
  return derived;
};

export const toHex = (s: Uint8Array) => {
  if (!s) {
    return '';
  }
  return toHexUtil(s);
};

export const generateDerivedChildPublicKey = (hdKey: HDKey, index: number) => {
  const derived = hdKey.deriveChild(index);
  return derived;
};

export const toP2WPKH = (publicKey: Uint8Array) => {
  if (!publicKey) {
    return;
  }
  const { address } = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(publicKey.buffer),
  });
  return address;
};
