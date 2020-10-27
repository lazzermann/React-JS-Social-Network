import React, {Component} from 'react'
import Styles from  '../styles/Profile.module.css'

class Profile extends React.Component{
    render() {
        return (
            <div className= {Styles.appContent}>
                <div>
                    <img src="https://theinpaint.com/images/example-1-2.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://masna.ir/school/howto/img_avatar.png" alt=""/>
                </div>
                <div className={Styles.posts}>
                    posts
                    <div className= {Styles.item}>
                        new post
                    </div>
                    <div className={Styles.item}>
                        post 1
                    </div>
                    <div className= {Styles.item}>
                        post 2
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile