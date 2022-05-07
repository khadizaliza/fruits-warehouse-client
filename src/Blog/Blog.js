import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h2>Difference between Node.JS and Javascript</h2>
                <p>1. Javascript is a programming language that is used for writing scripts on the website.<br></br> 
                NodeJS is a Javascript runtime environment.<br></br>
                2.Javascript can only be run in the browsers.<br></br>
                We can run Javascript outside the browser with the help of NodeJS.<br></br>
                3. It is basically used on the client-side.<br></br>
                It is mostly used on the server-side.<br></br>

                </p>
            </div>
            <div>
                <h2>Difference between SQL and NoSQL</h2>
                <p>1. SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.<br></br> 
                2. SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. <br></br>
                3. SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). 

                </p>
            </div>
            <div>
                <h2>What is the purpose of jwt and how does it work</h2>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br></br>
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>
        </div>
    );
};

export default Blog;