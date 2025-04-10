function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return (
        <div className="container px-5 mt-5">
            <div className="row mx-5">
                <div className="col-6 p-5">
                    <img src={imageURL} alt="Products Image" />
                </div>
                <div className="col-2"></div>
                <div className="col-4 p-4 mt-5">
                    <h2 className="mb-4">{productName}</h2>
                    <p >{productDescription}</p>
                    <div className="my-4">
                        <a href={tryDemo} className="me-5 ">Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <a href={googlePlay}><img src="src/assets/googlePlayBadge.svg" alt="GooglePlay Badge Image" /></a>&nbsp; &nbsp; &nbsp;
                    <a href={appStore}><img src="src/assets/appstoreBadge.svg" alt="AppStore Badge Image" /></a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection; 