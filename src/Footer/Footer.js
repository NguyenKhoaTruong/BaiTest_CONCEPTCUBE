import './Footer.css';
import snsicon1 from './snsicon-01.png';
import snsicon2 from './snsicon-02.png';
import snsicon3 from './snsicon-03.png';
function Footer() {
    return (
        <div className="box-footer">
            <div className="row box-res">
                <div className="col-sm-4">
                    <div className='happened'>
                        <span className="what-happened Text-Style-15">
                            what happened
                        </span>
                        <span className="more-happened">
                            [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                            [공지] 29CM 강남 스토어 영업 종료<br />
                            [공지] 개인 정보 처리 방침 변경 사전 안내<br />
                            [공지] iOS 10 이하 버전 지원 중단 안내<br />
                            [공지] 개인 정보 처리 방침 변경 사전 안내<br />
                        </span>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className='Contact'>
                        <div className='About-Us'>
                            <span className="about-us">
                                about us
                            </span>
                            <span className="more-about-us">
                                회사 소개<br />
                                인재 채용<br />
                                상시 할인 혜택<br />
                            </span>
                        </div>
                        <div className='My-Order'>
                            <span className="my-order">
                                my order
                            </span>
                            <span className="more-my-order">
                                내 주문<br />
                                주문 배송<br />
                                취소 / 교환 / 반품 내역<br />
                                상품 리뷰 내역<br />
                                증빙 서류 발급<br />
                            </span>
                        </div>
                        <div className='My-Account'>
                            <span className="my-account">
                                my account
                            </span>
                            <span className="more-my-account">
                                회원 정보 수정<br />
                                회원 등급<br />
                                마일리지 현황<br />
                                쿠폰<br />
                            </span>
                        </div>
                        <div className='Help'>
                            <span className="help">
                                help
                            </span>
                            <span className="more-help">
                                1 : 1 상담 내역<br />
                                상품 Q & A 내역<br />
                                공지 사항<br />
                                자주하는 질문<br />
                                고객의 소리<br />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row box-what-happende'>
                <div className="col-6">
                    <span className="what-happened-corp-l">
                        © 2020-2021 what happened corp  l  (주) 왓헤픈<span className="text-style-1">｜</span>
                        대표자 : 홍길<span className="text-style-2">｜</span>
                        사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br />
                        서울특별시 강남구 도산대로 8길 1<span className="text-style-3">｜</span>
                        FAX : 070-0000-0000  l  서비스 이용약관
                        <span className="Text-Style-27">개인정보처리방침</span>
                    </span>
                </div>
                <div className="col-6">
                    <div className='Contact-With-Logo'>
                        <img src={snsicon1} className="snsicon_01" />
                        <img src={snsicon2} className="snsicon_02" />
                        <img src={snsicon3} className="snsicon_03" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
