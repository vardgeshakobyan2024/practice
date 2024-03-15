import './Sort.css'

const Sort = () => {
    return(
        <div className='sort'> 
            <div className="leftBlock">
                <p>Сортировка</p>
                <select>
                    <option>по умолчанию</option>
                </select>
            </div>
            <div className="rightBlock">
                <p>Количество</p>
                <div className="circle">
                    <p>18</p>
                </div>
                <div className="circle">
                    <p>30</p>
                </div>
                <div className="circle">
                    <p>60</p>
                </div>
            </div>
        </div>
    )
}

export default Sort;