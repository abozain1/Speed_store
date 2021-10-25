import classes from "./AvailableMeals.module.css";
import Card from "../ui/Card";
import MealItem from "./mealitem/MealItem";
import { useEffect,useMemo,useState  } from "react";
import img1 from '../../../assets/dn.jfif';
import img2 from '../../../assets/dp.jfif';
import img3 from '../../../assets/du.jfif';
import img4 from '../../../assets/dl.jfif';
import img5 from '../../../assets/das.jfif';
import img6 from '../../../assets/dad.jfif';



const AvailableMeals = () => {
  const [meals,setmeals]= useState([]);
  const [mealerror,setmealerror]=useState();
  const loadedmeals =useMemo(()=>[],[]);
  const img=useMemo(()=>[img1,img2,img3,img4,img5,img6],[]);
 
  useEffect(()=>{
    const fetchmeals = async () => {
      const response = await fetch(
        "https://food-application-8d53c-default-rtdb.firebaseio.com/meals.json"
        );
        if (!response.ok) {
          throw new Error('something went wrong');
          
        }
        const responsedata = await response.json();
        let i=0;
        for (const key in responsedata) {
         
          
          loadedmeals.push({
            img:img[i],
            id: key,
            name: responsedata[key].name,
            description: responsedata[key].description,
            price: responsedata[key].price,
          });
          i+=1
        }
        setmeals(loadedmeals);
        
      };
      
      
      
      fetchmeals().catch((error)=>{
        
        setmealerror(error.message);
      });
      
      
      
      
      
    },[img,loadedmeals])
    
      if (mealerror) {
        return <section className={classes.error}>{mealerror}</section>
        
      }
      
      const mealslist = meals.map((meal) => (
        <MealItem
        img={meal.img}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        key={meal.id}
        price={meal.price}
        />
        ));
      
  return (
    <section  className={classes.meals}>
      <Card  >
        <ul  >{mealslist}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
