import { useState } from 'react';
import { connectMetaMask } from '../utils/ethereum';
import { useErrorContext } from '../hooks/errorContext';
import Button from '../components/Button';
import './EthereumConnection.scss';

type NetworkStatus = {
  network: {
    chainId: number;
    name: string;
  };
  blockNumber: number;
};

export const EthereumConnection: React.FC = () => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus | null>(null);
  const { setErrorMessage } = useErrorContext();

  const handleClickConnect = async () => {
    try {
      const provider = await connectMetaMask();

      const blockNumber = await provider?.getBlockNumber();
      const network = await provider?.getNetwork();
      setNetworkStatus({ blockNumber, network });
    } catch (e) {
      setErrorMessage('Metamask is required!');
    }
  };

  return (
    <>
      <section className="ethereum-connection">
        <div className="ethereum-connection__info">
          <Button onClick={handleClickConnect}>Connect</Button>
          <label>Network Chain ID</label>
          <p>{networkStatus?.network?.chainId}</p>
          <label>Network Name</label>
          <p>{networkStatus?.network?.name}</p>
          <label>BlockNumber</label>
          <p>{networkStatus?.blockNumber}</p>
        </div>
      </section>
    </>
  );
};

export default EthereumConnection;
