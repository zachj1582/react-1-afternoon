import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
        
    }

    handleChange(val){
        this.setState({userInput: val})
    }
    assignEvenAndOdds(userInput){
        let even = []
        let odd = []
        userInput.split(',').forEach(element => {
          if(element % 2 === 0){
              even.push(element)
          } else {
              odd.push(element)
          }
          this.setState({evenArray: even, oddArray: odd})
        });
    }
    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds </h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className='resultsBox'>Evens:{ JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'> Odds:{JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}