import React, { useState } from 'react';

function App() {
  const [toppings, setToppings] = useState(['Cheese']);
  const [pepperoniChecked, setPepperoniChecked] = useState(false);

  const togglePepperoni = () => {
    setPepperoniChecked(!pepperoniChecked);
    setToppings(prev =>
      prev.includes('Pepperoni')
        ? prev.filter(t => t !== 'Pepperoni')
        : [...prev, 'Pepperoni']
    );
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={pepperoniChecked}
          onChange={togglePepperoni}
        />
        Add Pepperoni
      </label>
      <ul>
        {toppings.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
