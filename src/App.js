import './App.css';
import MenuItem from './components/MenuItem';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Breakfast',
    description: 'Eggs and a side salad',
    imageName: 'Sunrise Benedict.png',
    price: 7.99,
  },
  {
    id: 2,
    title: 'Garden Wrap',
    description: 'Grilled Chicken and Veggies Wrap',
    imageName: 'Garden Delight Wrap.png',
    price: 8.99,
  },
  {
    id: 3,
    title: 'Chocolate Mousse',
    description: 'Chocolate Mousse with Raspberry',
    imageName: 'Chocolate Symphony.png',
    price: 3.99,
  },
  {
    id: 4,
    title: 'Harvest Pasta',
    description: 'Pasta with Veggies',
    imageName: 'Harvest Pasta.png',
    price: 11.99,
  },
  {
    id: 5,
    title: 'Grilled Salmon',
    description: 'Fresh Grilled Salmon',
    imageName: 'salmon.png',
    price: 18.99,
  },
  {
    id: 6,
    title: 'Quinoa Salad',
    description: 'Mixed Quinoa Salad',
    imageName: 'salad.png',
    price: 12.99,
  },
  {
    id: 7,
    title: 'Margherita Pizza',
    description: 'A Classic Pizza Option',
    imageName: 'pizza.png',
    price: 15.99,
  },
  {
    id: 8,
    title: 'Caramel Apple Icecream',
    description: 'Caramel, Apples, and Icecream',
    imageName: 'apple.png',
    price: 7.99,
  },
];


function App() {
  return (
    <div>
      <h1>Menu</h1>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        <MenuItem title={menuItems[0].title} /> {/* Example for how to use a component */}
      </div>
    </div>
  );
}

export default App;
