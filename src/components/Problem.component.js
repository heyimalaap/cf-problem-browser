import React, {Component} from 'react';
import '../stylesheets/Problem.component.css';
import {Container, Row, Col, Badge, Button} from 'reactstrap';

class Problem extends Component {
    render() {
        const {problem} = this.props;
        console.log(problem);
        return (
            <Container className="m-2 p-2 problem-container">
                <Row>
                    <Container>
                        <Row>
                            <Col xs="2"><Badge color="secondary">{String(problem.contestId) + problem.index}</Badge></Col>
                            <Col xs="10" md="6">{problem.name}</Col>
                            <div className="w-100 d-block d-md-none"></div>
                            <Col xs={{size: 12, offset: 0}} md={{size: 4, offset: 0}}>
                                <Row>
                                    <Col xs="6"><Button color="link"><i className="fa fa-link"></i> Go to problem</Button></Col>
                                    <Col xs="6"><Button color="link"><i className="fa fa-th-list"></i> Add to Todo</Button></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">Rating: {(problem.rating) ? problem.rating : 'Unrated'}</Col>
                            <Col xs="10">Tags: {problem.tags.map(tag => {return (<Badge color="secondary" className="mx-1">{tag}</Badge>);})}</Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default Problem;
