import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
    background-color: white;
    width: 100%;
    display: inline-block;
    margin-bottom: 1.0em;
    border-radius: 10px;
    text-align: center;
    padding-top: 1.0em;
    padding-bottom: 1.0em;
`
const NavigationButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`


const Card = props => {
    const handleRightClick = () => {
        props.moveItemsToRight(props.name, props.id);
    }

    const handleLeftClick = () => {
        props.moveItemsToLeft(props.name, props.id)
    }

    return (
        <CardWrapper>
            {props.name === 'Backlog' ? '' : <NavigationButton onClick={handleLeftClick} ><i className='chevron left icon' /></NavigationButton>}
            <span>{props.content ? props.content : ''}</span>
            {props.name === 'Completed' ? '' : <NavigationButton onClick={handleRightClick}><i className='chevron right icon' /></NavigationButton>}
        </CardWrapper>
    )
};

export default Card;