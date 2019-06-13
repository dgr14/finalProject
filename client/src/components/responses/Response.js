import React, { Component } from 'react'

class Response extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div>
                    {/* <h1>{fullName}</h1>
                    <h5>{userName}</h5> */}
                    <h1>Response Filler</h1>
                    {/* need to feed the response text to the paragraph below */}
                    <p>{Response}</p>
                </div>
            </div>
        )
    }
}

export default Response