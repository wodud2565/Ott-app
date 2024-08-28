// Home.jsx
// Home 컴포넌트: 애플리케이션의 메인 홈페이지를 구성합니다.
import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";

const Home = () => {
        // Hero 및 여러 MovieRow 컴포넌트를 포함하여 렌더링합니다.
return (
    <>
    <Hero/>
    <MovieRow title="upcoming" url={endpoints.upcoming}/>
    <MovieRow title="trending" url={endpoints.trending}/>
    <MovieRow title="top rated" url={endpoints.topRated}/>
    <MovieRow title="comedy" url={endpoints.comedy}/>
    <MovieRow title="popular" url={endpoints.popular}/>
    </>
);
}

export default Home;