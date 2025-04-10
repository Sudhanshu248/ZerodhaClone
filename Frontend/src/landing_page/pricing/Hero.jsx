function Hero(){
    return(

        // <div className="container p-5 border-bottom">
        //     <div className="row my-5 text-center">
        //         <h1>Technology</h1>
        //         <p className="text-muted fs-5 py-2">Sleek, modern, and intuitive trading platforms</p>
        //         <p>
        //             Check out our &nbsp;
        //             <a href="" style={{textDecoration: "none"}}>investment offerings 
        //                 <i class="fa-solid fa-arrow-right"></i>
        //             </a>
        //         </p>
        //     </div>
        // </div>


        <div className="container">
            <div className="row p-5 my-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 className="text-muted  py-4 mb-5 fs=5">Free equity investments and flat  ₹20 traday and F&O trades</h3>
            </div>
            <div className="row m-5 text-center">
                <div className="col-4 px-4">
                    <img src="src/assets/pricingEquity.svg" alt="Zero Rupees Image" className="p-4"/>
                    <h3>Free equity delivery</h3>
                    <p className="text-muted pt-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 px-4">
                <img src="src/assets/intradayTrades.svg" alt="Zero Rupees Image" className="p-4"/>
                    <h3>Intraday and F&O trades</h3>
                    <p className="text-muted pt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 px-4">
                <img src="src/assets/pricingEquity.svg" alt="Zero Rupees Image" className="p-4"/>
                    <h3>Free direct MF</h3>
                    <p className="text-muted pt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div> 
    );
}

export default Hero;