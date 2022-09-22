import React from 'react'

function Header(props) {
    return (
        <div>
            <div className='add-to-cart'>
                <span className='cart-count'>{props.data.length}</span> 
                <img src='https://cdn4.vectorstock.com/i/1000x1000/31/18/shopping-cart-icon-with-plus-sign-vector-20053118.jpg' />
            </div>
        </div>
    )
}

export default Header   