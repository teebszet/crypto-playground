import { useState } from 'react';
import Mnemonic from 'bitcore-mnemonic';
import Button from '../components/Button';
import './HdSegWit.scss';

export const HdSegWit: React.FC = () => {
  const [mnemonic, setMnemonic] = useState<any | null>(null);

  const handleClickGenerate = () => {
    const code = new Mnemonic(Mnemonic.Words.ENGLISH);
    setMnemonic(code);
  };
  return (
    <>
      <section className="hd-segwit">
        <Button onClick={handleClickGenerate}>Generate</Button>
        {mnemonic && (
          <div>
            <p>{mnemonic.toString()}</p>
            <p>{mnemonic.toHDPrivateKey().toString()}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default HdSegWit;
