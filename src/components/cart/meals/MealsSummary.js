import classes from './MealsSummary.module.css';
import Blocks from '../../../assets/Block.jpg';
const MealsSummary = () => {
  return (
    <section style={{backgroundImage:`url(${Blocks})`}} className={classes.summary}>
      <p>WHEN IT COMES TO SPEED</p><p className={classes.headline}>WE ARE THE FASTEST </p>
     
    </section>
  );
};

export default MealsSummary;