{/* importation de notre style boostrap*/}

import 'bootstrap/dist/css/bootstrap.min.css';
{/* importation de nos composants*/}
import Formulo from './composant/Formulo';
import Carous from './composant/Carous';
function App() {
  return (
    <>
    {/* integration ou appel de nos composants*/}
    <Carous/>
    <Formulo/>
    {/* un simple affichage du titre à l'aide du taget h1 */}
    <h1>hello word</h1></>
  );
}

export default App;
