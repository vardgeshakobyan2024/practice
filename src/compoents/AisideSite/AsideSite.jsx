import BrendsShoes from '../Brends/BrendsShoes';
import BtnShoes from '../BtnShoes/BtnShoes';
import ColorShoes from '../ColorShoes/ColorShoes';
import Cotegories from '../Cotegories/Cotegories';
import Sale from '../Sale/Sale';
import Season from '../Season/Season';
import Size from '../Size/Size';
import './asideSite.css';

const AsideSite = () => {
    return (
        <aside>
            <div className="aside">
                <Size />
                <Season />
                <ColorShoes />
                <Cotegories />
                <BrendsShoes />
                <Sale />
                <BtnShoes />
            </div>
        </aside>
    )
}

export default AsideSite;