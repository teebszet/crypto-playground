import { HDKey } from 'ethereum-cryptography/hdkey';
import {
  generateMnemonic as genMnemonic,
  mnemonicToSeedSync,
} from 'ethereum-cryptography/bip39';
import { wordlist } from 'ethereum-cryptography/bip39/wordlists/english';

// function getAddress(node: any, network?: any): string {
//   return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address!;
// }

export const generateMnemonic = () => {
  return genMnemonic(wordlist);
};

export const generateHdSegwitAddress = (mnemonic: string) => {
  let seed = mnemonicToSeedSync(mnemonic);
  let root = HDKey.fromMasterSeed(seed);

  // return getAddress(root.derivePath("m/0'/0/0"));
  const address = root.derive("m/0'/0/0");
  return address.publicKey;
};
