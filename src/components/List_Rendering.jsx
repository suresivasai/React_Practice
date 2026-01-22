
function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Grapes", calories: 62 },
    { id: 4, name: "Guava", calories: 37 }
  ];

  // Sort the fruits array by calories in descending order
  const sortedFruits = fruits.sort((a, b) => b.calories - a.calories);

  // Map sorted data to JSX
  const Items = sortedFruits.map(fruit => (
    <li key={fruit.id}>
      id: {fruit.id} &nbsp;
      name: {fruit.name} &nbsp;
      cal: {fruit.calories}
    </li>
  ));

  return <ul>{Items}</ul>;
}

export default List;
