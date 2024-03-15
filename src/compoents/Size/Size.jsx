import './size.css'
const Size = () => {

    const sizeArr = [
        ["30 EUR", "31 EUR", "33 EUR", "34 EUR", "32 EUR"],
        ["30 EUR", "31 EUR", "33 EUR", "34 EUR", "32 EUR"],
        ["30 EUR", "31 EUR", "33 EUR", "34 EUR", "32 EUR"]
    ]

    return (

        <div className="sizeParent">
            <div className='size_name' >
                <p>размер</p>
            </div>

            <div className='size1'>
                {
                    sizeArr[0].map((el, idx) => {
                        return (
                            <span key={idx}>{el}</span>
                        )
                    })
                }
            </div>

            <div className='size2'>
                {
                    sizeArr[1].map((el, idx) => {
                        return (
                            <span key={idx}>{el}</span>
                        )
                    })
                }
            </div>

            <div className="size3">
                {
                    sizeArr[2].map((el, idx) => {
                        return (
                            <span key={idx}>{el}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Size