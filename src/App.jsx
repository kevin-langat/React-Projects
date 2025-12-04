import { Route, Routes } from 'react-router-dom';
import CommonLayout from './Layout/CommonLayout';
import Accordion from './PartOne/Accordion/Accordion';
import RandomColorGenerator from './PartOne/RandomColorGen/Index';
import Index from './PartOne/StarRatingComponent/Index';
import StarRatingComponent from './PartOne/StarRatingComponent/Index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        <Route path='/accordion-component' element={<Accordion />} />
        <Route
          path='/random-color-generator'
          element={<RandomColorGenerator />}
        />
        <Route
          path='/star-rating-component'
          element={<StarRatingComponent />}
        />
      </Route>
    </Routes>
  );
}

export default App;
