import { FooterSimple } from '../components/footers/footer';
import LandingHeader from '../components/headers/landing_header';
import ContactUs from '../sections/contact';
import FeaturesTitle from '../sections/features_with_title';
import HeroFirst from '../sections/hero';
import StatsGroup from '../sections/stats_group';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden !important' }}>
      <LandingHeader links={[{ link: '/ciao', label: 'Ciao' }]} />
      <HeroFirst />
      <FeaturesTitle />
      <StatsGroup />
      <ContactUs />
      <FooterSimple />
    </div>
  );
}
