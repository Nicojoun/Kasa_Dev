import '../../assets/styles/Home.scss';
import Banner from '../../components/Banner';  // Importation du composant Banner
import SuperCard from '../../components/SuperCard';  // Importation du composant Supercard

function Home() {
  return (
    <div>
        <Banner bannerClass="banner" bannerText="Chez vous, partout et ailleurs" />  {/* Affichage du composant Banner */}
        <SuperCard />  {/* Affichage du composant SuperCard */}
    </div>
  );
}

export default Home;
