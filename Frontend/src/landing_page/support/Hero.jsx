import "./Hero.css";

function Hero(){
    return(
        <>
            <section className="container-fluid" id="supportHero">
                <div className="p-5" id="supportWrapper">

                    <h4>Support Portal</h4>
                    <span style={{borderBottom: "1px solid white"}} className="py-2">
                        <a href="" className="text-decoration-none fw-normal">Track Tickets</a>
                    </span>
                </div>
                <div className="row pb-5 px-4" style={{margin: "0 150px"}}>

                    <div className="col-6 pb-5 pe-5">

                        <p className="fs-4 ">Search for an answer or browse help topics to create a ticket</p>
                        <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." className="fw-light my-3"/>
                        <br />

                        <div className="my-4" >
                            <span style={{borderBottom: "1px solid white"}} className="py-2">
                                <a href="" className="text-decoration-none fw-normal">Track account opening</a>
                            </span> &nbsp;&nbsp; &nbsp;
                            <span style={{borderBottom: "1px solid white"}} className="py-2">
                                <a href="" className="text-decoration-none fw-normal">Track segment activation</a>
                            </span> &nbsp;&nbsp; &nbsp;
                            <span style={{borderBottom: "1px solid white"}} className="py-2">
                                <a href="" className="text-decoration-none fw-normal">Intraday margins</a>
                            </span> 
                        </div>

                            <span style={{borderBottom: "1px solid white"}} className="py-2">
                                <a href="" className="text-decoration-none fw-normal">Kite user manual</a>
                            </span> 
                    </div>

                    <div className="col-6 px-5">
                        <p className="fs-4 ">Featured</p>
                        <ol>
                            <li>
                                <a href="">MCX is launching Gold Ten (10 gram) futures contracts</a>
                            </li>
                            <br />
                            <li>
                                <a href="">Current Buybacks - March 2025</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero; 