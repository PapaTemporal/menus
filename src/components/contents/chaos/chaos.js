import React, { Component } from 'react';
import Sidebar from '../../utils/sidebar/sidebar'
import RenderGreeting from '../../contents/greetings/greeting'

class Chaos extends Component {

    state = {
        content: "home",
    }

    constructor(props) {
        super(props);

        this.state = {
            content: "home",
        };
    }

    changeContent = (e, item) => {
        this.setState({ content: item.name });
        console.log(e);
    }

    items = [
        { name: 'home', label: 'Home' },
        { name: 'experiments', label: 'Experiments', items: [
            {name: 'create_exp', label: 'Create Experiment', onClick: this.changeContent },
            {name: 'view_edit_exp', label: 'View/Edit Experiment', onClick: this.changeContent },
        ] },
        { name: 'trials', label: 'Trials', items: [
            {name: 'create_trial', label: 'Create Trial', onClick: this.changeContent },
            {name: 'view_edit_trial', label: 'View/Edit Trial', onClick: this.changeContent },
        ] },
        { name: 'schedule', label: 'Schedule', items: [
            {name: 'create_sch', label: 'Create Schedule', onClick: this.changeContent },
            {name: 'view_edit_sch', label: 'View/Edit Schedule', onClick: this.changeContent },
        ] },
    ]

    render() {
        const {
            state: {
                content,
            }
        } = this;

        console.log(this.items);

        return (
            <div className="chaos-content content">
                <Sidebar items={this.items}  />
                <RenderGreeting name="Abi" greeting="Hello" path={content} />
            </div>
        )
    }
}

export default Chaos;