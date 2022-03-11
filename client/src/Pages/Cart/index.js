import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Helmet from '../../components/Helmet';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Popup from '../../components/Cart/Popup';
import CartEmpty from '../../components/Cart/CartEmpty';
import CartItemProducts from '../../components/Cart/CartItemProducts';
import CartSummary from '../../components/Cart/CartSummary';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SriceShock from '../../components/SriceShock';
import { products_api } from '../../assets/fake-data/products_api';

const CartPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 97%;

    .ant-row {
        max-width: 100%;
        margin: 10px 0;
        align-items: center;
        margin: 10px 0 !important;
    }
    .ant-alert-message {
        color: #9e8506;
    }
    .ant-alert-description {
        font-size: 13px;
        color: #9b9b9b;
    }
    .header-row {
        height: 50px;
        justify-content: center;
        display: flex;
        align-items: center;
        background: #ffffff;
        margin: 10px 0;
    }
    .ant-checkbox + span {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            margin: 0 10px;
        }
        i {
            color: red;
        }
    }
    .cart-header {
        height: 50px;
        display: flex;
        align-items: center;
    }
    p.cart-title {
        margin: 0 10px;
        width: 90%;
        padding: 10px;
    }
    .cart-product {
        width: 50%;
    }
    .cart-footer {
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    .ant-col.ant-col-3.gutter-row {
        text-align: center;
    }
    .ant-skeleton.ant-skeleton-element.ant-skeleton-active {
        width: 100%;
        height: 60px;
    }
    .cart-seklentor {
        width: 100%;
        height: 200px !important;
        margin-bottom: 20px;
    }
    .ant-dropdown.ant-dropdown-placement-bottomLeft {
        width: 100%;
        padding: 20px 176px;
        position: absolute;
        transform: translateX(-13px);
    }
    .btn-show-search-product-similar {
        &:after {
            content: '';
            width: 74%;
            height: 10px;
            background: #fefefe;
            position: absolute;
            top: 75px;
            z-index: 2;
            right: 19px;
        }
    }
    .input-product-checkbox {
        .ant-checkbox {
            transform: scale(1.5);
            .ant-checkbox-inner {
                ${'' /* top: -30px; */}
            }
        }
    }
`;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;
function Cart(props) {
    const [modal, setModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);
    const [activeSearchSimilar, setActiveSearchSimilar] = useState(null);
    const [statusSearchSimilar, setStatusSearchSimilar] = useState(false);

    const setModalVisibleCancel = () => {
        setModal(false);
    };

    return (
        <Helmet title="Cart">
            <CartPage>
                <CartEmpty cartProduct={cartProduct} loading={loading} />

                <CartItemProducts
                    cartProduct={cartProduct}
                    loading={loading}
                    activeSearchSimilar={activeSearchSimilar}
                    statusSearchSimilar={statusSearchSimilar}
                />

                <CartSummary cartProduct={cartProduct} loading={loading} />

                <Popup
                    modal={modal}
                    currentProduct={currentProduct}
                    setModalVisibleCancel={setModalVisibleCancel}
                />

                <SriceShock
                    title="CÓ THỂ BẠN CŨNG THÍCH"
                    slideStatus={false}
                    mobile_api={products_api}
                />
            </CartPage>
        </Helmet>
    );
}

Cart.propTypes = {};

export default Cart;
