import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../HOCs/Layout';
import { fetchProfile } from '../Auth/thunk';
import HomeCarousel from './components/HomeCarousel';
import HomeNews from './components/HomeNews';
import HomeTabs from './components/HomeTabs';
import IntroduceApp from './components/IntroduceApp';

import { fetchBanners, fetchInfoTheater, fetchMovies } from './thunk';
const MovieList = React.lazy(() => import('./components/MovieList'))
const Home = () => {
    const dispatch = useDispatch();
    const [useSearch, setSearchParam] = useSearchParams();

    useEffect(() => {
        dispatch(fetchBanners);
        dispatch(fetchInfoTheater);
        dispatch(fetchProfile)
    }, [])

    useEffect(() => {
        dispatch(fetchMovies(useSearch.get('page')))
    }, [useSearch.get('page')])
    return (
        <Layout>
            <Suspense fallback={<p>Loading...</p>}>
                <HomeCarousel />
                <MovieList />
                <HomeTabs />
                <HomeNews />
                <IntroduceApp />
            </Suspense>
        </Layout>
    );
};

export default Home;
//hiển thị trang chủ của ứng dụng, bao gồm các thành phần như Header, Footer, Carousel, danh sách phim, các tab liên quan đến phim, tin tức và một phần giới thiệu ứng dụng.
//useEffect và useSearchParams để tải dữ liệu từ server và xử lý các thao tác liên quan đến phân trang trên trình duyệt. Ngoài ra, trong component còn sử dụng React.lazy để tải trễ các module không đồng bộ