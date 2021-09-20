import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Setup from './tutorial/3-conditional-rendering/setup/3-show-hide'

function App() {
    return (
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src="" alt="profile picture"/>
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        Sarah
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        it's amazing
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
