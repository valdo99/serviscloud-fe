import LandingHeader from '../components/headers/LandingHeader';
import ContactUs from '../sections/contactUs';
import FeaturesTitle from '../sections/features_with_title';
import HeroFirst from '../sections/hero_first';
import StatsGroup from '../sections/StatsGroup';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden !important' }}>
      <LandingHeader links={[{ link: '/ciao', label: 'Ciao' }]} />
      <HeroFirst />
      <FeaturesTitle />
      <StatsGroup />
      <ContactUs />
    </div>
  );
}
