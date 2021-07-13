import React from "react";
import "./Home.css";
import Product from "./Product";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Banner"
        />

        <div className="home_row">
          <Product
            id="11"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback + Free Gift Cards"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="12"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={5}
            image="https://images.philips.com/is/image/PhilipsConsumer/HL7760_00-IMS-en_IN?$jpglarge$&wid=960"
          />
        </div>

        <div className="home_row">
          <Product
            id="21"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images.philips.com/is/image/PhilipsConsumer/HL7760_00-IMS-en_IN?$jpglarge$&wid=960"
          />
          <Product
            id="22"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
              id="23"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images.philips.com/is/image/PhilipsConsumer/HL7760_00-IMS-en_IN?$jpglarge$&wid=960"
          />
        </div>

        <div className="home_row">
          <Product
              id="31"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61SQz8S%2BfEL._AC_SY450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
