import React, { Component } from 'react'


class AddResponseForm extends Component {
    constructor(){
        super()
            this.state = {
                responded: ""
            }
    }

    componentDidMount() {
        this.props.getResponses()
    }

    render(){
        return(
            <div>
                <Form 
                    submit={inputs => this.props.createResponse(inputs)}
                    inputs={{response: ""}}
                    render={
                        formProps => <ResponseForm {
                            ...formProps
                        } {...this.state} />
                        } />
                <div>
                    <h3>Responses:</h3>
                        <div>
                            {this.props.responses.map(response => <Response {...response} /> )}
                        </div>
                </div>
            </div>
        )
    }
}

export default AddResponseForm
