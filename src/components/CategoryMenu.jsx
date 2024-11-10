import React from 'react';
import { useNavigate } from 'react-router-dom';
import FoodData from '../data/FoodData';

const CategoryMenu1 = () => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    if (category === 'All') {
      navigate('/');
    } else {
      const filteredData = FoodData.filter((item) => item.category === category);
      navigate(`/${category.toLowerCase()}`, { state: { categoryItems: filteredData } });
    }
  };

  return (
    <div className="mt-16">
      <h2 className="flex text-3xl font-extrabold ml-10">Find the best food</h2>
      <div className="flex ml-10 mt-5 gap-5 text-lg font-bold">
        <button
          className="category-button"
          onClick={() => handleNavigation('All')}
        >
          All
        </button>
        <button
          className="category-button"
          onClick={() => handleNavigation('Lunch')}
        >
          Lunch
        </button>
        <button
          className="category-button"
          onClick={() => handleNavigation('Breakfast')}
        >
          Breakfast
        </button>
        <button
          className="category-button"
          onClick={() => handleNavigation('Dinner')}
        >
          Dinner
        </button>
        <button
          className="category-button"
          onClick={() => handleNavigation('Snacks')}
        >
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu1;
