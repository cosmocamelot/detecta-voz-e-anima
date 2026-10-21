import { HashRouter, Route, Routes } from 'react-router';

import MainPage from './index';

import AnimationLayout from './display/layout';

import DisplayDefaultMode from './display/default';

export default () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/' element={<AnimationLayout />}>
            <Route path='/' element={<DisplayDefaultMode />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};
