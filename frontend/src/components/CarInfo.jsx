import styles from "./CarInfo.module.css"
import Info from "./Info";

const CarInfo = ({show, close, info}) => {
    return(
        <div>
            {
                show === 0
                ? <div className={styles.container_info}>
                    <button onClick={( )=> close()}>x</button>
                    <div className={styles.top}>
                        <span className={styles.marca}>{info.marca}</span>
                        <span className={styles.ano}>{info.ano}</span>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.hr}></div>
                        <span className={styles.preco_atual}>{info.valor_atual}</span>
                    </div>
                    <div className={styles.little_info}>
                        {
                            Object.entries(info).map((e) => {return <Info name={e[0]} value={e[1]}/>})
                        }
                    </div>
                </div>
                : <div></div>
            }
        </div>
        /*<div>
            <div className={props.car ? styles.show : styles.hidden}>
                <div className={styles.top}>
                    <span>Jeep Renegate</span>
                    <span>2021/2022</span>
                </div>
            </div>
        </div>*/
    );
}

export default CarInfo;