import React from 'react';
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://i.imgur.com/SYHeuYM.jpg" alt="" />
                <div className="home__row">
                    <Product title='the lean startup' price={29.99}
                        image={"https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"}
                        rating={5}
                    />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                 <Product />
                </div>
            </div>                        
        </div>
    );
}

export default Home;