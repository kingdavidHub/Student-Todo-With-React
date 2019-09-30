// ! 1. username stores the student id data Just like the author
// ! 2. courses attending stores the users course they need to attend plus the time 
const graphql = require('graphql');
const User = require('../models/user.schema');
const Course = require('../models/courses.schema');
const _ = require('lodash');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

// * Dummy User 
const user = [
    { id: "1", name: "Kingdavid Igbayilola", username: "kingdavid", courseStudying: "Computer Science" }
];

const courses = [
    {id: "1", subject: "FSF 1", userId: "1", date: "25-04-19"}
];


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        courseStudying: { type: GraphQLString },
        courses: {  // * Graphqllist returns all list
            type: new GraphQLList(CourseType),
            resolve: (parent, args) => {
                // ? Courses offered by the user
                return Course.find({ userId: parent.id });
            }
        }
    })
});

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLID },
        subject: { type: GraphQLString },
        userId: { type: GraphQLID },
        date: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: (parent, args) => {
                return User.findById(parent.userId);
            }
        }
    })
});


// ?when i am through with it add user profile page with the age year entered school e.t.c
// ! since i am creating a student todo app i will need a difftent query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID} },
            resolve: (parent, args) => {
                return User.findById(args.id);
            }
        },
        course: {
            type: CourseType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Course.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve: (parent, args) => {
                return User.find({});
            }
        },
        courses: {
            type: new GraphQLList(CourseType),
            resolve: (parent, args) => {
                return Course.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                username: { type: GraphQLString },
                courseStudying: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                let user = new User({
                    name: args.name,
                    username: args.username,
                    courseStudying: args.courseStudying
                });

                return user.save();
            }
        },
        addCourse: {
            type: CourseType,
            args: {
                subject: { type: GraphQLString },
                userId: { type: GraphQLID },
                },
                resolve: (parent, args) => {
                    let course = new Courses({
                        subject: args.subject,
                        userId: args.userId,
                        date: new Date().toISOString()
                    });
    
                    return course.save();
                }
            }
    }
});



module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});