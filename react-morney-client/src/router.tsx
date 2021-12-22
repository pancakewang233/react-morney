import {Money} from './views/Money';
import {Tags} from './views/Tags';
import {Statistics} from './views/Statistics';

const routeList = [
  {path:'/money', element: <Money />},
  {path:'/tags', element: <Tags />},
  {path:'/statistics', element: <Statistics />}
]
export {routeList}
