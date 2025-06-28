import { useState } from "react";

function Button({ children, onClick, isActive }) {
  const activeStyle = {
    backgroundColor: 'black',
    color: 'white',
    paddingInline: '20px'
  };

  return (
    <button
      style={{
        all: 'unset',
        display: 'inline-flex',
        backgroundColor: 'red',
        color: 'black',
        height: '25px',
        marginInline: '15px',
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'black',
        borderRadius: '15px',
        paddingInline: '10px',
        fontWeight: 'bold',
        ...(isActive ? activeStyle : {}),
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function CategoryFilter({ onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '6vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button
        isActive={activeCategory === 'all'}
        onClick={() => {
          onFilterChange('all');
          setActiveCategory('all');
        }}
      >
        All
      </Button>
      <Button
        isActive={activeCategory === 'drinks'}
        onClick={() => {
          onFilterChange('drinks');
          setActiveCategory('drinks');
        }}
      >
        Drinks
      </Button>
        <Button
        isActive={activeCategory === 'pizza'}
        onClick={() => {
          onFilterChange('pizza');
          setActiveCategory('pizza');
        }}
      >
        Pizzas
      </Button>
      <Button
        isActive={activeCategory === 'burger'}
        onClick={() => {
          onFilterChange('burger');
          setActiveCategory('burger');
        }}
      >
        Burgers
      </Button>
      <Button
        isActive={activeCategory === 'snack'}
        onClick={() => {
          onFilterChange('snack');
          setActiveCategory('snack');
        }}
      >
        Snacks
      </Button>
    </div>
  );
}

