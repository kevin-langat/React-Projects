import { Route, Routes } from 'react-router-dom';
import CommonLayout from './Layout/CommonLayout';
import Accordion from './PartOne/Accordion/Accordion';
import RandomColorGenerator from './PartOne/RandomColorGen/Index';

import StarRatingComponent from './PartOne/StarRatingComponent/Index';
import ImageSlider from './PartOne/ImageSlider/Index';
import LoadMoreComponent from './PartOne/LoadMoreComponent/Index';
import TreeView from './PartOne/TreeView/TreeView';
import QRCodeGen from './PartOne/QRCodeGen/Index';
import LightDarkComponent from './PartOne/LightDarkComp/Index';
import ScrollIndicator from './PartOne/ScrollIndicator/Index';
import CustomTabComponent from './PartOne/CustomTabs/Index';
import ModalPopupComponent from './PartOne/ModalPopupComponent/Index';
import GithubProfileFinder from './PartOne/GithubProfileFinder/Index';
import SearchAutoComplete from './PartOne/SearchAutcomplete/Index';
import TicTacToe from './PartOne/TicTacToe/Index';
import FeatureFlagContext from './PartOne/FeatureFlag/Context/Index';
import FeatureFlagComponent from './PartOne/FeatureFlag/Index';
import UseFetchHook from './PartOne/CustomHooks/UseFetch/Index';
import UseOnclickOutside from './PartOne/CustomHooks/UseOnclickOutside/Index';
import UseWindowResize from './PartOne/CustomHooks/UseWindowResize/Index';
import ScrollToTopBottomComponent from './PartOne/ScrollTopBottomComponent/Index';

import ScrollToSection from './PartOne/ScrollTopBottomComponent/IndexSection';
import WeatherAppComponent from './PartOne/WeatherApp/Index';
import RecipeApp from './PartOne/RecipeApp/Index';
import Favourites from './PartOne/RecipeApp/Favourites';
import RecipePage from './PartOne/RecipeApp/RecipePage';
import ShoppingCart from './PartOne/ShoppingCart/Index';
import Cart from './PartOne/ShoppingCart/Cart';
import ExpenseTracker from './PartOne/ExpenseTracker/Index';
import BlogApp from './PartOne/MERNStackBlogApp/Client/Index';
import StepProgressBar from './PartTwo/StepProgressBar/StepProgressBar';
import PaginationComponent from './PartTwo/Pagination/Index';
import DigitalClock from './PartTwo/DigitalClock/Index';
import RandomQuoteGen from './PartTwo/QuoteGen/Index';
import ToolTip from './PartTwo/ToolTip/ToolTip';
import CurrencyConverter from './PartTwo/CurrencyConverter/CurrencyConverter';
import ProductFilter from './PartTwo/ProductFilter/ProductFilter';
import TipCalculator from './PartTwo/TipCalculator/TipCalculator';
import MusicPlayer from './PartTwo/MusicPlayer/MusicPlayer';
import ProgressBar from './PartTwo/ProgressBar/ProgressBar';
import BMICalculator from './PartTwo/BMICalculator/BMICalculator';
import ButtonRippleEffect from './PartTwo/ButtonRippleEffect/ButtonRippleEffect';

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
        <Route path='/light-dark-component' element={<LightDarkComponent />} />
        <Route path='/scroll-indicator' element={<ScrollIndicator />} />
        <Route path='/custom-tab-component' element={<CustomTabComponent />} />
        <Route
          path='/modal-popup-component'
          element={<ModalPopupComponent />}
        />
        <Route
          path='/github-profile-finder'
          element={<GithubProfileFinder />}
        />
        <Route
          path='/search-autocomplete-component'
          element={<SearchAutoComplete />}
        />
        <Route path='/tic-tac-toe-game' element={<TicTacToe />} />
        <Route
          path='/feature-flag-component'
          element={
            <FeatureFlagContext>
              <FeatureFlagComponent />
            </FeatureFlagContext>
          }
        />
        <Route path='/custom-hooks-component' element={<UseFetchHook />} />
        <Route
          path='/use-onclick-outside-component'
          element={<UseOnclickOutside />}
        />
        <Route
          path='/use-window-resize-component'
          element={<UseWindowResize />}
        />
        <Route
          path='/scroll-to-top-bottom-component'
          element={<ScrollToTopBottomComponent />}
        />
        <Route
          path='/scroll-to-section-component'
          element={<ScrollToSection />}
        />
        <Route
          path='/weather-app-component'
          element={<WeatherAppComponent />}
        />
        <Route path='/recipe-app' element={<RecipeApp />} />
        <Route path='/recipe-app/recipe-page/:id' element={<RecipePage />} />
        <Route path='/recipe-app/favourites-page' element={<Favourites />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/my-cart' element={<Cart />} />
        <Route path='/expense-tracker' element={<ExpenseTracker />} />
        <Route path='/blog-app' element={<BlogApp />} />

        {/* Part two of the projects */}
        <Route path='/pagination-component' element={<PaginationComponent />} />
        <Route path='/digital-clock' element={<DigitalClock />} />
        <Route path='/step-progress-bar' element={<StepProgressBar />} />
        <Route path='/random-quote-gen' element={<RandomQuoteGen />} />
        <Route path='/tooltip' element={<ToolTip />} />
        <Route path='/currency-converter' element={<CurrencyConverter />} />
        <Route path='/product-filter-by-category' element={<ProductFilter />} />
        <Route path='/tip-calculator' element={<TipCalculator />} />
        <Route path='/music-player' element={<MusicPlayer />} />
        <Route path='/progress-bar' element={<ProgressBar />} />
        <Route path='/bmi-calculator' element={<BMICalculator />} />
        <Route path='/button-ripple-effect' element={<ButtonRippleEffect />} />
      </Route>
    </Routes>
  );
}

export default App;
