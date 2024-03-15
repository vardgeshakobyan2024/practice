import './brends.css'

const BrendsShoes = () =>{
    return(
        <div className="brends-shoes">
            <div className="title-brend">
                <h3>Бренд</h3>
            </div>
            <div className="brends-check">
                <div className="box">
                    <input type="checkBox" />
                    <p>Adidas</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Alexander McQueen</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Asics</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Balenciaga</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Caterpillar</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Columbia</p>
                </div>
            </div>
        </div>
    )
}

export default BrendsShoes