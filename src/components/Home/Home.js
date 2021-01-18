import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/VikingsS6B/VIKIN_S6_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB411502696_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id={1}
          title="HP 63 | Ink Cartridge | Black | F6U62AN"
          image="https://images-na.ssl-images-amazon.com/images/I/71QkoRlulgL._AC_SL1500_.jpg"
          price={30.86}
          rating={5}
        />
        <Product
          id={2}
          title="Logitech C920x Pro HD Webcam"
          image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg"
          price={91.49}
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="Olaplex Hair Perfector No 3 Repairing Treatment"
          image="https://images-na.ssl-images-amazon.com/images/I/71gnxxwxAXL._SL1500_.jpg"
          price={28.01}
          rating={4}
        />
        <Product
          id={4}
          title="Coty Airspun Loose Face Powder, Translucent, Pack of 1"
          image="https://images-na.ssl-images-amazon.com/images/I/71le2ZYj97L._SL1250_.jpg"
          price={5.96}
          rating={4}
        />
        <Product
          id={5}
          title="Bath and Body Works Teakwood Men's Collection 3.4 Ounce Cologne Spray New In Box"
          image="https://images-na.ssl-images-amazon.com/images/I/41zltclralL._SL1000_.jpg"
          price={44.3}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
          image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
          price={93.99}
          rating={4}
        />
      </div>
    </div>
  );
};

export default Home;
