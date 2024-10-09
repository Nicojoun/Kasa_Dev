import React from 'react';
import '../../assets/styles/Home.scss';
import Banner from '../../components/Banner';  
import logements from '../../datas/logements.json'; 
import Card from '../../components/Card';  
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div>
      <Banner bannerClass='bannerHome' bannerText='Chez vous, partout et ailleurs' bannerTextClass='bannerHomeText' />  
      <div className='home'> 
        {logements.map(logement => (
          <Link className='home-linkHousing' key={logement.id} to={`/housing/${logement.id}`}> 
            <Card cardSrc={logement.cover} 
              cardTitle={logement.title}
              cardAlt={logement.title} 
              cardClass='home-card' 
            /> 
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;