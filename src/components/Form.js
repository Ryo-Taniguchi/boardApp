import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            input: ""
        };
    }
    handleChange = e => {
        this.setState( {input: e.currentTarget.value} )
        console.log(e.currentTarget.value);
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.input)
        this.setState( {input: ""} );
    }
    // handleChange(e) {
    //     console.log(e.currentTarget.value)
    // }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input 
                    type="text" 
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button>追加</button>
            </form>

        )
    }
}
export default Form;