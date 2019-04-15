import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import NewCardInput from './NewCardInput';

//styled components
const OuterWrapper = styled.div`
    float: left;
    box-sizing: border-box;
    width: 23%;
    margin: 1%;
    background-color: #bdc3c7;
    border-radius: 10px;

    @media (max-width: 450px){
        float: none;
        width: 90%;
        margin: 5%;
    }
    
`
const InnerWrapper = styled.div`
    margin: 1.0em;
    text-align: left;
`
const AddNewCard = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: gray;
`


class Column extends React.Component {
    //aestheic purpose. conditionally renders input or button to add new card
    state = {
        buttonClicked: false
    }

    handleClick = () => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    }

    render() {
        return (
            <OuterWrapper>
                <InnerWrapper>
                    <h2>{this.props.name}</h2>
                    {this.props.addedCards.map((card, i) => {
                        return (
                            <Card key={i} id={i} content={card} name={this.props.name} moveItemsToRight={this.props.moveItemsToRight} moveItemsToLeft={this.props.moveItemsToLeft} />
                        )
                    })}
                    <br />
                    {this.state.buttonClicked ? <NewCardInput name={this.props.name} handleClick={this.handleClick} renderAddedCard={this.props.renderAddedCard} /> : <AddNewCard onClick={this.handleClick}>Add a card...</AddNewCard>}
                </InnerWrapper>
            </OuterWrapper>
        )
    }
}

export default Column;