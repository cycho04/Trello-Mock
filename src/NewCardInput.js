import React from 'react';

//standard form
class NewCardInput extends React.Component {
    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.renderAddedCard(this.state.value, this.props.name);//updates ui with value of input
        this.setState({ value: '' }) //resets input field after submit
        this.props.handleClick(); //shows prompt for new card again.
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='ui input'>
                    <input placeholder='Enter New Item' type='text' value={this.state.value} onChange={this.handleChange} />
                </div>
                <button className='ui blue button' type='submit' value='Submit'>Add</button>
            </form>
        )
    }
};

export default NewCardInput;