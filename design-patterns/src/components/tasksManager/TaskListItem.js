import React, { Component } from 'react'

export default class TaskListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            completed: props.completed || false,
        }
    }

    complete() {
        if (!this.state.completed) {
            console.log(`Completing task ${this.state.name}`);
            this.setState({ completed: true });
            // this.save()
        }
    }

    save() {
        console.log(`Saving task ${this.name}`);
        this.taskRepository.save(this.name)
    }

    render() {
        return (
            <div className='bg-red d-flex justify-content-between align-items-center'>
                <span>{this.state.name}</span>
                <input
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={() => this.complete()}
                    value={this.state.data} />
            </div>
        )
    }
}
