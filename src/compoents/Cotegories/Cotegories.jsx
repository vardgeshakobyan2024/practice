import "./cotegories.css"

const Cotegories = () =>{
    return(
        <div className="cotegories-shoes">
            <div className="title-cotegories">
                <h3>Категория</h3>
            </div>
            <div className="chek-box">
                <div className="box">
                <input type="checkBox" />
                <p>Баскетбол</p>
                </div>
                <div className="box">
                <input type="checkBox" />
                <p>Бег</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Ботинки</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p className="mexom">Кроссовки с мехом</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Сандалии  и сланцы</p>
                </div>
                <div className="box">
                    <input type="checkBox" />
                    <p>Сапоги</p>
                </div>
            </div>
        </div>
    )
}

export default Cotegories