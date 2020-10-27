import React, {Component} from 'react'

class Navbar extends React.Component{
    render() {
        return (
            <nav className='app-nav'>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
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