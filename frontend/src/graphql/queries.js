import { gql } from "apollo-boost";

const getUsersQuery = gql`
query {
    users{
        id
        name
        username
        courseStudying
        createdAt
        updatedAt
        courses{
            id
            subject
            userId
            date
        }
    }   
}
`


const createUserQuery = gql`
    mutation AddUser($name: String!, $username: String!, $courseStudying: String!){
        addUser(name: $name, username: $username, courseStudying: $courseStudying){
            id
            name
            username
            courseStudying
        }
    }
`

const createCourseQuery = gql`
    mutation AddCourse($subject: String!, $userId: ID!){
        addCourse(subject: $subject, userId: $userId){
            id
            subject
            userId
            date
        }
    }
`


export { createUserQuery, getUsersQuery, createCourseQuery };