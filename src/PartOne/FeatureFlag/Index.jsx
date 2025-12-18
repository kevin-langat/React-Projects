import { useContext, useEffect } from 'react';
import Accordion from '../Accordion/Accordion';
import LightDarkComponent from '../LightDarkComp/Index';
import RandomColorGenerator from '../RandomColorGen/Index';
import TicTacToe from '../TicTacToe/Index';
import TreeView from '../TreeView/TreeView';
import { FeatureFlagGlobal } from './Context/Index';
import GithubProfileFinder from '../GithubProfileFinder/Index';

function FeatureFlagComponent() {
  const { loading, enabledFlags } = useContext(FeatureFlagGlobal);
  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkComponent key={1} />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe key={2} />,
    },
    {
      key: 'showRandomColorGen',
      component: <RandomColorGenerator key={3} />,
    },
    {
      key: 'showAccordion',
      component: <Accordion key={4} />,
    },
    {
      key: 'showTreeView',
      component: <TreeView key={5} />,
    },
    {
      key: 'githubProfileFinder',
      component: <GithubProfileFinder key={6} />,
    },
  ];
  if (loading) return <h2>Loading...</h2>;
  return (
    <div className=' flex flex-col items-center justify-around  w-full'>
      <h2>Feature Flag Component</h2>

      <div className=' flex flex-col gap-4 items-center justify-around  w-full'>
        {componentsToRender?.map((componentItem) =>
          enabledFlags[componentItem.key] ? componentItem.component : null
        )}
      </div>
    </div>
  );
}

export default FeatureFlagComponent;
