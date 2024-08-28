//AuthContext.jsx
// AuthContext: Firebase를 사용하여 사용자 인증과 관련된 상태 및 함수를 관리합니다.
import { createContext, useContext, useEffect, useState } from "react";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../services/firebase";
import {doc, setDoc} from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
const [user, setUser] = useState({});
    // Firebase 사용자 상태 변경 시 사용자 상태를 업데이트합니다.
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    });

    return () => {
    unsubscribe();
    };
}, []);
    // 회원가입, 로그인, 로그아웃 함수를 제공합니다.
function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
        favShows: [],
    });
}

function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function logOut() {
    return signOut(auth);
}

return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
    {children}
    </AuthContext.Provider>
);
}

export function UserAuth() {
return useContext(AuthContext);
}
