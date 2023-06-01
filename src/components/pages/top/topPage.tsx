import React from 'react';

/* import css */ 
import styles from './topPage.module.css';

/* import data */ 
import { menuItems, subMenuItems } from '../../../assets/testData';

/* import mui */ 
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';


export default function TopPage() {

    const [menuOpenFlag, setMenuOpenFlag] = React.useState<boolean>(false);

    return(
        <div>
            {/* メニュー：大項目 */}
            <div className={styles.bl_sideMenu}>
                <div className={styles.bl_sideMenu__inner}>
                    <div className={styles.bl_sideMenu__btn} onClick={() => {setMenuOpenFlag(!menuOpenFlag)}}>
                        <span className={`${styles.bl_sideMenu__btn__bar} ${menuOpenFlag && styles.is_active}`}></span>
                        <span className={`${styles.bl_sideMenu__btn__bar} ${menuOpenFlag && styles.is_active}`}></span>
                        <span className={`${styles.bl_sideMenu__btn__bar} ${menuOpenFlag && styles.is_active}`}></span>
                    </div>
                    <div className={styles.bl_sideMenu__menuItemWrapper}>
                        { menuItems.map((val, index) => {
                            return (
                                <a className={styles.bl_sideMenu__menuItem} href={val.url} key={'menuItem'+index}>
                                    <span className={ styles.el_menuItem__icon }>{ val.symbol }</span>
                                    <span className={ styles.el_menuItem__text }>{ val.text }</span>
                                </a>
                            )
                        }) }
                    </div>
                    <div className={styles.bl_addBtnWrapper}>
                        <AddCircleIcon className={styles.el_addBtn}/>
                    </div>
                </div>
            </div>
            {/* メインコンテンツ */}
            <div>
                <div className={styles.bl_header}></div>
                <main id={styles.main}>
                    <div className={styles.ly_main__inner}>
                        {/* ヘッダー */}
                        <div className={styles.bl_header}>
                            <div className={styles.bl_header__inner}>
                                <div className={styles.el_searchArea}>
                                    <input type='text' />
                                    <SearchIcon />
                                </div>
                            </div>
                        </div>
                        {/* サブメニュー */}
                        <ul className={styles.bl_subMenu}>
                            { subMenuItems.map((val, index) => {
                                return (
                                    <li key={'subMenuItem'+index} className={`${index === 0 ? styles.is_select : ''}`}>
                                        <span className={styles.el_symbol}>{val.symbol}</span>
                                        <span>{val.text}</span>
                                    </li>
                                )
                            }) }
                        </ul>
                        {/* メインコンテンツ */}
                        <div className={styles.bl_mainContent}>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}