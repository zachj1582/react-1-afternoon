import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super()

        this.state = {
            numbers: ['seven', 'twelve', 'thirteen', 'twenty one', 'one hundred forty two', 'two', 'eighteen', 'nineteen'],
            userInput: '',
            filterednumbers: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterNumbers(userInput){
        let numbers = this.state.numbers;
    let filteredNumbers = [];

    for ( let i = 0; i < numbers.length; i++ ) {
      if ( numbers[i].includes(userInput) ) {
        filteredNumbers.push(numbers[i]);
      }
    }

    this.setState({ filteredNumbers: filteredNumbers });
    }


    render(){
        return (
            <div className='puzzleBox filterStringsPB'>
                <h4>Filter String</h4>
                <span className='puzzleText' > Numbers: {JSON.stringify(this.state.numbers, null, 10)} </span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} ></input>
                <button className='confirmationButton' onClick={()=> this.filterNumbers(this.state.userInput)} >Filter</button>
                <span className='resultsBox filtersStringsRB' > Numbers: {JSON.stringify(this.state.filterednumbers, null, 10)} </span>
            </div>
        )
    }
}