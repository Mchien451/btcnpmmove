import React from 'react';
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
const IntroduceApp = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="bg-[url('https://movie-booking-project.vercel.app/img/mobile/backapp.jpg')]">
            <div className=" max-w-3xl mx-auto text-white">
                <div className="grid grid-cols-2 py-14">
                    <div className="col-span-2 md:col-span-1 md:flex md:items-center text-center ">
                        <div>
                            <h3 className='text-3xl font-bold'>{t('Ứng dụng tiện lợi dành cho người yêu điện ảnh')}</h3>
                            <p className='my-3'>{t('Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.')}</p>
                            <button className='bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-700 duration-300'>
                                {t('Tải App ngay !')}
                            </button>
                            <p className='my-3'>{t('Min có cả hai phiên bản Android và IOS')}  </p>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex justify-center">
                            <div className='carouselIntroduce  '>
                                {/* <img src="https://movie-booking-project.vercel.app/img/mobile/mobile.png" alt="phone" className='w-[180px] h-full block' /> */}
                                <div className="bg-[url('https://movie-booking-project.vercel.app/img/mobile/mobile.png')] w-[200px] h-[430px] bg-contain bg-no-repeat">
                                    <Carousel dots={true} dotPosition='right' effect='fade' className=" w-[190px] mx-auto pt-1">
                                        <div>
                                            <img src="https://movie-booking-project.vercel.app/img/mobile/slide1.jpg" alt="1" width={190} height={400} className='rounded-3xl ' />
                                        </div>
                                        <div>
                                            <img src="https://movie-booking-project.vercel.app/img/mobile/slide2.jpg" alt="2" width={190} height={400} className='rounded-3xl ' />
                                        </div>
                                        <div>
                                            <img src="https://movie-booking-project.vercel.app/img/mobile/slide3.jpg" alt="3" width={190} height={400} className='rounded-3xl ' />
                                        </div>
                                        <div>
                                            <img src="https://movie-booking-project.vercel.app/img/mobile/slide4.jpg" alt="2" width={190} height={400} className='rounded-3xl ' />
                                        </div>
                                        <div>
                                            <img src="https://movie-booking-project.vercel.app/img/mobile/slide5.jpg" alt="3" width={190} height={400} className='rounded-3xl ' />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroduceApp;