import React, { Component } from 'react'
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

// * imort queries
import { createUserQuery  } from "../graphql/queries";

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            courseStudying: ''
        }
    } 


    onChangeName = e => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    onChangeCourseStudying = e => {
        this.setState({
            courseStudying: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.createUserQuery({
            variables: {
                name: this.state.name,
                username: this.state.username,
                courseStudying: this.state.courseStudying
            }
        });

        this.setState({
            name: '',
            username: '',
            courseStudying: ''
        });

    }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3 style={{ textAlign: 'center', margin: '20px 20px' }} >Create User</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                className="form-control"
                                placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                required
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                className="form-control"
                                placeholder="Username" />
                        </div>


                        <div className="form-group">
                            <label>Course Studying</label>
                            <input
                                type="text"
                                required
                                value={this.state.courseStudying}
                                onChange={this.onChangeCourseStudying}
                                className="form-control"
                                placeholder="Course Studying" />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                onSubmit={this.onSubmit}
                                style={{ margin: "10px 0px" }}>
                                Submit
                            </button>
                        </div>
                    </form >
                </div>
            </React.Fragment>
        )
    }
}

export default compose(
    graphql(createUserQuery, { name: "createUserQuery"}),
)(CreateUser);