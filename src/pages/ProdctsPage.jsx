import './productsPage.css';
import { useDispatch, useSelector } from "react-redux";
import { selectProductsData, selectisLoading } from "../store/slices/productsData/productsDataSlice";
import { useEffect } from "react";
import { fetchProductsData } from "../store/slices/productsData/API";
import CardProducts from '../compoents/CardProducts/CardProducts';
import Animation from '../compoents/Animation/Animation';
import Sort from '../compoents/Sort/Sort';
import AsideSite from '../compoents/AisideSite/AsideSite';

const ProductsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsData());
    }, []);

    const productsData = useSelector(selectProductsData);
    const loading = useSelector(selectisLoading);

    return (
        <section>
            <div className="container">
                <div className="section">
                    <Sort />
                    {loading && <Animation />}
                    <div className="sectionParent">
                        <AsideSite />
                        <div className="prodParent">
                            {
                                productsData?.productsData?.map((el, idx) => {
                                    return (
                                        <CardProducts
                                            key={el.id}
                                            images={el.image}
                                            id={el.id}
                                            description={el.description}
                                            article={el.brand}
                                            price={el.price}
                                            size={el.size}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsPage;