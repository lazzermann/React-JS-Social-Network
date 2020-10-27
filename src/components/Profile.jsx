import React, {Component} from 'react'

class Profile extends React.Component{
    render() {
        return (
            <div className= 'app-content'>
                <div>
                    <img src="https://theinpaint.com/images/example-1-2.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://masna.ir/school/howto/img_avatar.png" alt=""/>
                </div>
                <div>
                    posts
                    <div>
                        new post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile