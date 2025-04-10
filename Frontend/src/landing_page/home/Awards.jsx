function Awards(){
    return(
        <div className="container px-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="src/assets/largestBroker.svg" alt="Award Image" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h2 className="mb-5">Largest stock broker in India</h2>
                    <p className="mb-5">2+ million clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mb-4">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Sercurities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="src/assets/pressLogos.png" alt="Newspapers name" style={{width:"90% "}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;