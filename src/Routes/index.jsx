import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'; 
import About from '../pages/About'; 
import HousingSheet from '../pages/HousingSheet'; 
import NotFound from '../pages/NotFound'; 

function AppRoutes() {
    return (
            <Routes>
                <Route path='/' element={<Home />} />  {/* Route pour la page d'accueil */}
                <Route path='/about' element={<About />} />  {/* Route pour la page à propos */}
                <Route path='/housing/:id' element={<HousingSheet />} />  {/* Route pour la fiche de logement avec ID dynamique */}
                <Route path='*' element={<NotFound />} />  {/* Route pour la page d'erreurs */}
            </Routes>
    )
}

export default AppRoutes;
