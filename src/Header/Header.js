import './Header.css';
import logoweb from '../../src/logo.png';
function Header() {
    return (
        <div className="box">
            <div className="row">
                <div className="col-sm-2">
                    <img src={logoweb} alt="logoweb" className="logo" />
                </div>
                <div className="col-sm-10">
                    <div className='option'>
                        <span className="Introduction Text-Style-11">
                            Introduction
                        </span>
                        <span className="solution Text-Style-11">
                            solution
                        </span>
                        <span className="Rate-plan Text-Style-11">
                            Rate plan
                        </span>
                        <div className="Rectangle-662"></div>
                        <span className="login Text-Style-11">
                            login
                        </span>
                        <span className="Apply-for-free-use Text-Style-11">
                            Apply for free use
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
