//Navbar.jsx
// Navbar 컴포넌트: 상단 내비게이션 바를 구현합니다.

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate();
    // 로그아웃 처리 함수
    const handleLogout = async () => {
        try {
        await logOut();
        navigate("/");
        } catch (err) {
        console.log(err);
        }
    };
    
// 로그인 상태에 따라 다른 내용을 렌더링합니다.
return (
<div className="absolute w-full p-4 flex items-center justify-between z-50">
<Link to="/">
    <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
        netflix
    </h1>
</Link>

{
    user?.email ?(
<div>
        <Link to="/profile">
            <button className="capitalize pr-4">profile</button>
        </Link>

            <button onClick={handleLogout} className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
                logout
            </button>
    </div>
    ) : (
        <div>
        <Link to="/login">
            <button className="capitalize pr-4">login</button>
        </Link>

        <Link to="/signup">
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
                sign up
            </button>
        </Link>
    </div>
    )}
</div>
);
};

export default Navbar;