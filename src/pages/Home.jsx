import { useState, useEffect } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Products';
import Skeleton from '../components/Products/Skeleton';
import MainBanner from '../components/MainBanner';

const Home = () => {
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activePopupItem, setActivePopupItem] = useState({
        name: 'популярности',
        sort: 'rating',
    });
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const cardAll = await axios.get(
                    'http://localhost:3001/products?category=' + activeCategory
                );

                setIsLoading(false);
                setCard(cardAll.data);
            } catch (error) {
                console.log('ошибка при запросе данных');
            }
            setIsLoading(false);
        }
        fetchData();
    }, [activeCategory]);

    console.log(activePopupItem, activePopupItem);

    return (
        <div className="content">
            <div className="container">
                <MainBanner />
                <div className="content__top">
                    <Categories
                        activeCategory={activeCategory}
                        setActiveCategory={(id) => setActiveCategory(id)}
                    />
                    <Sort
                        activePopupItem={activePopupItem}
                        setActivePopupItem={(id) => setActivePopupItem(id)}
                    />
                </div>

                {card?.map((item, index) => {
                    return (
                        <>
                            <h2
                                className="content__title"
                                key={index}
                            >
                                {item.chapter}
                            </h2>
                            <div className="content__items">
                                {isLoading
                                    ? [new Array(6)].map(() =>
                                          [new Array(6)].map((_, index) => {
                                              return <Skeleton key={index} />;
                                          })
                                      )
                                    : item?.items?.map((item, index) => {
                                          return (
                                              <Pizza
                                                  key={index}
                                                  {...item}
                                              />
                                          );
                                      })}
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
