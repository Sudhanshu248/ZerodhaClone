function Pricing(){
    return(
        <div className="container px-4">
            <div className="row px-5">
                <div className="col-4">
                    <h2 className="mb-5">Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: "none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-5 border">
                            <h2 className="mb-4"><i class="fa-solid fa-indian-rupee-sign"></i> 0 </h2>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col p-5 border">
                            <h2 className="mb-4"><i class="fa-solid fa-indian-rupee-sign"></i> 20 </h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;