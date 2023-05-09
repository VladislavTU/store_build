import Item from './Item';
import styles from './ItemsList.module.css';

function ItemsList({ items, addOnCart }) {
  return (
    <div className="container">
      <div className={styles.items}>
        <Item items={items} addOnCart={addOnCart} />
      </div>
    </div>
  );
}

export default ItemsList;
