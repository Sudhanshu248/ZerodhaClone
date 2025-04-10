import "./Footer.css";

function Footer(){
    return (
        <footer style={{backgroundColor: "rgb(250, 250, 250)"}}>
            <div className="container px-5 border-top ">
                <div className="row mt-2 pt-4">
                    <div className="col">
                        <img src="src/assets/logo.svg" alt="Logo Image" style={{width: "50%"}} className="my-3"/>
                        <p>&copy; 2010 - 2025, Zerodha Broking Ltd.
                            <br /> 
                            All rights reserved.
                        </p>
                    </div>
                    <div className="col">
                        <ul>
                            <p>Comapny</p>
                            <a href="" className="footer-link">About</a> <br />
                            <a href="" className="footer-link">Products</a> <br />
                            <a href="" className="footer-link">Pricing</a> <br />
                            <a href="" className="footer-link">Referral programme</a> <br />
                            <a href="" className="footer-link">Careers</a> <br />
                            <a href="" className="footer-link">Zerodha.tech</a> <br />
                            <a href="" className="footer-link">Open source</a> <br />
                            <a href="" className="footer-link">Press & media</a> <br />
                            <a href="" className="footer-link">Zerodha Cares (CSR)</a> <br />
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <p>Support</p>
                            <a href="" className="footer-link">Contact us</a> <br />
                            <a href="" className="footer-link">Support portal</a> <br />
                            <a href="" className="footer-link">Z-Connect blog</a> <br />
                            <a href="" className="footer-link">List of charges</a> <br />
                            <a href="" className="footer-link">Downloads & resources</a> <br />
                            <a href="" className="footer-link">Videos</a> <br />
                            <a href="" className="footer-link">Market overview</a> <br />
                            <a href="" className="footer-link">How to file a complaint?</a> <br />
                            <a href="" className="footer-link">Status of your complaints</a> <br />
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <p>Account</p>
                            <a href="" className="footer-link">Open an account</a> <br />
                            <a href="" className="footer-link">Fund transfer</a>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 text-muted" style={{fontSize: "0.1 rem"}} >
                    <p className="para">Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p className="para">Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p className="para">Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                    <p className="para">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p className="para">Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p className="para">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>

                <div className="row mt-4">
                    <ul className="text-center">
                        <a href="" className="mx-3 footer-link">NSE</a>
                        <a href="" className="mx-3 footer-link">BSE</a>
                        <a href="" className="mx-3 footer-link">MCX</a>
                        <a href="" className="mx-3 footer-link">Terms & conditions</a>
                        <a href="" className="mx-3 footer-link">Policies & procedures</a>
                        <a href="" className="mx-3 footer-link">Privacy policy</a>
                        <a href="" className="mx-3 footer-link">Disclosure</a>
                        <a href="" className="mx-3 footer-link">For investor's attention</a>
                        <a href="" className="mx-3 footer-link">Investor charter</a>
                    </ul>
                </div>
            </div>
        </footer>    
    );
}

export default Footer;