import { useDispatch } from "react-redux"
import "./ColorShoes.css"
import { filterByColor } from "../../store/slices/productsData/productsDataSlice";

const ColorShoes = () =>{

    const dispatch = useDispatch();
    const colorArr = [
        "black",
        "white",
        "cream",
        "red",
        "light-lilac",
        "sky-blue",
        "blue",
        "purpule",
        "green",
        "dark-green",
        "yellow",
        "gray"
    ]
    return(
        <div className="color-shoes">
            <div className="title">
                <h3>Цвет</h3>
            </div>
            <div className="color-div">
                {
                    colorArr.map((el, idx) => {
                        return (
                            <div key={idx} className={`${el}`} onClick={() => {
                                dispatch(filterByColor(el))
                            }}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ColorShoes