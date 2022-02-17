import { useState, useEffect } from 'react';
import {
  generateMnemonic,
  generateSeedFromMnemonic,
  generateHdKey,
  generatePath,
  generateDerivedBIP84ExtendedPublicKey,
  generateDerivedChildPublicKey,
  toHex,
  toP2WPKH,
} from '../utils/bitcoin';
import Button from '../components/Button';
import './HdSegWit.scss';

export const HdSegWit: React.FC = () => {
  const [mnemonic, setMnemonic] = useState<string | null>(null);
  const [seed, setSeed] = useState<Uint8Array | null>(null);
  const [path, setPath] = useState<string | null>(generatePath(0));
  const [derived, setDerived] = useState<any | null>(null);
  const [derivedChild, setDerivedChild] = useState<any | null>(null);
  const [index, setIndex] = useState(0);

  const handleClickGenerate = () => {
    const mnem = generateMnemonic();
    setMnemonic(mnem);
  };

  useEffect(() => {
    if (!mnemonic) {
      return;
    }
    const seed = generateSeedFromMnemonic(mnemonic);
    setSeed(seed);
  }, [mnemonic]);

  // TODO useMemo for these handlers
  const handleChangeMnemonic = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMnemonic(e.target.value);
  };

  const handleChangePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPath(e.target.value);
  };

  const handleChangeIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(Number(e.target.value));
  };

  useEffect(() => {
    if (!seed || !path) {
      return;
    }
    try {
      const hdKey = generateHdKey(seed);
      const derivedRoot = generateDerivedBIP84ExtendedPublicKey(hdKey, path);
      setDerived(derivedRoot.publicExtendedKey);
      const derivedChild = generateDerivedChildPublicKey(derivedRoot, index);
      setDerivedChild(derivedChild.publicKey);
    } catch (e) {
      console.log(e);
    }
  }, [seed, path, index]);

  return (
    <>
      <section className="hd-segwit">
        <div className="hd-segwit__seed">
          <Button onClick={handleClickGenerate}>Generate</Button>
          {seed && (
            <div>
              <label>Mnemonic</label>
              <textarea
                onChange={handleChangeMnemonic}
                value={String(mnemonic)}
              />
              <label>Seed (hex)</label>
              <p>{toHex(seed)}</p>
              <label>BIP32 Derivation Path</label>
              <input
                onChange={handleChangePath}
                type="text"
                value={String(path)}
              />
              <label>BIP32 Extended Public Key</label>
              <p>{derived}</p>
            </div>
          )}
        </div>
        {derivedChild && (
          <div className="hd-segwit__derived">
            <div>
              <label>Derived Key Index</label>
              <input
                onChange={handleChangeIndex}
                type="number"
                value={Number(index)}
                min={0}
                max={231}
              />
              <label>Derived Public Key (hex)</label>
              <p>{toHex(derivedChild)}</p>
              <label>Derived SegWit Address (P2WPKH)</label>
              <p>{toP2WPKH(derivedChild)}</p>
            </div>
          </div>
        )}
      </section>
      <section className="more-info">
        <h3>Reference</h3>
        <p>
          See{' '}
          <a href="https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki">
            external link
          </a>
        </p>
      </section>
    </>
  );
};

export default HdSegWit;
