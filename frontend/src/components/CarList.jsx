//import { useState, useEffect } from 'react'
//import axios from "axios";
import CarCard from './CarCard';
import styles from "./CarList.module.css"

const CarList = ({cars, changeInfo}) => {

    /*const [cars, setCar] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/');
        setCar(response.data);
    }

    */
   
    return (
        <div className={styles.car_list}>
            {
                cars?.map((car, index) => {
                    return <div onClick={(e) => changeInfo(car)} key={index}><CarCard tipo={car.tipo} ano={car.ano} marca={car.marca} km={car.km} valor_atual={car.valor_atual}/></div>
                   })
            }
        </div>
        
    )

}



export default CarList