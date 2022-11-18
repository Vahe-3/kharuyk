import React, { useEffect, useState } from 'react';
import classes from "./Slider.module.scss";

const images = [
  'https://scontent.fevn13-1.fna.fbcdn.net/v/t39.30808-6/314938006_2806507696147344_4586004150652264097_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=OSkVR0XGLC0AX8mc5_6&_nc_ht=scontent.fevn13-1.fna&oh=00_AfBXnocBSR1gng_JYOBB01lEiB3fvAHslWkpU-l4RfqEjw&oe=637B14E1',
  'https://scontent.fevn13-1.fna.fbcdn.net/v/t39.30808-6/315287571_2806505579480889_7564963204057043551_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=YKydHYhJMNAAX9xyI5d&_nc_ht=scontent.fevn13-1.fna&oh=00_AfBjpTbjr19oqGyfHJok4QtC99gCAP_tuX9UwKHiazVmaw&oe=637B66CC',
  'https://scontent.fevn13-1.fna.fbcdn.net/v/t39.30808-6/315652348_2806505502814230_5633786121984435297_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=BaiiAF8rBrIAX8dl-nV&_nc_ht=scontent.fevn13-1.fna&oh=00_AfBk58wFLyrxuN4ld0jxrGfjhIDtfKuit2JQiqcFZzzxCg&oe=637A6903',
  'https://scontent.fevn13-1.fna.fbcdn.net/v/t39.30808-6/315284900_2806948596103254_3649768554190508911_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=9VOT3kJ2LWUAX9Scbr4&_nc_ht=scontent.fevn13-1.fna&oh=00_AfAZtvNqO3OvXalTcu6Q1R1rO1EaosEN-dxrecoPwgwoow&oe=637AB152',
  'https://scontent.fevn13-1.fna.fbcdn.net/v/t39.30808-6/314938006_2806507696147344_4586004150652264097_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=OSkVR0XGLC0AX8mc5_6&_nc_ht=scontent.fevn13-1.fna&oh=00_AfBXnocBSR1gng_JYOBB01lEiB3fvAHslWkpU-l4RfqEjw&oe=637B14E1',
  'https://scontent.fevn13-1.fna.fbcdn.net/v/t39.30808-6/315652348_2806505502814230_5633786121984435297_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=BaiiAF8rBrIAX8dl-nV&_nc_ht=scontent.fevn13-1.fna&oh=00_AfBk58wFLyrxuN4ld0jxrGfjhIDtfKuit2JQiqcFZzzxCg&oe=637A6903',

]

const Slider = () => {

  const [current, setCurrent] = useState(1);

  useEffect(() => {

    if (current > 5) {
      setCurrent(1)
    }

    let id = setInterval(() => setCurrent(current + 1), 2000)

    return () => clearInterval(id)
  }, [current])

  return (
    <div className={classes.slider}>
      <div>
      <img className={classes.image} src={images[current]} />
      </div>
      <div className={classes.points}>
        <div onClick={() => setCurrent(1)} className={current === 1 ? classes.active : ""}> </div>
        <div onClick={() => setCurrent(2)} className={current === 2 ? classes.active : ""}> </div>
        <div onClick={() => setCurrent(3)} className={current === 3 ? classes.active : ""}> </div>
        <div onClick={() => setCurrent(4)} className={current === 4 ? classes.active : ""}> </div>
        <div onClick={() => setCurrent(5)} className={current === 5 ? classes.active : ""}> </div>
      </div>


    </div>
  )
}

export default Slider