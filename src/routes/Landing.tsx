import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import './Landing.scss';

const landingListItems: LandingListItemProps[] = [
  {
    title: 'Mnemonic Words',
    description: 'Generate random mnemonic words using BIP-39',
    route: '/mnemonic',
  },
  {
    title: 'HD SegWit',
    description:
      'Generate Hierarchical Deterministic (HD) Segregated Witness (SegWit) bitcoin address from a given seed and path',
    route: '/hd-segwit',
  },
  {
    title: 'Multi-sig P2SH',
    description:
      'Generate an n-out-of-m Multisignature (multi-sig) Pay-To-Script-Hash (P2SH) bitcoin address, where n, m and public keys can be specified',
    route: '/multisig-p2sh',
  },
];

type LandingListItemProps = {
  title: string;
  description: string;
  route: string;
};

export const LandingListItem: React.FC<LandingListItemProps> = ({
  title,
  description,
  route,
}) => {
  return (
    <li>
      <Link to={route}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </li>
  );
};

export const Landing = () => {
  return (
    <MainLayout>
      <section className="landing-actions">
        <h2 className="landing-actions__header">
          What do you want to explore?
        </h2>
        <ul className="landing-actions__grid">
          {landingListItems.map((item) => (
            <LandingListItem {...item} />
          ))}
        </ul>
      </section>
    </MainLayout>
  );
};

export default Landing;
