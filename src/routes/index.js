import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Search from '../pages/Search';

export const publicRoutes = [
  { url: '/', component: Home, exact: true },
  { url: '/dog/:dogId', component: Detail, exact: true },
  { url: '/search/:searchId', component: Search, exact: true },
];
