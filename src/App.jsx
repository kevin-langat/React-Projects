import { Route, Routes } from 'react-router-dom';
import CommonLayout from './Layout/CommonLayout';
import Accordion from './PartOne/Accordion/Accordion';
import RandomColorGenerator from './PartOne/RandomColorGen/Index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route path='/accordion-component' element={<Accordion />} />
        <Route
          path='/random-color-generator'
          element={<RandomColorGenerator />}
        />
      </Route>
    </Routes>
  );
}

export default App;
