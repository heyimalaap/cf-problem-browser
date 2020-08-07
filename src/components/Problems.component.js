import React, {Component} from 'react';
import axios from 'axios';

class Problems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            problems: null,
            isLoading: true
        };
    }

    render() {
        const problems = this.state.problems;
        if (this.state.isLoading) {
            return <div> Loading~ </div>
        } else {
            return (
                problems.map(problem => (<div>{problem.name}</div>))
            );
        }
    }

    componentDidMount() {
        axios.get('https://codeforces.com/api/problemset.problems')
            .then((response) => {
                this.setState({problems: response.data.result.problems});
            }).then(() => {
                this.setState({isLoading: false});
            });
    }
}

export default Problems;
