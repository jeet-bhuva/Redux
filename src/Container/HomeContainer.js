import Home from '../Component/Home'
import { connect } from 'react-redux'
import { addToCart, removeToCart } from '../Services/Actions/action'


const mapStateToProps = state => ({
    // cardData: state
})


const mapDispatchToProps = dispatch => ({
    addToCartHandle: data => dispatch(addToCart(data)),
    removeToCartHandle : data => dispatch(removeToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)