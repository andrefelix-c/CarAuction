import styles from "./CarCard.module.css"

const CarCard = (props) => {
    return(
        <div className={styles.card}>
            <div className={styles.top}>
                <p>{props.tipo}</p>
                <p>{props.ano}</p>
            </div>
            <div className={styles.bottom}>
                <span className={styles.marca}>{props.marca}</span>
                <div className={styles.b_info}>
                    <span className={styles.km}>{props.km}</span>
                    <span className={styles.valor_atual}>{props.valor_atual}</span>
                </div>
            </div>
        </div>
    );
}

export default CarCard;