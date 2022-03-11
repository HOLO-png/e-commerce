import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Skeleton } from 'antd';
import Slider from 'react-slick';
import ProductShare from './ProductShare';
import ProductLike from './ProductLike';

ImgProduct.defaultProps = {
    product: [],
    imageArr: [],
};

function ImgProduct(props) {
    let { productImg, imageArr, loading, likes, auth, productId, product } =
        props;
    const [imgAdd, setImgAdd] = useState('');
    const [active, setActive] = useState(0);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: productImg
            ? productImg[0].image.length <= 4
                ? productImg[0].image.length
                : 4
            : 4,
        slidesToScroll: 1,
    };

    const handleImportImg = (img, index) => {
        setImgAdd(img);
        setActive(index);
    };

    useEffect(() => {
        if (imageArr.length) {
            setImgAdd(imageArr[0].data);
            setActive(0);
        } else if (productImg) {
            setImgAdd(productImg[0].image[0].data);
        }

        return () => {
            setImgAdd('');
        };
    }, [imageArr, productImg]);

    const renderImgPost = () => {
        return imageArr.length
            ? imageArr.map((item, index) => (
                  <div
                      key={index}
                      className="product-slide-item"
                      onClick={() => handleImportImg(item.data, index)}
                  >
                      {loading ? (
                          <Skeleton.Image />
                      ) : (
                          <img
                              alt=""
                              className={index === active ? 'active' : ''}
                              style={{
                                  width: '93%',
                              }}
                              src={item.data}
                          />
                      )}
                  </div>
              ))
            : productImg
            ? productImg[0].image.map((item, index) => (
                  <div
                      key={index}
                      className="product-slide-item"
                      onClick={() => handleImportImg(item.data, index)}
                  >
                      {loading ? (
                          <Skeleton.Image style={{ height: 80 }} />
                      ) : (
                          <img
                              alt=""
                              className={index === active ? 'active' : ''}
                              style={{
                                  width: '93%',
                              }}
                              src={item.data}
                          />
                      )}
                  </div>
              ))
            : '';
    };

    return (
        <>
            <div className="product-img">
                {loading ? (
                    <Skeleton.Image />
                ) : (
                    <Image
                        style={{ width: '100%' }}
                        src={imgAdd ? imgAdd : ''}
                    />
                )}
            </div>
            <div className="product-slides">
                <div
                    style={{
                        width: 400,
                        display: 'block',
                        marginTop: '15px',
                    }}
                >
                    <Slider {...settings}>{renderImgPost()}</Slider>
                </div>
            </div>
            <div className="product-interactive">
                <ProductShare loading={loading} product={product} />
                <ProductLike
                    loading={loading}
                    likes={likes}
                    auth={auth}
                    productId={productId}
                />
            </div>
        </>
    );
}

ImgProduct.propTypes = {
    product: PropTypes.array.isRequired,
    imageArr: PropTypes.array.isRequired,
};

export default ImgProduct;
