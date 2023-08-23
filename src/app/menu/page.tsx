import Navbar from '../components/nav';
import Footer from '../components/footer';
import Head from 'next/head';

type FoodItemProps = {
  name: string;
  description: string;
  price: number;
};

const FoodItem: React.FC<FoodItemProps> = ({ name, description, price }) => (
  <div className="p-4 mb-4">
    <h3 className="text-xl font-bold text-stone-700">{name}</h3>
    <p className="text-stone-600">{description}</p>
    <p className="font-bold text-stone-500">${price.toFixed(2)}</p>
  </div>
);

export const menu = [

  {
    category: "Appetizers",
    items: [
      {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce and creamy Caesar dressing topped with Parmesan cheese and croutons.',
        price: 7.99,
      },
      {
        name: 'Caprese Skewers',
        description: 'Cherry tomatoes, basil, and mozzarella drizzled with balsamic glaze.',
        price: 8.99,
      },
      {
        name: 'Stuffed Mushrooms',
        description: 'Mushrooms filled with a creamy cheese mixture and baked to perfection.',
        price: 9.99,
      },
    ]
  },
  { category: "Starters",
    items: [
      {
        name: 'Pizza',
        description: 'Delicious thin-crust pizza with fresh toppings.',
        price: 15.99,
      },
      {
        name: 'Burger',
        description: 'Juicy beef burger with cheese, lettuce, and tomatoes.',
        price: 10.99,
      },
      {
        name: 'Pasta',
        description: 'Pasta with homemade marinara sauce and fresh basil.',
        price: 12.99,
      },
      {
        name: 'Taco',
        description: 'Flavorful tacos with your choice of fillings.',
        price: 8.99,
      },
      {
        name: 'Steak',
        description: 'Savory grilled steak with a side of vegetables.',
        price: 25.99,
      },
      {
        name: 'Lobster',
        description: 'Luxurious lobster served with melted butter.',
        price: 40.99,
      },
      {
        name: 'Chicken Curry',
        description: 'Spicy and savory chicken curry served with rice.',
        price: 14.99,
      },
      {
        name: 'Vegan Stir Fry',
        description: 'Tasty vegan stir fry with tofu and fresh veggies.',
        price: 11.99,
      },
    ]
},
{
  category: 'Desserts',
  items: [
    {
      name: 'Tiramisu',
      description: 'Classic Italian dessert with layers of mascarpone cream and coffee-soaked ladyfingers, dusted with cocoa powder.',
      price: 7.99,
    },
    {
      name: 'Cheesecake',
      description: 'Rich and creamy cheesecake with a graham cracker crust, served with a strawberry sauce.',
      price: 8.99,
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a gooey chocolate center, served with vanilla ice cream.',
      price: 9.99,
    },
  ],
},
{
  category: 'Happy Hour Special',
  items: [
    {
      name:'Sunshine Bliss',
      description: ' A refreshing tropical cocktail made with pineapple juice, coconut rum, and a splash of lime. Served over ice with a garnish of fresh mint leaves.',
      price: 7.99
    },
    {
      name:'Cheesy Nacho Delight',
      description: ' A generous portion of crispy tortilla chips topped with melted cheddar cheese, jalapeños, diced tomatoes, and a dollop of sour cream. Served with a side of homemade salsa.',
      price: 5.99
    },
    {
      name:'Mojito Madness',
      description: ' A classic mojito made with fresh mint leaves, rum, lime juice, and a hint of sugar. Served over crushed ice for a cool and invigorating experience.',
      price: 6.99
    },
    {
      name:"Smokin' BBQ Sliders",
      description: 'Three mini burgers featuring juicy beef patties topped with smoky barbecue sauce, caramelized onions, and melted cheddar cheese. Served on soft brioche buns with a side of seasoned fries.',
      price: 7.99
    },
    {
      name:'Fruity Paradise Mocktail',
      description: 'A delightful blend of freshly squeezed orange juice, cranberry juice, and a splash of grenadine syrup. Garnished with a slice of orange and a maraschino cherry for a burst of color.',
      price: 7.99
    },
    {
      name:'Crispy Calamari Bites',
      description: 'Tender calamari rings coated in a seasoned batter and deep-fried to perfection. Served with a zesty lemon aioli dipping sauce.',
      price: 7.49
    },
  ]
}
];


const Menu: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Menu | Our Restaurant</title>
        <meta name="description" content="Discover the delectable dishes we serve at Our Restaurant. From starters to desserts, every dish is a culinary delight." />
      </Head>
      
      <Navbar />
      <div className="container px-4 mx-auto mt-16">
        <header>
          <h1 className="mb-4 text-6xl font-bold text-center text-stone-700">Menu</h1>
        </header>
        
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-4">
            {menu.map((category, i) => (
              category.category === 'Happy Hour Special' && (
                <section key={i}>
                  <h2 className="p-4 mb-2 text-4xl font-black border-2 text-stone-700 hover:text-stone-800 border-stone-800">
                    {category.category}
                  </h2>
                  <div className="grid gap-4">
                    {category.items.map((item, j) => (
                      <FoodItem key={j} {...item} />
                    ))}
                  </div>
                </section>
              )
            ))}
          </div>
          <div className="mb-4">
            {menu.map((category, i) => (
              category.category !== 'Happy Hour Special' && (
                <section key={i}>
                  <h2 className="p-4 mb-2 text-4xl font-black border-2 shadow-md text-stone-700 hover:text-stone-800 border-stone-800">
                    {category.category}
                  </h2>
                  <div className="grid gap-4">
                    {category.items.map((item, j) => (
                      <FoodItem key={j} {...item} />
                    ))}
                  </div>
                </section>
              )
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Menu;