import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';
import mainBanner from './main-banner.png';
import Bes_bg from './bes-bg.png';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-banner'>
        <img src={mainBanner} alt="mainBanner" className="mainBanner" />
      </div>
      <div className="Layer-563">
        <div className='Info-what-happened'>
          <span className="What-Happened">
            What Happened!
          </span>
          <span className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe Text-Style-6">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
            step to your brand's success. How to create
            mobile-optimized videos in minutes.
          </span>
        </div>

      </div>
      <div className='Bes_bg'>
        <img src={Bes_bg} alt="Bes_bg" className="Bes_bg" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
