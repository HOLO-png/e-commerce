/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import ProductOptions from './ProductOptions';
import ProductsDescription from './ProductsDescription';

import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from 'styled-components';
import { messageInfoToast } from '../../../utils/messageInfoToast';
import { isEmptyObjectAll } from '../../../utils/checkEmptyObjAll';
import { message } from 'antd';
// import { useExitPrompt } from '../../../Hooks/useExitPrompt';
import { useParams } from 'react-router-dom';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
`;

function DashboardWidgets({ url }) {
    const { keyProducts } = useParams();
    const paginateRef = useRef(null);

    const [products, setProducts] = useState(null);
    const [isShowCategory, setIsShowCategory] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showTabletProduct, setShowTabletProduct] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);
    const [image, setImage] = useState('');
    const [input, setInput] = useState('');
    const [timeActive, setTimeActive] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productVaratior, setProductVaratior] = useState({});
    // const [indexProduct, setIndexProduct] = useState(
    //     product_config.varation.length - 1,
    // );
    const [varation, setVaration] = useState({
        count: 0,
        title: '',
        image: '',
    });

    const [arrayData, setArrayData] = useState(null);
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts =
        products && products.slice(indexOfFirstProducts, indexOfLastProducts);
    const [isShowProductDes, setIsShowProductDes] = useState('list');
    const [isShowCategoryOptions, setIsShowCategoryOptions] = useState(true);
    const [isShow, setIsShow] = useState(false);
    const [categoryProducts, setCategoryProducts] = useState(null);

    const [addData, setVal] = useState('');
    const [description, setDescription] = useState({});
    const [inputConfig, setInputConfig] = useState({});
    const [logo, setLogo] = useState('');
    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState(null);
    const [active, setActive] = useState(null);
    // const [inputSearch, setInputSearch] = useState('')

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if (!e.target.closest('#product-hunt')) {
                setTimeActive(null);
            }
        });
        return () => {
            window.removeEventListener('mousemove', null);
        };
    }, []);

    useEffect(() => {
        keyProducts
            ? handleShowTableProduct(keyProducts)
            : handleShowTableProduct('Mobile');
        // eslint-disable-next-line no-use-before-define
    }, [keyProducts]);

    useEffect(() => {
        if (arrayData) {
            if (categoryProducts) {
                const result = arrayData.filter(
                    (item) => item.category === categoryProducts.toLowerCase(),
                );
                setProducts(result);
            }
        }
    }, [arrayData, categoryProducts]);

    const handleOnNavigation = (index, item) => {
        setVisible(true);
        setActive(index);
        setProduct(item);
    };

    const handleShowTableProduct = (item) => {
        setShowTabletProduct(true);
        setIsShowCategoryOptions(false);
        setCategoryProducts(item);
        setCurrentPage(1);
    };

    const paginate = (number) => {
        setCurrentPage(number);
        setTimeout(() => {
            window.scrollBy(0, -10);
        }, 500);
    };

    const handleShowCategorySetting = () => {
        setIsShowCategory(!isShowCategory);
    };

    const handleImportObjCategorySetting = (obj) => {
        setImage(obj.image);
        setInput(obj.title);
    };

    const handlePushValueCategory = () => {
        const isEmpty = isEmptyObjectAll({ image, title: input });
        if (!isEmpty) {
            messageInfoToast(true, 'Đã tạo thành công danh mục sản phẩm!');
            setImage('');
            setInput('');
            setIsShowCategory(false);
        } else {
            messageInfoToast(false, 'Bạn chưa nhập đầy đủ dữ kiện');
        }
    };

    const someHandler = (i) => {
        setTimeActive(i);
    };

    const handleResetStateConfig = () => {
        setVal('');
        setDescription({});
        setInputConfig({});
        setLogo({});
    };

    const handleCreateProductList = useCallback(() => {
        setIsModalVisible(true);
        setVaration({
            count: varation.count + 1,
            title: '',
            image: '',
        });
    }, [varation.count]);

    const handleCancelProductConfig = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {loading && (
                <div className="loading__container">
                    <ScaleLoader
                        color={'#2963B3'}
                        loading={loading}
                        css={override}
                        size={200}
                    />
                </div>
            )}
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li>
                            <p>
                                <em className="fa fa-home" />
                            </p>
                        </li>
                        <li className="active">Widgets</li>
                    </ol>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Widgets /{' '}
                            {keyProducts
                                ? keyProducts.charAt(0).toUpperCase() +
                                  keyProducts.slice(1)
                                : url
                                ? url
                                : ''}{' '}
                        </h1>
                    </div>
                </div>
                <div className="row">
                    {isShowCategoryOptions ? (
                        <ProductOptions
                            handleShowTableProduct={handleShowTableProduct}
                            handleShowCategorySetting={
                                handleShowCategorySetting
                            }
                            isShowCategory={isShowCategory}
                            handleImportObjCategorySetting={
                                handleImportObjCategorySetting
                            }
                            handlePushValueCategory={handlePushValueCategory}
                            image={image}
                            input={input}
                            timeActive={timeActive}
                            someHandler={someHandler}
                            arrayData={arrayData}
                        />
                    ) : (
                        ''
                    )}

                    <ProductsDescription
                        showTabletProduct={showTabletProduct}
                        products={currentProducts}
                        totalProduct={products}
                        productsPerPage={productsPerPage}
                        paginate={paginate}
                        ref={paginateRef}
                        isShowProductDes={isShowProductDes}
                        isShowCategoryOptions={isShowCategoryOptions}
                        handleCreateProductList={handleCreateProductList}
                        isShow={isShow}
                        handleCancelProductConfig={handleCancelProductConfig}
                        isModalVisible={isModalVisible}
                        varation={varation}
                        setVaration={setVaration}
                        setProductVaratior={setProductVaratior}
                        productVaratior={productVaratior}
                        setVal={setVal}
                        setDescription={setDescription}
                        setInputConfig={setInputConfig}
                        setLogo={setLogo}
                        addData={addData}
                        description={description}
                        inputConfig={inputConfig}
                        logo={logo}
                        setVisible={setVisible}
                        visible={visible}
                        product={product}
                        setProduct={setProduct}
                        active={active}
                        setActive={setActive}
                        handleOnNavigation={handleOnNavigation}
                    />
                </div>
            </div>
        </>
    );
}

DashboardWidgets.propTypes = {};

export default memo(DashboardWidgets);
