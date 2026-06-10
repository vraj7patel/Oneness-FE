import TourHero from '../components/Tour/TourHero';
import TourPackages from '../components/Tour/TourPackages';
import TourRegistration from '../components/Tour/TourRegistration';

const Tour = () => {
  return (
    <div className="tour-page">
      <TourHero />
      <TourPackages />
      <TourRegistration />
    </div>
  );
};

export default Tour;
