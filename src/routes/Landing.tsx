import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import './Landing.scss';
import type { RouteItem } from '../App';

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

type LandingProps = {
  routes: RouteItem[];
};
export const Landing: React.FC<LandingProps> = ({ routes }) => {
  return (
    <MainLayout contentHeader="What do you want to explore?">
      <section className="landing-actions">
        <ul className="landing-actions__grid">
          {routes.map((item) => (
            <LandingListItem key={item.route} {...item} />
          ))}
        </ul>
      </section>
    </MainLayout>
  );
};

export default Landing;
