import React , { Component } from 'react';
import Output from './output';

class Input extends Component{
    constructor()
    {
        super();
        this.state={
            place:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // this.api_key="AIzaSyDvoWla_tJUhFtCz9q8FP5MFVg39fXU_bE" google key;

    handleChange(e)
    {
        this.setState({place:e.target.value});
    }

    handleSubmit(e)
    {
        // action
        e.preventDefault();
        console.log(this.state.place);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="inputform" >
                    <h2 >Enter the place here!</h2>
                    <input className="inputarea" type="text" value={this.state.place} onChange={this.handleChange}/>
                </form>
                <Output/>
            </div>
        )
    }
}

export default Input;