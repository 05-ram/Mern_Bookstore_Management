import storeImg from "../assets/images/store-img.jpg"
const Home = () => {
    return (
        <div className="d-flex justify-content-between calc-height align-items-center home-page">
            <div className="home-left">
                <div className="home-title">Book Shop</div>
                <div className="desc mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur veritatis odit porro illo laboriosam, accusantium doloribus sapiente possimus excepturi quibusdam harum vero fugit suscipit sed mollitia iste, at magni est?</div>
            </div>
            <div className="home-right">
                <img src={storeImg} alt="store-img" />
            </div>
        </div>
    )
}

export default Home