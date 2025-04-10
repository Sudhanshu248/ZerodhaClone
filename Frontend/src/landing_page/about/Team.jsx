function Team(){
    return(
        <div className="container">
            <div className="row px-5 mx-5">
                <h1 className="text-center">People</h1>
            </div>

            <div className="row m-5">
                <div className="col-6 p-5 text-center text-muted">
                    <img src="src/assets/nithinKamath.jpg" alt="Nithin Kamath Image" style={{borderRadius: "100%", width: "60%"}}/>
                    <h4 className="mt-5">Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5 text-muted" style={{lineHeight: "1.5", fontSize: "1.1rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on  &nbsp; 
                        <a href="" className="text-decoration-none">HomePage</a> / &nbsp;
                        <a href="" className="text-decoration-none">TradingQnA</a> / &nbsp;
                        <a href="" className="text-decoration-none">Twitter</a> 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team; 