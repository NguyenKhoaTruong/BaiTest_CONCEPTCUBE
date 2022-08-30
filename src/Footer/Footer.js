import './Footer.css';
function Footer() {
    return (
        <div className="box-footer">
            <div className="row">
                <div className="col-sm-4">
                    <div className='happened'>
                        <span className="what-happened Text-Style-15">
                            what happened
                        </span>
                        <span className="more-happened">
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                            [공지] 29CM 강남 스토어 영업 종료
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                            [공지] iOS 10 이하 버전 지원 중단 안내
                            [공지] 개인 정보 처리 방침 변경 사전 안내
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
                                회사 소개
                                인재 채용
                                상시 할인 혜택
                            </span>
                        </div>
                        <div className='My-Order'>
                            <span className="my-order">
                                my order
                            </span>
                            <span className="more-my-order">
                                내 주문
                                주문 배송
                                취소 / 교환 / 반품 내역
                                상품 리뷰 내역
                                증빙 서류 발급
                            </span>
                        </div>
                        <div className='My-Account'>
                            <span className="my-account">
                                my account
                            </span>
                            <span className="more-my-account">
                                회원 정보 수정
                                회원 등급
                                마일리지 현황
                                쿠폰
                            </span>
                        </div>
                        <div className='Help'>
                            <span className="help">
                                help
                            </span>
                            <span className="more-help">
                                1 : 1 상담 내역
                                상품 Q & A 내역
                                공지 사항
                                자주하는 질문
                                고객의 소리
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                    <span className="what-happened-corp-l">
                        © 2020-2021 what happened corp  l  (주) 왓헤픈<span className="text-style-1">｜</span>
                        대표자 : 홍길<span className="text-style-2">｜</span>
                        사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                        서울특별시 강남구 도산대로 8길 1<span className="text-style-3">｜</span>
                        FAX : 070-0000-0000  l  서비스 이용약관
                        <span className="Text-Style-27">개인정보처리방침</span>
                    </span>
                </div>
                <div className="col-6">
                    <div className='Contact-With-Logo'>
                        <div className="Shape-3437"></div>
                        <div className="Shape-3434-copy"></div>
                        <div className="Shape-3436"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
