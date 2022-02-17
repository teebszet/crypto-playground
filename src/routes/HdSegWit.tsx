import { useState } from 'react';
import { generateMnemonic, generateHdSegwitAddress } from '../utils/bitcoin';
import Button from '../components/Button';
import './HdSegWit.scss';

export const HdSegWit: React.FC = () => {
  const [mnemonic, setMnemonic] = useState<any | null>(null);
  const [segwitAddress, setSegwitAddress] = useState<any | null>(null);

  const handleClickGenerate = () => {
    const mnemonicWords = generateMnemonic();
    setMnemonic(mnemonicWords);
    setSegwitAddress(generateHdSegwitAddress(mnemonicWords));
  };
  return (
    <>
      <section className="hd-segwit">
        <Button onClick={handleClickGenerate}>Generate</Button>
        {mnemonic && (
          <div>
            <p>{mnemonic}</p>
            <p>{segwitAddress}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default HdSegWit;
