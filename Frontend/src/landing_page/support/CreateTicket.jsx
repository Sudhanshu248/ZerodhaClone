import "./CreateTicket.css";

function CreateTicket(){
    return (
        <div className="container p-5">
            <div className="row p-5 ">
                <h5>To create a ticket, select a relevant topic</h5>
                
                <div className="col-4 pt-5">
                    <h4 className="py-4 fs-5">
                        <i class="fa-solid fa-circle-plus p-2" aria-hidden="true"></i>Account Opening
                    </h4>
                    <a href="" className="Link">Resident individual</a><br />
                    <a href="" className="Link">Minor</a><br />
                    <a href="" className="Link">Non Resident Indian (NRI)</a><br />
                    <a href="" className="Link">Company, Partnership, HUF and LLP</a><br />
                    <a href="" className="Link">Glossary</a><br />                    
                </div>

                <div className="col-4 pt-5">
                    <h4 className="py-4 fs-5">
                    <i class="fa-solid fa-user p-2"></i>Your Zerodha Account
                    </h4>
                    <a href="" className="Link">Your Profile</a><br />
                    <a href="" className="Link">Account modification</a><br />
                    <a href="" className="Link">Client Master Report (CMR)</a><br />
                    <a href="" className="Link">Nomination</a><br />
                    <a href="" className="Link">Transfer and conversion of securities</a><br />                    
                </div>

                <div className="col-4 pt-5">
                    <h4 className="py-4 fs-5">
                    <i class="fa-solid fa-chart-simple p-2"></i>Kite
                    </h4>
                    <a href="" className="Link">IPO</a><br />
                    <a href="" className="Link">Trading FAQs</a><br />
                    <a href="" className="Link">Margin Trading Facility (MTF) and Margins</a><br />
                    <a href="" className="Link">Charts and orders</a><br />
                    <a href="" className="Link">Alerts and Nudges</a><br /> 
                    <a href="" className="Link">General</a><br />                    
                </div>

                <div className="col-4 pt-5">
                    <h4 className="py-4 fs-5">
                        <i class="fa-solid fa-money-check p-2"></i>Funds
                    </h4>
                    <a href="" className="Link">Add money</a><br />
                    <a href="" className="Link">Withdraw money</a><br />
                    <a href="" className="Link">Add bank accounts</a><br />
                    <a href="" className="Link">eMandates</a><br />
                </div>

                <div className="col-4 pt-5">
                    <h4 className="py-4 fs-5">
                        <i class="fa-solid fa-circle-half-stroke p-2"></i>Console
                    </h4>
                    <a href="" className="Link">Portfolio</a><br />
                    <a href="" className="Link">Corporate actions</a><br />
                    <a href="" className="Link">Funds statement</a><br />
                    <a href="" className="Link">Reports</a><br />
                    <a href="" className="Link">Profile</a><br /> 
                    <a href="" className="Link">Segments</a><br />                    
                </div>

                <div className="col-4 pt-5">
                    <h4 className="py-4 fs-5">
                        <i class="fa-solid fa-coins p-2"></i>Coin
                    </h4>
                    <a href="" className="Link">Understanding mutual funds and Coin</a><br />
                    <a href="" className="Link">Coin app</a><br />
                    <a href="" className="Link">Coin web</a><br />
                    <a href="" className="Link">Transactions and reports</a><br />
                    <a href="" className="Link">National Pension Scheme (NPS)</a><br />                    
                </div>
            </div>
        </div>
    );
}

export default CreateTicket; 