import { NetplixApp } from './pages/Netplix-app'
import './style/styles.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import { NetplixHome } from './pages/Netplix-home';
import { Signup } from './pages/SignupPage';
import { Signin } from './pages/SigninPage';
import { UserProfile } from './pages/User-profile'
import { KidsProfile } from './pages/Kids-profile'
import { Movies } from './pages/Movies';
import { UserList } from './pages/User-list';
import { TvSeries } from './pages/Tv-series';
import { VideoPlay } from './pages/Video-play';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={UserProfile} path="/user-profile" />
        <Route component={KidsProfile} path="/kids" />
        <Route component={Movies} path="/movies" />
        <Route component={UserList} path="/user-list" />
        <Route component={VideoPlay} path="/video-on/:id" />
        <Route component={TvSeries} path="/tv-series" />
        <Route component={NetplixApp} path="/media" />
        <Route component={Signup} path="/signup" />
        <Route component={Signin} path="/signin" />
        <Route exact component={NetplixHome} path="/" />
      </div>
    </Router>
  );
}

export default App;
