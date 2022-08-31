import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';
import mainBanner from './main-banner.png';
import Bes_bg from './bes-bg.png';
import topone from './producticon-01.png';
import toptwo from './producticon-02.png';
import topthree from './producticon-03.png';
import topproducone from './best-image-01.png';
import topproductwo from './best-image-02.png';
import topproductthree from './best-image-03.png';
import goicon from './go-icon.png';
import img01 from './img-01.png';
import hearticon from './hearticon.png';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-banner'>
        <img src={mainBanner} alt="mainBanner" className="mainBanner" />
      </div>
      <div className="Layer-563">
        <div className='Info-what-happened'>
          <span className="What-Happened Text-Style-32">
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
        <div className='Title-best-product'>
          <span className="Best-Product Text-Style-5">
            Best Product
          </span>
        </div>
        <div className='Your-Info-Product'>
          <span className="Info-product">
            How to create mobile-optimized videos in minutes. Not a designer,<br />
            every team makes a lot of videos Can be trimmed. Take the first
          </span>
        </div>
        <div className='top-product'>
          <div className='top-one'>
            <img className='number-one' src={topone} />
            <img className='img-number-one' src={topproducone} />
            <div className='let-go-it-number-one'>
              <span className="How-to-create-mobile-optimized Text-Style-20">
                How to create<br />
                mobile-optimized
              </span>
              <img className='go' src={goicon} />
            </div>
          </div>
          <div className='top-two'>
            <img className='number-two' src={toptwo} />
            <img className='img-number-two' src={topproductwo} />
            <div className='let-go-it-number-two'>
              <span className="How-to-create-mobile-optimized Text-Style-20">
                How to create<br />
                mobile-optimized
              </span>
              <img className='go' src={goicon} />
            </div>
          </div>
          <div className='top-three'>
            <img className='number-three' src={topthree} />
            <img className='img-number-three' src={topproductthree} />
            <div className='let-go-it-number-three'>
              <span className="How-to-create-mobile-optimized Text-Style-20">
                How to create<br />
                mobile-optimized
              </span>
              <img className='go' src={goicon} />
            </div>
          </div>
        </div>
      </div>
      <div className='infomation-product'>
        <div className='all-product'>
          <div className='product'>
            <img src={img01} className='img-product' />
            <div className='name-product'>
              <span class="what-happen-How-to-create-copy Text-Style-14">
                [what happen] How to create
              </span>
            </div>
            <div className='price-and-like'>
              <span class="-won-copy Text-Style-20">
                2,500 won
              </span>
              <img src={hearticon} />
              <span class="-copy">
                236
              </span>
            </div>
          </div>
          <div className='product'>
            <img src={img01} className='img-product' />
            <div className='name-product'>
              <span class="what-happen-How-to-create-copy Text-Style-14">
                [what happen] How to create
              </span>
            </div>
            <div className='price-and-like'>
              <span class="-won-copy Text-Style-20">
                2,500 won
              </span>
              <img src={hearticon} />
              <span class="-copy">
                236
              </span>
            </div>
          </div>
          <div className='product'>
            <img src={img01} className='img-product' />
            <div className='name-product'>
              <span class="what-happen-How-to-create-copy Text-Style-14">
                [what happen] How to create
              </span>
            </div>
            <div className='price-and-like'>
              <span class="-won-copy Text-Style-20">
                2,500 won
              </span>
              <img src={hearticon} />
              <span class="-copy">
                236
              </span>
            </div>
          </div>
          <div className='product'>
            <img src={img01} className='img-product' />
            <div className='name-product'>
              <span class="what-happen-How-to-create-copy Text-Style-14">
                [what happen] How to create
              </span>
            </div>
            <div className='price-and-like'>
              <span class="-won-copy Text-Style-20">
                2,500 won
              </span>
              <img src={hearticon} />
              <span class="-copy">
                236
              </span>
            </div>
          </div>
          <div className='product'>
            <img src={img01} className='img-product' />
            <div className='name-product'>
              <span class="what-happen-How-to-create-copy Text-Style-14">
                [what happen] How to create
              </span>
            </div>
            <div className='price-and-like'>
              <span class="-won-copy Text-Style-20">
                2,500 won
              </span>
              <img src={hearticon} />
              <span class="-copy">
                236
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
