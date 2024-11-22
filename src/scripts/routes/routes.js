import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Landing from '../views/pages/landing';
import Layanan from '../views/pages/layanan';

const routes = {
  '/': Landing, // default page
  '/layanan': Layanan,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;