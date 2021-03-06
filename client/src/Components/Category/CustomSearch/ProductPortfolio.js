import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    List,
    Button,
    Rate,
    InputNumber,
    Checkbox,
    Radio,
    Tabs,
} from 'antd';
import ModalAdress from '../ModalAdress';

function ProductPortfolio(props) {
    const [activeButton, setactiveButton] = useState(0);
    const [activeSearch, setactiveSearch] = useState(0);

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [priceBelow, setPriceBelow] = useState(0);
    const [priceHight, setPriceHight] = useState(0);

    const {
        data1,
        data2,
        data3,
        data4,
        data5,
        data7,
        data10,
        changeProductSmartPhone,
        changeProductCommonPhone,
        changeAllProduct,
        changeProductLandline,
        changeRateFiveStar,
        changeRateFourStar,
        changeRateThreeStar,
        changeFiveBelow,
        changeFiveBelowToFiveOn,
        changeFiveOnToTwoOn,
        changeTwoOn,
        ChangePriceButtonInput,
        changeSearchTrademark,
    } = props;

    function onChangeCheckBox(e, item, index) {
        setactiveSearch(index);
        changeSearchTrademark(item);
        // console.log(`checked = ${e.target.checked}`);
    }
    function onChange(e) {}
    function onChangePriceBelow(value) {
        // onChangePriceProduct(value);
        setPriceBelow(value);
    }

    function onChangePriceHight(value) {
        // onChangePriceProduct(value);
        setPriceHight(value);
    }

    const changeStatusButton = (item, index) => {
        if (data1.length === 4) {
            switch (item) {
                case data1[0]:
                    setactiveButton(index);
                    changeAllProduct();
                    break;
                case data1[1]:
                    changeProductSmartPhone();
                    setactiveButton(index);
                    break;
                case data1[2]:
                    changeProductCommonPhone();
                    setactiveButton(index);
                    break;
                case data1[3]:
                    changeProductLandline();
                    setactiveButton(index);
                    break;
                default:
                    break;
            }
        } else {
            switch (item) {
                case data1[0]:
                    setactiveButton(index);
                    changeAllProduct();
                    break;
                case data1[1]:
                    changeProductCommonPhone();
                    setactiveButton(index);
                    break;
                case data1[2]:
                    changeProductLandline();
                    setactiveButton(index);
                    break;
                default:
                    break;
            }
        }
    };

    const changeEvaluate = (title, index) => {
        switch (title) {
            case 'T??? 5 sao':
                changeRateFiveStar();
                break;
            case 'T??? 4 sao':
                changeRateFourStar();
                break;
            case 'D?????i 3 sao':
                changeRateThreeStar();
                break;
            default:
                break;
        }
    };

    const changePriceButton = (title, index) => {
        switch (title) {
            case 'D?????i 500.000':
                changeFiveBelow();
                break;
            case 'T??? 500.000 ?????n 5.000.000':
                changeFiveBelowToFiveOn();
                break;
            case 'T??? 5.000.000 ?????n 22.500.000':
                changeFiveOnToTwoOn();
                break;
            case 'Tr??n 22.500.000':
                changeTwoOn();
                break;
            default:
                break;
        }
    };
    // Add Adress

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const ChangePriceReset = (x, y) => {
        setPriceBelow(x);
        setPriceHight(y);
        ChangePriceButtonInput(x, y);
    };
    return (
        <Col
            className="gutter-row product-optional"
            span={5}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderRight: '1px solid #eee',
            }}
        >
            <List
                size="small"
                header={<div>DANH M???C S???N PH???M</div>}
                bordered
                dataSource={data1}
                renderItem={(item, index) => (
                    <List.Item>
                        <Button
                            type="text"
                            onClick={() => changeStatusButton(item, index)}
                            disabled={index === activeButton ? true : false}
                        >
                            {item}
                        </Button>
                    </List.Item>
                )}
            />
            <List
                size="small"
                header={<div>?????A CH??? NH???N H??NG</div>}
                bordered
                className="mobile-address"
                dataSource={data2}
                renderItem={(item) => (
                    <List.Item>
                        {item}
                        <Button type="link" onClick={showModal}>
                            NH???P ?????A CH???
                        </Button>
                    </List.Item>
                )}
            />
            <ModalAdress
                visible={visible}
                loading={loading}
                handleCancel={handleCancel}
                handleOk={handleOk}
            />
            <List
                size="small"
                header={<div>D???CH V???</div>}
                bordered
                className="mobile-service"
                dataSource={data3}
                renderItem={(item) => (
                    <List.Item>
                        <Checkbox onChange={onChange}>{item}</Checkbox>
                    </List.Item>
                )}
            />
            <List
                size="small"
                header={<div>????NH GI??</div>}
                bordered
                className="mobile-evaluate"
                dataSource={data4}
                renderItem={(item, index) => (
                    <List.Item
                        onClick={() => changeEvaluate(item.title, index)}
                    >
                        <Rate disabled defaultValue={item.rate} />
                        <p>{item.title}</p>
                    </List.Item>
                )}
            />
            <List
                size="small"
                header={<div>GI??</div>}
                bordered
                className="mobile-price"
                dataSource={data5}
                renderItem={(item, index) => (
                    <List.Item>
                        <Button
                            type="dashed"
                            onClick={() => changePriceButton(item, index)}
                        >
                            {item}
                        </Button>
                    </List.Item>
                )}
            />
            <div className="mobile-price-clause">
                <p>Ch???n Kho???ng Gi??</p>
                <InputNumber
                    style={{
                        width: 150,
                    }}
                    defaultValue="0"
                    min="0"
                    max="10000000"
                    onChange={onChangePriceBelow}
                    stringMode
                    value={priceBelow}
                />
                ~
                <InputNumber
                    style={{
                        width: 150,
                    }}
                    defaultValue="100000"
                    min="100000"
                    max="100000000"
                    onChange={onChangePriceHight}
                    stringMode
                    value={priceHight}
                />
                <Button
                    onClick={() =>
                        ChangePriceButtonInput(priceBelow, priceHight)
                    }
                >
                    ??p D???ng
                </Button>
                <Button onClick={() => ChangePriceReset(0, 0)}>?????t L???i</Button>
            </div>

            <List
                size="small"
                header={<div>TH????NG HI???U</div>}
                bordered
                className="mobile-ROM"
                dataSource={data7}
                renderItem={(item, index) => (
                    <List.Item>
                        <Checkbox
                            onChange={(e) => onChangeCheckBox(e, item, index)}
                            checked={index === activeSearch ? true : false}
                        >
                            {item}
                        </Checkbox>
                    </List.Item>
                )}
            />
            <List
                size="small"
                header={<div>GIAO H??NG</div>}
                bordered
                className="mobile-delivery"
                dataSource={data10}
                renderItem={(item) => (
                    <List.Item>
                        <Radio>{item}</Radio>
                    </List.Item>
                )}
            />
        </Col>
    );
}

ProductPortfolio.propTypes = {};

export default ProductPortfolio;
