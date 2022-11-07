import styles from "./Info.module.css"

const Info = ({name, value}) => {
    return(
        <div className={styles.info_container}>
            <span className={styles.bold}>{name}:</span>
            <span>{value}</span>
        </div>
    );
}

export default Info;