import React, { useState } from "react";
import AuthorForm from "../components/AuthorForm";
import EditAuthor from "../components/EditAuthor";
import AuthorList from "../components/AuthorList";

import { Router, Link } from "@reach/router";

const Main = () => {
    const [authors, setAuthors] = useState([]);

    const removeFromDom = (_id) => {
        setAuthors(authors.filter((author) => author._id !== _id));
    };

    return (
        <>
            <div className="container">
                <h2 className="py-3 text-center">Authors</h2>
                <div className="row justify-content-center">
                    <Link className="btn btn-dark mx-1" to="/">
                        Home
                    </Link>
                    <Link className="btn btn-dark mx-1" to="/create">
                        Add a new Author
                    </Link>
                </div>
            </div>
            <Router>
                <AuthorForm path="/create" />
                <AuthorList path="/" removeFromDom={removeFromDom} />
                <EditAuthor path="/edit/:_id" />
            </Router>
        </>
    );
};

export default Main;
