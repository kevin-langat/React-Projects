import { Route, Routes } from 'react-router-dom';
import CommonLayout from './Layout/CommonLayout';
import Accordion from './PartOne/Accordion/Accordion';
import RandomColorGenerator from './PartOne/RandomColorGen/Index';
import Index from './PartOne/StarRatingComponent/Index';
import StarRatingComponent from './PartOne/StarRatingComponent/Index';
import ImageSlider from './PartOne/ImageSlider/Index';
import LoadMoreComponent from './PartOne/LoadMoreComponent/Index';
import TreeView from './PartOne/TreeView/TreeView';
import QRCodeGen from './PartOne/QRCodeGen/Index';

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
        <Route path='/image-slider' element={<ImageSlider />} />
        <Route path='/load-more-component' element={<LoadMoreComponent />} />
        <Route path='/tree-view-component' element={<TreeView />} />
        <Route path='/qr-code-generator' element={<QRCodeGen />} />
      </Route>
    </Routes>
  );
}

export default App;
