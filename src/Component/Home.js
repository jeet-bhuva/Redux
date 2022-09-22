import React from 'react'

function Home(props) {
    console.log("Props-->",props)
    return (
        <div>
            {/* <div className='add-to-cart'>
                <img src='https://cdn4.vectorstock.com/i/1000x1000/31/18/shopping-cart-icon-with-plus-sign-vector-20053118.jpg' />
            </div> */}
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70' />
                </div><br/> 
                <div className='taxt-wrapper item'>
                    <span>Nothing Phone (1) </span><br />
                    <span> Price : $1000.00 </span>
                </div><br/>
                <div className='btn-wrapper item'>
                    <button onClick={() => {props.addToCartHandle({ name: 'Nothing Phone (1)', price: 1000 })}}>Add To Cart</button>
                    <button className='remove-to-cart' onClick={() => {props.removeToCartHandle()}}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home