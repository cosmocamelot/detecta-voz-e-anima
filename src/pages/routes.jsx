import { HashRouter, Route, Routes } from 'react-router';

import MainPage from './index';
import AnimationPage from './display';

export default () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/' element={<AnimationPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
