import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state= {
    calendarFoucused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFoucused) => {
    this.setState(() => ({ calendarFoucused }))
  }
  
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." value={this.props.filters.text} onChange={(e) => {
          console.log(e.target.value);
          this.props.dispatch(setTextFilter(e.target.value));
        }} />
    
        <select value={this.props.filters.sortBy} onChange={(e) => {
          if (e.target.value === 'amount') {
            console.log(e.target.value); 
            this.props.dispatch(sortByAmount());
          } else if (e.target.value === 'date'){
            console.log(e.target.value); 
            this.props.dispatch(sortByDate());
          }
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>      
        </select>
    
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFoucused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters);