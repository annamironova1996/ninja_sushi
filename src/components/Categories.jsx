import { useState } from 'react';

const Categories = ({ activeCategory, setActiveCategory }) => {
    const categories = [
        ['Все'],
        ['Суши', 'img/icons/sushi.svg'],
        ['Ролы', 'img/icons/role.svg'],
        ['Сеты', 'img/icons/sets.svg'],
        ['Закуски', 'img/icons/snacks.svg'],
        ['Пицца', 'img/icons/pizza.svg'],
        ['Напитки', 'img/icons/beverages.svg'],
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return (
                        <li
                            onClick={() => setActiveCategory(index)}
                            className={activeCategory === index ? 'active' : ''}
                            key={index}
                        >
                            <img
                                src={category[1]}
                                alt=""
                            />
                            {category[0]}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;
