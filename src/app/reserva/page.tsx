import Header from '../components/general/header/Headerlg';
import Services from '../components/Apprentice/landing-publi/services';
import Rating from '../components/Apprentice/landing-publi/rating';
import LandlordInfo from '../components/Apprentice/landing-publi/landlordinfo';
import Footer from '../components/general/footer/Footer';

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <div className="mb-6">
        <p className="text-lg font-semibold">Gras poliovirus clorico virus?</p>
        <p className="text-sm">A 500 metros de distancia</p>
      </div>
      <Services />
      <Rating />
      <LandlordInfo />
      <Footer />
    </div>
  );
}