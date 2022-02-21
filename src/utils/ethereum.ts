import { ethers } from 'ethers';

export const connectMetaMask = async () => {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum, 'any');
  
  // force refresh on network change
  provider.on('network', (newNetwork, oldNetwork) => {
    if (oldNetwork) {
      window.location.reload();
    }
  });

  // connect to metamask
  (window as any).ethereum.request({ method: 'eth_requestAccounts' });

  return provider;
};
