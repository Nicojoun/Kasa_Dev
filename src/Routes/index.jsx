import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'; // Page d'accueil
import About from '../pages/About'; // Page à propos
import HousingSheet from '../pages/HousingSheet'; // Composant pour la fiche de logement
import NotFound from '../pages/NotFound'; // Page 404

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />  {/* Route pour la page Home */}
                <Route path="/about" element={<About />} />  {/* Route pour la page à propos */}
                <Route path="/housing/:id" element={<HousingSheet />} />  {/* Route pour la fiche de logement avec ID dynamique */}
                <Route path="*" element={<NotFound />} />  {/* Route pour gérer les erreurs 404 */}
            </Routes>
    )
}

export default AppRoutes;
