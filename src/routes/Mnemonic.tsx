import { useState } from 'react';
import Mnemonic from 'bitcore-mnemonic';
import Button from '../components/Button';
import './Mnemonic.scss';

export const MnemonicContainer: React.FC = () => {
  const [mnemonicString, setMnemonicString] = useState<string | null>(null);

  const handleClickGenerate = () => {
    const code = new Mnemonic(Mnemonic.Words.ENGLISH);
    setMnemonicString(code.toString());
  };
  return (
    <>
      <section className="mnemonic">
        <Button onClick={handleClickGenerate}>Generate</Button>
        {mnemonicString && (
          <div>
            <p>{mnemonicString}</p>
          </div>
        )}
      </section>
      <section className="more-info">
        <h3>Reference</h3>
        <p>NOTE: BIP-39 is unanimously discouraged for implementations</p>
        <p>See <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">external link</a></p>
      </section>
    </>
  );
};

export default MnemonicContainer;
