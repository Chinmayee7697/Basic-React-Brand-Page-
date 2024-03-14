import React from "react";

function LeftSide(){
    return (
        <div className="left">
        <div className="left-head">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        </div>

        <div className="content">
            <h3>Your feet deserve the best and we're here to help you with our shoes. Your feet Deserve the best and we're here to help you with our shoes</h3>

            <div className="shop-buttons">
                <button className="pehla">Shop Now</button>
                <button className="dusra">Category</button>
            </div>

            <div className="availability">
            <p>Also Available On</p>
            <div className="imageShop">
                <img src="images/flipkart.png" alt="flipkart"/>
                <img src="images/amazon.png" alt="amazon" />
            </div>
            </div>
        </div>
        </div>
    );
}

export default LeftSide;