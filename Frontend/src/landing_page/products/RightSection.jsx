function RightSection({imageURL, productName, productDescription, learnMore}){
    return (
        <div className="container p-5 mt-3">
            <div className="row mx-5">
                <div className="col-4 p-4 mt-5">
                    <h2 className="mb-4">{productName}</h2>
                    <p >{productDescription}</p>
                    <div className="">
                        <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6 p-4 ">
                    <img src={imageURL} alt="Products Image" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;