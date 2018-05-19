import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions/index';
import moment from 'moment';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(
            this.state.text,
            moment(this.timeInput.value).toDate()
        );
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return(
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div>
                                        <em>
                                            {
                                                moment(new Date(reminder.dueDate))
                                                .locale('pt-br')
                                                .fromNow()
                                            }
                                        </em>
                                    </div>
                                </div>
                                <div 
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}    
                                >
                                    &#x2715;
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder App
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            placeholder="I have to..."
                            onChange={e => this.setState({text: e.target.value})}
                        />
                        <input 
                            className="form-control"
                            type="datetime-local"
                            defaultValue={moment(Date.now()).format('YYYY-MM-DDTHH:mm')}
                            ref={(c) => { this.timeInput = c; }}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >
                        Add reminder
                    </button>
                </div>
                {this.renderReminders()}
                <div
                    className="btn btn-danger"
                    onClick={() => this.props.clearReminders()}
                >
                    Clear Reminders
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);