import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { compose } from "recompose";

// * import queries
import { getUsersQuery } from "../graphql/queries";

class CoursesList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    listCoursesOutline = () => {
        const { loading, users } = this.props.getUsersQuery;
        if(!loading) {
            // console.log(users);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.listCoursesOutline()}
            </React.Fragment>
        );
    }
}

 class Dashboard extends Component {
    displayUser = () => {
    const { loading, users } = this.props.getUsersQuery;
        if (!loading) {
           return users.map(user => {
               return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.courseStudying}</td>
                    <td>
                        <Link to={`/courses/${user.id}`} className="btn btn-light btn-sm" >Courses Offered</Link> | <Link to={`/edit`} className="btn btn-success btn-sm" >Edit</Link> | <button className="btn btn-danger btn-sm" >Delete</button>
                    </td>
                </tr>
               );
            });
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="container" >    
                    <h3 style={{ color: 'red', margin: '20px 10px', textAlign: 'center' }} >Users List</h3>
                <div>
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Course Studying</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.displayUser()}
                        </tbody>
                    </table>
                </div>

                <div style={{marginTop: '50px' }} >
                        <CoursesList getUsersQuery={this.props.getUsersQuery} />
                </div>
            </div>
            </React.Fragment>
        )
    }
}




export default compose(
    graphql(getUsersQuery, { name: 'getUsersQuery'})
)(Dashboard);