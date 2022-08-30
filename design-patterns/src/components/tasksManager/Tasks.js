import React, { Component } from 'react'
import TaskRepository from './taskRepo'

export class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            completed: props.completed || false,
        }
    }

    complete() {
        // if (this.state.completed) return
        console.log(`Completing task ${this.state.name}`);
        this.setState({ completed: true });
        this.save()
    }

    save() {
        console.log(`Saving task ${this.state.name}`);
        TaskRepository.save(this.state.name)
    }
}

export class UrgentTask extends Task {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            completed: props.completed || false,
        }
    }

}