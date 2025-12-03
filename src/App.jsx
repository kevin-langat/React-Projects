import { Route, Routes } from 'react-router-dom';
import CommonLayout from './Layout/CommonLayout';
import Accordion from './PartOne/Accordion/Accordion';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route path='/accordion-component' element={<Accordion />} />
      </Route>
    </Routes>
  );
}

export default App;
