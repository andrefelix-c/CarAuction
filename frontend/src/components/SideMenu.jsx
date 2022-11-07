import styles from "./SideMenu.module.css"

const SideMenu = ({changeType}) => {

    return(
        <div className={styles.menu_container}>
            <div className={styles.item_menu}>
                <button onClick={() => {changeType("Seminovo")}}>SEMINOVOS</button>
            </div>
            <div className={styles.item_menu}>
                <button onClick={() => {changeType("Usado")}}>USADOS</button>
            </div>
            <div className={styles.item_menu}>
                <button onClick={() => {changeType("Moto")}}>MOTOS</button>
            </div>
        </div>
    );
}

export default SideMenu;