import React , { Component } from 'react';
import Output from './output';

class Input extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            place:"",
            submit:0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // this.api_key="AIzaSyDvoWla_tJUhFtCz9q8FP5MFVg39fXU_bE" google key;

    handleChange(e)
    {
        this.setState({place:e.target.value,submit:0});
    }

    handleSubmit(e)
    {
        // action
        e.preventDefault();
        this.setState({submit:1});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="inputform" >
                    <h2 >Enter the place here!</h2>
                    <input className="inputarea" type="text" value={this.state.place} onChange={this.handleChange}/>
                </form>
                {this.state.submit > 0 &&
                    <Output spot={this.state.place}/>
                }
            </div>
        )
    }
}

export default Input;