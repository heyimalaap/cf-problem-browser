import React, {Component} from 'react';
import Problem from './Problem.component';
import axios from 'axios';

class Problems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            problems: null,
            isLoading: true,
            totalPages: -1,
            currentPage: -1
        };
    }

    render() {
        const problems = this.state.problems;
        if (this.state.isLoading) {
            return <div> Loading~ </div>
        } else {
            return (
                problems.slice(0, 50).map(problem => (<Problem problem={problem} />))
            );
        }
    }

    componentDidMount() {
        axios.get('https://codeforces.com/api/problemset.problems')
            .then((response) => {
                this.setState({problems: response.data.result.problems});
            }).then(() => {
                this.setState({isLoading: false, totalPages: Math.ceil(this.state.problems.length / 50), currentPage: 1});
            });
    }
}

export default Problems;
