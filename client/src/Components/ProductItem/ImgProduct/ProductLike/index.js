import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

function ProductLike(props) {
    const history = useHistory();
    const { loading, likes, auth, productId } = props;
    const [like, setLike] = useState(false);

    const renderHearlActive = () =>
        !like ? (
            <i className="fal fa-heart"></i>
        ) : (
            <i className="fas fa-heart"></i>
        );
    return (
        <>
            {loading ? (
                <Skeleton.Button
                    active={true}
                    size="large"
                    shape="default"
                    block={false}
                    style={{ width: 140 }}
                />
            ) : (
                <div className="product-like">
                    {renderHearlActive()}
                    <p className="product-cmt">
                        {like ? 'Đã Thích' : 'Thích'} ({likes?.length})
                    </p>
                </div>
            )}
        </>
    );
}

ProductLike.propTypes = {};

export default ProductLike;
