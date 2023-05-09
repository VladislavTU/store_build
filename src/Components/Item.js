import { Link } from 'react-router-dom';
import styles from './item.module.css';

function Item({ items, addOnCart }) {
  return items.map((el) => (
    <div className={styles.item} key={el.id}>
      <h4>{el.name}</h4>
      <Link to='fullItem'><img src={el.url} alt="Item" /></Link>
      <p>{el.description}</p>
      <div className={styles.cartAndPrice}>
        <p className={styles.itemPrice}>{el.price}$</p>
        <p className={styles.addCartBtn} onClick={() => addOnCart(el)}>
          Add to cart
        </p>
      </div>
    </div>
  ));
}

export default Item;
