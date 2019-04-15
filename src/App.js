import React from 'react';
import styled from 'styled-components';
import Column from './Column';

//styled components
const PageWrapper = styled.div`
    text-align: center;
    background-image: linear-gradient(to bottom, #0083B0, #00B4DB);
    height: 100vh;
`

class App extends React.Component {
    state = {
        backlog: ['BackLog Items'],
        todo: ['To Do items'],
        inprogress: ['In Progress items'],
        completed: ['Completed Items']
    }


    moveItemsToRight = (name, id) => {
        if (name === 'Backlog') {
            const filteredCards = this.state.backlog.filter((card, i) => id !== i) //new list after removing clicked card
            const clickedCard = this.state.backlog.filter((card, i) => id === i) //the clicked list to remove
            this.setState({ backlog: filteredCards, todo: [...this.state.todo, clickedCard] });
        }
        else if (name === 'To Do') {
            const filteredCards = this.state.todo.filter((card, i) => id !== i)
            const clickedCard = this.state.todo.filter((card, i) => id === i)
            this.setState({ todo: filteredCards, inprogress: [...this.state.inprogress, clickedCard] });
        }
        else if (name === 'In Progress') {
            const filteredCards = this.state.inprogress.filter((card, i) => id !== i)
            const clickedCard = this.state.inprogress.filter((card, i) => id === i)
            this.setState({ inprogress: filteredCards, completed: [...this.state.completed, clickedCard] });
        }
    }

    moveItemsToLeft = (name, id) => {
        if (name === 'To Do') {
            const filteredCards = this.state.todo.filter((card, i) => id !== i)
            const clickedCard = this.state.todo.filter((card, i) => id === i)
            this.setState({ todo: filteredCards, backlog: [...this.state.backlog, clickedCard] });
        }
        else if (name === 'In Progress') {
            const filteredCards = this.state.inprogress.filter((card, i) => id !== i)
            const clickedCard = this.state.inprogress.filter((card, i) => id === i)
            this.setState({ inprogress: filteredCards, todo: [...this.state.todo, clickedCard] });
        }
        else if (name === 'Completed') {
            const filteredCards = this.state.completed.filter((card, i) => id !== i)
            const clickedCard = this.state.completed.filter((card, i) => id === i)
            this.setState({ completed: filteredCards, inprogress: [...this.state.inprogress, clickedCard] });
        }
    }

    //updates each column with input
    renderAddedCard = (input, name) => {
        if (name === 'Backlog') {
            this.setState({ backlog: [...this.state.backlog, input] })
        }
        else if (name === 'To Do') {
            this.setState({ todo: [...this.state.todo, input] })
        }
        else if (name === 'In Progress') {
            this.setState({ inprogress: [...this.state.inprogress, input] })
        }
        else if (name === 'Completed') {
            this.setState({ completed: [...this.state.completed, input] })
        }
    }

    render() {
        return (
            <PageWrapper>
                <Column name='Backlog' addedCards={this.state.backlog} renderAddedCard={this.renderAddedCard} moveItemsToRight={this.moveItemsToRight} moveItemsToLeft={this.moveItemsToLeft} />
                <Column name='To Do' addedCards={this.state.todo} renderAddedCard={this.renderAddedCard} moveItemsToRight={this.moveItemsToRight} moveItemsToLeft={this.moveItemsToLeft} />
                <Column name='In Progress' addedCards={this.state.inprogress} renderAddedCard={this.renderAddedCard} moveItemsToRight={this.moveItemsToRight} moveItemsToLeft={this.moveItemsToLeft} />
                <Column name='Completed' addedCards={this.state.completed} renderAddedCard={this.renderAddedCard} moveItemsToRight={this.moveItemsToRight} moveItemsToLeft={this.moveItemsToLeft} />
            </PageWrapper>
        )
    }
};

export default App;  