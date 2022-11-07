import CarList from "./CarList";
import SideMenu from "./SideMenu";
import styles from "./Main.module.css"
import { useState, useEffect } from 'react'
import axios from "axios";
import CarInfo from "./CarInfo";

const Main = () => {

    const [cars, setCar] = useState([]);
    const [carInfo, setCarInfo] = useState();
    const [hidden, setHidden] = useState(1);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        const response = await axios.get('http://localhost:5000/');
        setCar(response.data);
    }

    async function changeType(type) {
        const reponse_aux = await axios.get('http://localhost:5000/tipo/'+type);
        setCar(reponse_aux.data);
        console.log(reponse_aux.data)    
    }

    function changeInfo(car) {
        setHidden(0)
        setCarInfo(car)
        console.log(carInfo)
    }

    function close() {
        setHidden(1)
        console.log(hidden)
    }

    return(
        <div className={styles.container}>
            <SideMenu changeType={changeType}/>
            <CarList cars={cars} changeInfo={changeInfo}/>
            <div>
                <CarInfo show={hidden} close={close} info={carInfo}/>
            </div>
        </div>
    );
}

export default Main;