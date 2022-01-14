import React, { Component } from 'react';
import Button from './component/button';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstOperand: '',
            secondOperand: '',
            operator: '',
            answer: ''
         }
    }

    characters = ['AC', 'DEL', '1', '2', '3', '×', '4', '5', '÷', '6', '7', '+', '8', '9', '-', '0', '=']


    handleClick = (character) => {
        if(this.state.answer){
            this.setState({
                firstOperand: '',
                secondOperand: '',
                operator: '',
                answer: ''
            })
        }
        if(character === 'AC'){
            this.setState({
                firstOperand: '',
                secondOperand: '',
                operator: '',
                answer: ''
            });
        }
        else if(character === 'DEL'){
            this.setState((prevState) => {
                if(prevState.secondOperand){
                    return {secondOperand: prevState.secondOperand.slice(0,-1)}
                } else if(prevState.operator){
                    return {operator: ''}
                } else {
                    return {firstOperand: prevState.firstOperand.slice(0,-1)}
                }
            });
        }
        else if(/[×÷+-]/.test(character)){
            this.setState({operator: character});
        }
        else if(character === '='){
            let answer = this.calculateAnswer(this.state);
            if(isNaN(answer) || answer === undefined) answer = 'syntax error';
            this.setState((prevState) => ({
                firstOperand: prevState.firstOperand + prevState.operator + prevState.secondOperand,
                operator: '',
                secondOperand: '',
                answer: answer
            }))
        }
        else if(/\d/.test(character)){
            this.setState(
                (prevState) => {
                    if(prevState.operator !== ''){ 
                        return {secondOperand: prevState.secondOperand + character}
                    }
                    else { 
                        return {firstOperand: prevState.firstOperand + character}
                    }
            })
        }       
    } 
    
    calculateAnswer({firstOperand, secondOperand, operator}){
        let answer;
        switch (operator) {//×÷+-
            case '×':
                answer = parseInt(firstOperand) * parseInt(secondOperand)
                break;
            case '÷':
                answer = parseInt(firstOperand) / parseInt(secondOperand)
                break;
            case '+':
                answer = parseInt(firstOperand) + parseInt(secondOperand)
                break;
            case '-':
                answer = parseInt(firstOperand) - parseInt(secondOperand)
                break;
        
            default:
                break;
        }
        return answer
    }

    buttons = this.characters.map(
        character => <Button key={character} character={character} onClick={this.handleClick}/>
    )

    render() { 
        return ( 
            <div id='container'>
                <div className='display'>{this.state.firstOperand}{this.state.operator}</div>
                <div className='display'>
                    {this.state.secondOperand}
                    {this.state.answer}
                </div>
                {this.buttons}
            </div>
         );
    }
}
 
export default App;