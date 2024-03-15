import './season.css'

const Season = () => {
    return (
        <div className='seasonParent'>

            <div className="season_name">
                <p>сезон</p>
            </div>

            <div className="weather">
                <div className='input'>
                    <input type="checkbox" />
                    <p>димисезон</p>
                </div>
                
                <div className="input">
                    <input type="checkbox" />
                    <p>Зима</p>
                </div>

                <div className="input">
                    <input type="checkbox" />
                    <p>Лето</p>
                </div>
            </div>
        </div>
    )
}

export default Season