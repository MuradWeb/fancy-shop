import React, { useState } from 'react';
import schemeImg from './scheme.png';

export const Product = () => {
    const [activeTab, setActiveTab] = useState<'desc' | 'rev'>('desc');

    return (
        <section className="section product">
            <div className="product__desc">
                <div className="product__image-wrapper">
                    <div className="product-slider product-slider--discount">
                        <span className="product-slider__discount">-35%</span>
                        <picture>
                            <img
                                className="product-slider__image"
                                src="/images/seeds/rainbowz.png"
                                alt="RAINBOWZ"
                            />
                        </picture>
                        <ol className="product-slider__pagination pagination">
                            <li className="pagination__item">
                                <button className="pagination__button" type="button"></button>
                            </li>
                            <li className="pagination__item">
                                <button
                                    className="pagination__button pagination__button--active"
                                    type="button"
                                ></button>
                            </li>
                            <li className="pagination__item">
                                <button className="pagination__button" type="button"></button>
                            </li>
                            <li className="pagination__item">
                                <button className="pagination__button" type="button"></button>
                            </li>
                        </ol>
                        <button className="product-slider__button" type="button"></button>
                        <button
                            className="product-slider__button product-slider__button--reverse"
                            type="button"
                        ></button>
                    </div>
                </div>
                <div className="product__features features">
                    <h1 className="features__title">RAINBOWZ</h1>
                    <dl className="features__list">
                        <div className="features__item features__item--lineage">
                            <dt className="features__subtitle">Lineage:</dt>
                            <dd className="features__desc">Zunami (Zkittlez x Jealousy)</dd>
                            <dd className="features__desc">x RS11 (Sunset Sherb x Pink Guava)</dd>
                        </div>
                        <div className="features__item">
                            <dt className="features__subtitle">Pack size:</dt>
                            <dd className="features__desc">7 per pack. Plus 3 freebies.</dd>
                        </div>
                        <div className="features__item">
                            <dt className="features__subtitle">Type:</dt>
                            <dd className="features__desc">Feminised</dd>
                        </div>
                        <div className="features__item">
                            <dt className="features__subtitle">Yield:</dt>
                            <dd className="features__desc">Medium to high</dd>
                        </div>
                        <div className="features__item">
                            <dt className="features__subtitle">Flowering time:</dt>
                            <dd className="features__desc">8-9 weeks</dd>
                        </div>
                    </dl>
                </div>
                <div className="product__buying">
                    <p className="product__price">420 €</p>
                    <button className="product__button button button--buying" type="button">
                        Preorder now
                    </button>
                </div>
            </div>
            <div className="product__detail product-detail">
                <div className="product-detail__button-wrapper">
                    <button
                        onClick={() => setActiveTab('desc')}
                        className={`product-detail__button ${
                            activeTab === 'desc' ? 'product-detail__button--active' : ''
                        }`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab('rev')}
                        className={`product-detail__button ${
                            activeTab === 'rev' ? 'product-detail__button--active' : ''
                        }`}
                    >
                        Reviews
                    </button>
                </div>
                {activeTab === 'desc' && (
                    <div className="product-detail__item product-detail__item--desc">
                        <div className="product-detail__desc">
                            <p className="product-detail__desc-text">
                                The Blue Jelly [(Blue Sherb x (Gelato 41 x Sherb bx1)] pheno we used
                                as the female in this hybrid was bred and selected in-house from
                                regular seeds. The plant we kept out of 50 was then hit with
                                reversed Z Road pollen to create Blue Fizz. Blue Jelly turned out to
                                be one of the more stand-out crosses to come from the gelato 41 x
                                sherb bx1 line, but never got released as she only produced a
                                handful of seeds. This plant definitely has some special attributes
                                as the offspring she’s produced with the Z Road has also proven to
                                be a favourite from the entire line among our team.
                            </p>
                            <p className="product-detail__desc-text">
                                The infamous bluish hues and sweet sugary terps from her grandma
                                (Blue Sherb) seem to be super recessive traits so far throughout the
                                three times we have done breeding projects with her. Consequently,
                                this cross provides a pool of plants with a high proportion of
                                colourful Z/Sherb type variations; making it hard to narrow down the
                                keepers. If you are familiar with the heavyweight lineage of this
                                delicious pairing then you know what to expect from these. The OG
                                heritage leaking into these Z Road hybrids is also helping maintain
                                a steady level of potency providing some full package box tickers
                                within this line
                            </p>
                        </div>
                        <div className="product-detail__diagram-wrapper">
                            <picture>
                                <img
                                    className="product-detail__diagram"
                                    src={schemeImg.src}
                                    alt="#"
                                />
                            </picture>
                        </div>
                    </div>
                )}
                {activeTab === 'rev' && (
                    <div className="product-detail__item product-detail__item--review">
                        <div className="product-detail__reviews">
                            <p className="product-detail__reviews-text">
                                The Blue Jelly [(Blue Sherb x (Gelato 41 x Sherb bx1)] pheno we used
                                as the female in this hybrid was bred and selected in-house from
                                regular seeds. The plant we kept out of 50 was then hit with
                                reversed Z Road pollen to create Blue Fizz. This plant definitely
                                has some special attributes as the offspring she’s produced with the
                                Z Road has also proven to be a favourite from the entire line among
                                our team.
                            </p>
                            <p className="product-detail__reviews-text">
                                Rainbowz has been a game-changer for me. As a longtime cannabis
                                enthusiast, I&apos;ve tried various strains, but Rainbowz has
                                quickly become my favorite. The vibrant colors and unique flavor
                                profile make it a truly enjoyable experience. Not to mention, the
                                effects are incredible. It provides a perfect balance of relaxation
                                and creativity, allowing me to unwind after a long day while still
                                feeling inspired. If you&apos;re looking for a top-notch cannabis
                                strain, I highly recommend giving Rainbowz a try!
                            </p>
                            <cite className="product-detail__reviews-author">
                                Sarah M. from Belgium
                            </cite>
                        </div>
                        <div className="product-detail__rating rating">
                            <p className="rating__title">Rating by users:</p>
                            <span className="rating__number">4.0</span>
                            <div className="rating__stars">
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star rating__star--active"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className="rating__star"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
