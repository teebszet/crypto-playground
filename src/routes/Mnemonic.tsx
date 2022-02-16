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
    <section className="mnemonic">
      <Button onClick={handleClickGenerate}>
        Generate
      </Button>
      <p>{mnemonicString}</p>
    </section>
  );
};

export default MnemonicContainer;
