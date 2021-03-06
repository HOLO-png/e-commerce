import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Rate, Row, Skeleton } from 'antd';

function ProductInfo(props) {
    const { product, loading, comments_user } = props;
    const [star, setStar] = useState(0);

    useEffect(() => {
        setStar(product.star);
        return () => {
            setStar(0);
        };
    }, [product]);

    return (
        <>
            {loading ? (
                <Skeleton.Button
                    active={true}
                    size="large"
                    shape="default"
                    block={false}
                    style={{
                        width: '100%',
                        marginTop: 10,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                />
            ) : (
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ width: '100%' }}
                >
                    <Col className="gutter-row" span={6}>
                        <p className="product-star">
                            <u>{product.star + '/0'}</u>
                        </p>
                        {star ? (
                            <Rate
                                disabled
                                allowHalf
                                defaultValue={star}
                                style={{ margin: '5px' }}
                            />
                        ) : (
                            ''
                        )}
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div
                            className="product-evaluate"
                            style={{
                                display: 'flex',
                                borderLeft: '2px solid #b8b8b8',
                            }}
                        >
                            <u style={{ margin: '0 10px', color: 'red' }}>
                                {/* {comments_user.reduce((authen, item) => {
                                    return (
                                        authen +
                                        comments_user.length +
                                        item.cmt_item.length
                                    );
                                }, 0)} */}
                            </u>
                            <p
                                className="product-evaluate-title"
                                style={{ margin: '0 5px' }}
                            >
                                ????nh Gi??
                            </p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div
                            className="product-sold"
                            style={{
                                display: 'flex',
                                borderLeft: '2px solid #b8b8b8',
                            }}
                        >
                            <i style={{ margin: '0 10px', color: 'red' }}>
                                {product.sold}
                            </i>
                            <p
                                className="product-sold-title"
                                style={{ margin: '0 5px' }}
                            >
                                ???? B??n
                            </p>
                        </div>
                    </Col>
                </Row>
            )}
        </>
    );
}

ProductInfo.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductInfo;
