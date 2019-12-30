import React, { Component } from 'react';
import Tabs from './components/utils/tabs/tabs';
// import SideBar from './utils/sidebar/sidebar';
import Chaos from './components/contents/chaos/chaos';
import Dashboard from './components/contents/dashboard/dashboard';
import Harmony from './components/contents/harmony/harmony';
import './App.css'

const tabs = [
    { name: 'dashboard', label: 'Dashboard' },
    { name: 'chaos', label: 'Chaos Monkey' },
    { name: 'harmony', label: 'Self Healing' },
    { name: 'another', label: 'Another' },
]

class App extends Component {
    state = {
        tabs: null,
        contents: 'dashboard',
    }

    constructor(props) {
        super(props);

        this.state = {
            tabs: tabs,
            contents: 'dashboard',
        };
    }

    switchContent = (tab) => {
      this.state.tabs.map((taba) => {
        if( taba.label === tab ) {
          this.setState({ contents: taba.name });
          return null;
        }
        return null;
      })
    }

    render() {
        const {
            state: {
              tabs,
              contents,
            }
        } = this;

        return(
            <React.Fragment>
            <Tabs switchContent={this.switchContent}>
                {tabs.map((tab) => {
                    return <div label={tab.label}></div>
                })}
            </Tabs>
            { contents === 'dashboard' ? (
                <Dashboard />
            ) : contents === 'chaos' ? (
                <Chaos />
            ) : contents === 'harmony' ? (
                <Harmony />
            ) : null }
            </React.Fragment>
        );
    }
}

export default App;