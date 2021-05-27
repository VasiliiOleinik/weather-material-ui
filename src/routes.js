import Loadable from 'react-loadable';
import Loading from 'src/components/Loading';

const MainScreen = Loadable({
  loader: () => import('./pages/MainScreen'), loading: Loading
});
const WeatherPage = Loadable({
  loader: () => import('./pages/WeatherPage'), loading: Loading
});

const routes = [
  { path: '/', name: 'Главная страница', component: MainScreen, exact: true },
  { path: '/weather', name: 'Погода в', component: WeatherPage, exact: true },
];

export default routes;
