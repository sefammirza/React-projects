import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [catagories, setCatagories] = useState([]);

  return(

  <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
      </div>
      <Categories/>
      <Menu items={menuItems}/>
    </section>
  </main>



  );
}

export default App;
