import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs } from 'antd';
const HomeNews = () => {
    const { t, i18n } = useTranslation();
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: <h3 className='font-bold md:text-lg text-md '>{t('ĐIỆN ẢNH 24H')}</h3>,
            children: <div className='dark:text-white'>
                <div className="grid grid-cols-2 gap-4 px-1">
                    <div className="md:col-span-1 col-span-2">
                        <a href="#" className='hover:text-orange-500 text-center  md:text-left'>
                            <img className='object-cover rounded-md mx-auto h-60 ' src="https://1.bp.blogspot.com/-qNMImfxdoB0/XCWyfawq51I/AAAAAAABBOs/A1u3kOmgspQmKzgF2RaiAw1uWKRE-_QVACEwYBhgL/s1600/DC%2BComics%25E2%2580%2599%2BAquaman%2BFinal%2BTheatrical%2BOne%2BSheet%2BMovie%2BPosters%2B%2526%2BBanners%2B%25283%2529.jpg" alt="1" />
                            <h2 className='font-bold text-lg my-1 leading-6'>Aquaman siêu phẩm phim</h2>
                            <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên Min hoặc Mục Vé Phim trên ZaloPay.</p>
                        </a>
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <a href="#" className='hover:text-orange-500 text-center md:text-left'>
                            <img className='object-cover rounded-md mx-auto h-60 max-w-[500px] w-full border' src="https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Triple-Frontier-Banner-Poster.jpg?ssl=1" alt="2" />
                            <h2 className='font-bold text-lg my-1 leading-6'>Triple Fronter ( bộ ba lính tiên phong )</h2>
                            <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Đồng giá 1k/vé cả tuần tất cả các rạp trên Min + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                        </a>
                    </div>
                </div>
                <div className='md:grid grid-cols-12 gap-6 mt-4 hidden '>
                    <div className='col-span-8 flex gap-3'>
                        <div className='w-1/2'>
                            <a href="#" className='hover:text-orange-500'>
                                <img className='object-cover rounded-md' src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="2" />
                                <h2 className='font-bold text-lg my-1 leading-6'>VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”...</h2>
                                <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất, tác phẩm hay nhất mọi thời đại, tuyệt đỉnh combat hành động hay, đề cử Oscar thế giới</p>
                            </a>
                        </div>
                        <div className='w-1/2'>
                            <a href="#" className='hover:text-orange-500'>
                                <img className='object-cover rounded-md' src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="2" />
                                <h2 className='font-bold text-lg my-1 leading-6'>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù...</h2>
                                <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div >
                            <a href="" className='flex hover:text-orange-500'>
                                <img className='object-cover w-[70px] border rounded mr-1' src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt="3" />
                                <h3 className='text-[15px] font-bold leading-6'>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h3>
                            </a>
                        </div>  
                        <div className='my-2' >
                            <a href="" className='flex hover:text-orange-500'>
                                <img className='object-cover w-[70px] border rounded mr-1' src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" alt="4" />
                                <h3 className='text-[15px] font-bold leading-6'>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h3>
                            </a>
                        </div>
                        <div className='my-2' >
                            <a href="" className='flex hover:text-orange-500'>
                                <img className='object-cover w-[70px] border rounded mr-1' src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt="5" />
                                <h3 className='text-[15px]  font-bold leading-6'>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</h3>
                            </a>
                        </div>
                        <div >
                            <a href="" className='flex hover:text-orange-500'>
                                <img className='object-cover w-[70px] border rounded mr-1' src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt="6" />
                                <h3 className='text-[15px]  font-bold leading-6'>Ngô Thanh Vân chính thức khởi động cuộc thi Aza</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            key: '2',
            label: <h3 className='font-bold md:text-lg text-md'>{t('REVIEW')}</h3>,
            children: <div className='dark:text-white'>
                <div className="grid grid-cols-2 gap-4 px-1">
                    <div className="md:col-span-1 col-span-2">
                        <a href="#" className='hover:text-orange-500 text-center md:text-left'>
                            <img className='object-cover rounded-md mx-auto h-60 w-full max-w-[500px]' src="https://chonthuonghieu.com/wp-content/uploads/2021/02/Avengers-Infinity-War-1-1-1024x576.jpg" alt="1" />
                            <h2 className='font-bold text-lg my-1 leading-6'>Avenger phần 5 đã được phát hành</h2>
                            <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Trong The Avengers, Nick Fury, người điều hành của tổ chức gìn giữ hòa bình S.H.I.E.L.D., chiêu mộ Tony Stark, Bruce Banner, Thor, và Steve</p>
                        </a>
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <a href="#" className='hover:text-orange-500 text-center md:text-left'>
                            <img className='object-cover rounded-md mx-auto h-60' src="https://theactionelite.com/wp-content/uploads/2021/04/mortal-kombat-character-posters-social-featured.jpg" alt="2" />
                            <h2 className='font-bold text-lg my-1 leading-6'>The Martian (Ninja ẩn thân)</h2>
                            <p className='max-w-[500px] mx-auto text-xs text-gray-500'>The Martian là bộ phim xoay quanh hành trình trở về đầy phi thường của phi hành gia Mark Watney. Trong quá trình thực ...</p>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-1 mt-5">
                    <div className="md:col-span-1 col-span-2">
                        <a href="#" className='hover:text-orange-500 text-center md:text-left'>
                            <img className='object-cover rounded-md mx-auto h-60' src="https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg" alt="1" />
                            <h2 className='font-bold text-lg my-1 leading-6'>The Dark Night Rises ( sắp ra mắt ) </h2>
                            <p className='max-w-[500px] mx-auto text-xs text-gray-500'> Christopher Nolan vẫn gây ấn tượng thị giác kèm những bí ẩn kích thích người yêu điện ảnh giải mã sau 10 năm</p>
                        </a>
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <a href="#" className='hover:text-orange-500 text-center md:text-left'>
                            <img className='object-cover rounded-md mx-auto h-60' src="https://live.staticflickr.com/4038/4686112993_9583daf5b4_b.jpg" alt="2" />
                            <h2 className='font-bold text-lg my-1 leading-6'>Inception bùng nổ</h2>
                            <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Inception (tựa tiếng Việt: Kẻ đánh cắp giấc mơ) là một bộ phim điện ảnh hành động khoa học viễn tưởng Mỹ ra mắt năm 2010 do Christopher No ...</p>
                        </a>
                    </div>
                </div>
            </div>,
        },
        {
            key: '3',
            label: <h3 className='font-bold md:text-lg text-md'>{t('KHUYẾN MÃI')}</h3>,
            children: <div className="grid grid-cols-2 gap-4 px-1 dark:text-white">
            <div className="md:col-span-1 col-span-2">
                <a href="#" className='hover:text-orange-500 text-center'>
                    <img className='object-cover rounded-md mx-auto' src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg" alt="1" />
                    <h2 className='font-bold text-lg my-1 leading-6'>BHD 59K/VÉ CẢ TUẦN !!!</h2>
                    <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên Min hoặc Mục Vé Phim trên ZaloPay.</p>
                </a>
            </div>
            <div className="md:col-span-1 col-span-2">
                <a href="#" className='hover:text-orange-500 text-center'>
                    <img className='object-cover rounded-md mx-auto' src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg" alt="2" />
                    <h2 className='font-bold text-lg my-1 leading-6'>Min 1K/VÉ NGẠI CHI GIÁ VÉ</h2>
                    <p className='max-w-[500px] mx-auto text-xs text-gray-500'>Đồng giá 1k/vé cả tuần tất cả các rạp trên Min + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                </a>
            </div>
        </div>
        },
    ];
    return (
        <div className='max-w-4xl mx-auto tabHomeNews my-14 '>
            <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
        </div>
    );
};

export default HomeNews;