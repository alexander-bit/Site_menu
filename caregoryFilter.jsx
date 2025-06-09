function Button({ children, onClick, styles }) {
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
        ...styles
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function CategoryFilter({ onFilterChange }) {
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '6vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button styles={{ backgroundColor: 'black', color: 'white', paddingInline: '20px' }} onClick={() => onFilterChange('all')}>All</Button>
      <Button onClick={() => onFilterChange('drinks')}>Drinks</Button>
      <Button onClick={() => onFilterChange('pizza')}>Pizzas</Button>
      <Button onClick={() => onFilterChange('burger')}>Burgers</Button>
      <Button onClick={() => onFilterChange('snack')}>Snacks</Button>
    </div>
  );
}

export default CategoryFilter;