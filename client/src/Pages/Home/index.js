import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import heroSlides, { slide_home } from '../../assets/fake-data';
import police from '../../assets/fake-data/policeCartApi';

import Helmet from '../../components/Helmet';
import HeroSlides from '../../components/HeroSlides';
import PoliceCart from '../../components/PoliceCart';
import Section, { SectionBody, SectionTitle } from '../../components/Section';
import Grid from '../../components/Grid';
import ProductCart from '../../components/ProductCart';
import { BackTop, Carousel, Col, Divider, Row, Tooltip } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import GenuineBrand from '../../components/GenuineBrand';
import SriceShock from '../../components/SriceShock';
import CatgorySelect from '../../components/CatgorySelect';
import { getProducts } from '../../utils/randomProduct';

import AOS from 'aos';
import { loadingProductHome } from '../../utils/loadingProductHome';
import ButtonLoading from '../../components/ButtonLoading';
import { css } from 'styled-components';
import { openNotification } from '../../utils/messageAlear';
import EvaluateWebs from '../../components/EvaluateWebs';
import { products_api } from '../../assets/fake-data/products_api';

const text = <span>Cuộn lên đầu trang</span>;

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 33,
};

export default function Home() {
    const handleShowMessage = () => {};
    return (
        <Helmet title="Home">
            {/* Show heroSlides */}
            <div className="Home">
                <HeroSlides
                    data={heroSlides}
                    control={true}
                    auto={true}
                    timeOut={6000}
                />
                {/* end show heroslides */}
                {/* section */}
                <Section>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {police.map((item, index) => (
                                <Link to="/policy" key={index}>
                                    <PoliceCart
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                        onClick={handleShowMessage}
                                    />
                                </Link>
                            ))}
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end section */}

                <SriceShock slideStatus={true} mobile_api={products_api} />
                <GenuineBrand />
                <Section data-aos="fade-up">
                    <SectionTitle icon="crown">MUA NHIỀU NHẤT</SectionTitle>
                    <Divider
                        orientation="center"
                        style={{
                            transform: 'translateY(30px)',
                            color: '#c3c3c3',
                        }}
                    >
                        <i className="fad fa-mobile"></i> IPHONE + TABLET
                    </Divider>
                    <SectionBody>
                        <Grid col={4} mdCol={2} smCol={1} gap={20}>
                            {products_api.map((item, index) => (
                                <div key={index}>
                                    <ProductCart
                                        id={item._id}
                                        name={item.name}
                                        price={item.price}
                                        status={item.status}
                                        star={item.star}
                                        amount={item.amount}
                                        category={item.category}
                                        capacity={item.capacity}
                                        varation={item.varation}
                                        image={item.image}
                                        description={item.description}
                                        priceOld={item.priceOld}
                                        height="400"
                                        img_width="95%"
                                        right="11px"
                                        sold={item.sold}
                                    ></ProductCart>
                                </div>
                            ))}
                        </Grid>
                    </SectionBody>
                    {products_api.length ? (
                        <>
                            <Divider
                                orientation="center"
                                style={{
                                    transform: 'translateY(30px)',
                                    color: '#c3c3c3',
                                }}
                            >
                                <i className="fad fa-laptop"></i> LAPTOP
                            </Divider>
                            <SectionBody>
                                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                                    {getProducts(4, products_api).map(
                                        (item, index) => (
                                            <div key={index}>
                                                <ProductCart
                                                    id={item._id}
                                                    name={item.name}
                                                    price={item.price}
                                                    status={item.status}
                                                    star={item.star}
                                                    amount={item.amount}
                                                    category={item.category}
                                                    capacity={item.capacity}
                                                    varation={item.varation}
                                                    image={item.image}
                                                    description={
                                                        item.description
                                                    }
                                                    priceOld={item.priceOld}
                                                    height="400"
                                                    img_width="95%"
                                                    right="11px"
                                                    sold={item.sold}
                                                ></ProductCart>
                                            </div>
                                        ),
                                    )}
                                </Grid>
                            </SectionBody>
                        </>
                    ) : (
                        ''
                    )}
                </Section>
                <Tooltip
                    placement="top"
                    title={text}
                    style={{ right: '76px', bottom: '100px' }}
                    color="#4267b2"
                >
                    <BackTop>
                        <div style={style}>
                            <VerticalAlignTopOutlined />
                        </div>
                    </BackTop>
                </Tooltip>
                <CatgorySelect
                    // handleCategorySamSung={handleCategorySamSung}
                    // handleProductAll={handleProductAll}
                    productAll={products_api}
                />
                <SectionBody>
                    <div
                        className="cart-products"
                        style={{ height: '500px', overflow: 'hidden' }}
                    >
                        <Grid col={5} mdCol={2} smCol={1} gap={0}>
                            {getProducts(21, products_api).map(
                                (item, index) => (
                                    <div key={index}>
                                        <ProductCart
                                            id={item._id}
                                            name={item.name}
                                            price={item.price}
                                            status={item.status}
                                            star={item.star}
                                            amount={item.amount}
                                            category={item.category}
                                            capacity={item.capacity}
                                            varation={item.varation}
                                            image={item.image}
                                            description={item.description}
                                            priceOld={item.priceOld}
                                            height="350"
                                            img_width="90%"
                                            right="5px"
                                            sold={item.sold}
                                        ></ProductCart>
                                    </div>
                                ),
                            )}
                        </Grid>
                    </div>
                </SectionBody>
                <Sidebar />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                        <Carousel autoplay>
                            {slide_home.map((item, index) => (
                                <div key={index}>
                                    <img alt={item.title} src={item.img} />
                                </div>
                            ))}
                        </Carousel>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <iframe
                            style={{ width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/ikzXR2iV7Zs"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Col>
                </Row>
                <EvaluateWebs />
                {/* <BoxChat /> */}
            </div>
        </Helmet>
    );
}
