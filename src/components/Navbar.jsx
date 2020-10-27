import React, {Component} from 'react'
import Styles from '../styles/Navbar.module.css'
class Navbar extends React.Component{
    render() {
        return (
            <nav className={Styles.appNav}>
                <div className={Styles.item}>
                    <a href="">Profile</a>
                </div>
                <div className={Styles.item}>
                    <a href="">Messages</a>
                </div>
                <div className={Styles.item}>
                    <a href="">News</a>
                </div>
                <div className={Styles.item}>
                    <a href="">Music</a>
                </div>
                <div className={Styles.item}>
                    <a href="">
                        {/*<img src="https://w7.pngwing.com/pngs/177/1018/png-transparent-computer-icons-business-others.png" alt=""/>*/}
                        Settings
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar