import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false; // `false` 로그인 안된 상태. `true`이면 마이페이지 로그인이 된 상태. 

const Mypage = () => {
    return (
        <div>
            {
                !logged && <Redirect to="./login"/>
            }
            마이페이지 로그인 된 상태
        </div>
    );
};

export default Mypage;
