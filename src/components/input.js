import React , { Component } from 'react';

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
            </div>
        )
    }
}

export default Input;