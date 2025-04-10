function Universe(){
    return (
        <div className="container my-5">
            <div className="row text-center m-5">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-4 pt-5 mt-5">
                    <img src="src/assets/smallcaseLogo.png" alt="" />
                    <p className="text-small text-muted mt-3">Thematic investment platform</p>
                </div>
                <div className="col-4 pt-5 mt-5">
                    <img src="src/assets/streakLogo.png" alt="" />
                    <p className="text-small text-muted mt-3">Algo & Strategy platform</p>                
                </div>
                <div className="col-4 pt-5 mt-5">
                    <img src="src/assets/sensibullLogo.png" alt="" />
                    <p className="text-small text-muted mt-3">Options trading platform</p>
                </div>
                <div className="col-4 pt-5 mt-3">
                    <img src="src/assets/zerodhaFundhouse.png" alt="" />
                    <p className="text-small text-muted mt-3">Asset management</p>
                </div>
                <div className="col-4 pt-5 mt-3">
                    <img src="src/assets/goldenpiLogo.png" alt="" />
                    <p className="text-small text-muted mt-3">Bonds trading platform</p>                
                </div>
                <div className="col-4 pt-5 mt-3">
                    <img src="src/assets/dittoLogo.png" alt="" />
                    <p className="text-small text-muted mt-3">Insurance</p>
                </div>

                <button className="p-2 btn btn-primary fs-5 my-5" style={{width: "20%", margin: "auto"}}>Signup Now</button>

            </div>
        </div>
    );
}

export default Universe;