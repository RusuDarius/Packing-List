export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>There are no items added yet!</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything packed! Ready to go! "
          : `You have ${numItems} items in your list and you have already packed
        ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
