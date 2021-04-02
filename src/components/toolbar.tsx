import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type state = {
    date: Date;
}
export class Toolbar extends React.Component<{}, state> {
    constructor(props: {}) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    render() {
        return <div style={{height: '640px', width: '256px', backgroundColor: 'grey', float: 'left', color: 'white'}}>
            <form>
                <label>
                    Date:
                    <br/>
                    <DatePicker selected={this.state.date} onChange={this.setDate.bind(this)}/>
                </label>
            </form>
        </div>;
    }

    setDate(date: Date) {
        this.setState({
           date: date
        });
    }
}