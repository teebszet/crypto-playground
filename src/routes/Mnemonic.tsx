import { useState } from 'react';
import { generateMnemonic } from '../utils/bitcoin';
import Button from '../components/Button';
import './Mnemonic.scss';

export const MnemonicContainer: React.FC = () => {
  const [mnemonicString, setMnemonicString] = useState<string | null>(null);

  // TODO useMemo here
  const handleClickGenerate = () => {
    const code = generateMnemonic();
    setMnemonicString(code);
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
