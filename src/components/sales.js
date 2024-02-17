import saleimg from '../images/sale image.jpg'
const Sale = ()=>{
    return(
        <div className="sale-img">
        <img src={saleimg} alt="sale-img"></img>
        <div className="sale-img__offer">
            <h1>Udemy Flash Sale 24 hours to save</h1>
            <p>get the top course for 499.just one day save but lifetime learn</p>
        </div>
    </div>
    )
}

export default Sale;