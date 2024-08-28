//Hero.jsx
// Hero 컴포넌트: 홈페이지의 대형 배너 영역을 담당합니다.
// TMDB API에서 인기 있는 영화를 불러와 랜덤하게 하나를 표시합니다.

import axios from "axios";
import React, { useEffect, useState } from "react"
import endpoints, { createImageUrl } from "../services/movieServices";

const Hero = () => {
    const [movie, setMovie]= useState({});

    // 컴포넌트가 마운트될 때 인기 영화 데이터를 가져옵니다.
    useEffect(()=> {
        axios.get(endpoints.popular).then((response)=>{
            const movies = response.data.results;
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];
            
            setMovie(randomMovie);
        });
    }, []);

    // 문자열을 지정된 길이로 잘라내는 함수
    const truncate = (str, length) =>{
        if(!str) return "";

        return str.length > length ? str.slice(0, length) + "..." : str;
    };

    // 영화 데이터가 없을 때 로딩 텍스트를 표시합니다.
    if (!movie)
    return (
    <>
        <p>fetching movie...</p>
    </>
    );

const { title, backdrop_path, release_date, overview } = movie;

// 배너에 영화 정보를 표시합니다.
return (
    <div className="w-full h-[550px] lg:h-[850px]">
    <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
        className=" w-full h-full object-cover object-top"
        src={createImageUrl(backdrop_path, "original")}
        alt={title}
        />

        <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
        <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
        <div className="mt-8 mb-4">
        <a href="https://www.youtube.com/watch?v=uiyZW82Rxf8" target="_blank" rel="noopener noreferrer">
            <button className="capitalize border bg-gray-300 text-black py-2 px-5">
            play
            </button>
        </a>
            <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
            watch later
            </button>
        </div>
        <p className="text-gray-400 text-sm">{release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncate(overview, 165)}
        </p>
        </div>
    </div>
    </div>
);
};

export default Hero;