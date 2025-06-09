import cumburger from "./img/cumburger.jpg"
import pizza from "./img/pizza.jpg"
import free from "./img/free.jpg"
import cola from "./img/cola.jpg"

// Объект с инфой для карточек
let info = [
    {
        img: cumburger,
        name: 'Burger',
        description:'So good burger',
        type: 'burger', 
        price: 5.99
    }, 
    {
        img: pizza,
        name: 'Pizza',
        description: 'Realy spicy pizza',
        type: 'pizza', 
        price: 15.99
    },
    {
        img: free,
        name: "French fries",
        description: 'Fresh fries',
        type: 'snack',
        price: 3.99
    },
    {
        img: cola,
        name: 'Coca-Cola',
        description:'Refreshing cola',
        type: 'drinks', 
        price: 2.49
    }

];

export {info};

