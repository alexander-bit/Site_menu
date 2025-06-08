import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header({ visible, buyCount = 0 }) {
  return (
    // Общий header
    <div
      style={{
        display: 'flex',
        position: 'relative',
        minWidth: '100vw',
        minHeight: '10vh',
        backgroundColor: 'black',
        flexWrap: 'nowrap'
      }}
    >

    {/* Заголовок */}
      <h1
        style={{
          margin: 0,
          color: 'red',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        LOGO
      </h1>

    {/*Корзинка со счетчиком  */}
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <p style={{ fontSize: '20px', color: 'white', margin: 0 }}>${buyCount.toFixed(2)}</p>{/*Счетчик общей стоимости*/}
        
        <FaShoppingCart style = {{cursor: 'pointer'}} size={28} color="white" /> {/*Картинка корзины*/}
      </div>
      <button style = {
        {
          all: 'unset',
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '24px',
          cursor: 'pointer'
        }
      } onClick = {visible}><GiHamburgerMenu/></button>{/*Вывод бокового меню(Сделаю позже)*/}
    </div>
  );
}

