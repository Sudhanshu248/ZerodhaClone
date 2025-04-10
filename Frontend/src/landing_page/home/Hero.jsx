import React from "react";

function Hero(){
    return(
        <div className="container p-5 mb-3">
            <div className="row text-center">
                <img src="src/assets/homeHero.png" alt="Hero Image" className="mb-5"/>
                <h1 className="mt-5 p-2">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivaties, mutual funds, and many more</p>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "auto"}}>Signup Now</button>
            </div>
        </div> 
    );
}

export default Hero;