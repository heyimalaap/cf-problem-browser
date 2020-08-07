import React, {Component} from 'react';
import {Container, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import Problems from './Problems.component';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        };
    }

    render() {
        return (
            <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {this.setState({activeTab: '1'})}} >
                            Problems
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {this.setState({activeTab: '2'})}} >
                            Todo
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({active: this.state.activeTab === '3'})}
                            onClick={() => {this.setState({activeTab: '3'})}} >
                            Done
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Problems />
                    </TabPane>
                    <TabPane tabId="2">
                        Tab2 content
                    </TabPane>
                    <TabPane tabId="3">
                        Tab3 content
                    </TabPane>
                </TabContent>
            </Container>
        );
    }
}

export default Main;
