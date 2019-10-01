import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

// * Importing Queries
import { getUsersQuery, createCourseQuery } from '../graphql/queries';

class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            userId: ''
        }
    }

    getUserId = () => {
        const { loading, users } = this.props.getUsersQuery;
        if (!loading) {
            return users.map(user => {
                return <option key={user.id} value={user.id}>{user.name}</option>
            });
        }
    }

    onChangeOption = e => {
        this.setState({
            userId: e.target.value
        })
    }

    onChangeSubject = e => {
        this.setState({
            subject: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

       this.props.createCourseQuery({
           variables: {
               userId: this.state.userId,
               subject: this.state.subject
           }
       });

       this.setState({
        userId: '',
        subject: ''
       });

        window.location = "/";
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3 style={{ textAlign: 'center', margin: '20px 20px' }} >Create Course</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <select
                                className="form-control"
                                required
                                value={this.state.userId}
                                onChange={this.onChangeOption}>
                                <option>Select User</option>
                                {this.getUserId()}
                            </select>
                        </div>


                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.subject}
                                onChange={this.onChangeSubject}
                                placeholder="Subject" />
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
                    </form>
                </div>    
            </React.Fragment>
        )
    }
}


export default compose(
    graphql(getUsersQuery, { name: 'getUsersQuery'}),
    graphql(createCourseQuery, { name: 'createCourseQuery'})
)(CreateCourse);