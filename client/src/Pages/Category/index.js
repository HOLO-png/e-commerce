import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryPage from '../../components/Category/CategoryPage';
import {
    data1_02,
    data10,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7_02,
    data8,
    data9,
    slide_laptop,
} from '../../assets/fake-data';
import { products_api } from '../../assets/fake-data/products_api';

function Category(props) {
    return (
        <CategoryPage
            mobile_api={products_api}
            data1={data1_02}
            data10={data10}
            data2={data2}
            data3={data3}
            data4={data4}
            data5={data5}
            data6={data6}
            data7={data7_02}
            data8={data8}
            data9={data9}
            category1="laptop"
            category2="pc"
            slide_mobile={slide_laptop}
            title="Laptop"
            slideStatus="block"
        />
    );
}

Category.propTypes = {};

export default Category;
