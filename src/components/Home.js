import React from "react";

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='image-wrapper item'>
          <img src='https://m.media-amazon.com/images/I/712PBW8cGBL._AC_UL320_.jpg' />
        </div>
        <div className='text-wrapper item'>
          <span>I-Phone</span>
          <span>Price: $1000</span>
        </div>
        <div className='btn-wrapper item'>
          <button> Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
