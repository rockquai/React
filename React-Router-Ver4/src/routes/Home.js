import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            Home
            <button onClick={ () => {history.push('/posts')}}>
                포스트 페이지로 이동
            </button>
        </div>
    );
};

export default Home;
