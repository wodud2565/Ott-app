//ProtectedRoute.jsx
// ProtectedRoute 컴포넌트: 인증된 사용자만 접근할 수 있는 경로를 보호합니다.

import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { user } = UserAuth();

    // 사용자가 로그인하지 않았다면 홈으로 리디렉션합니다.
    if (!user){
        return <Navigate to="/" />;
    }

return children;
};

export default ProtectedRoute;