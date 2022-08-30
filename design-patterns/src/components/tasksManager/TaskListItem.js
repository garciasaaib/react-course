import React, { Component } from 'react'
export default class TaskListItem extends Component {
    constructor(props){
        super(props.children)
        this.state
    }

    render() {
        return (
            <div className='bg-red d-flex justify-content-between align-items-center'>
                {/* <span>{this.state.name}</span> */}
                <input
                    type="checkbox"
                    // checked={this.state.completed}
                    // onChange={() => this.complete()}
                    // value={this.state.data} 
                    />
            </div>
        )
    }
}

// sobre luis colorado que pregunta sobre una sola tecnologia, que onda xD