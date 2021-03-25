import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const AuthorList = (props) => {
    const [updatedList, setUpdatedList] = useState(false);
    const [authors, setAuthors] = useState([]);

    const { removeFromDom } = props;

    const deleteAuthor = (_id) => {
        axios
            .delete("http://localhost:8000/api/authors/" + _id)
            .then((res) => {
                removeFromDom(_id);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data);
                setUpdatedList(!updatedList);
            })
            .catch((err) => console.log(err));
    }, [updatedList]);

    return (
        <div className="container">
            <table className="table table-light w-50 mx-auto mt-5">
                <tbody>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                    {authors.map((author, i) => (
                        <tr key={i}>
                            <td>
                                <p className="lead">{author.name}</p>
                            </td>
                            <td>
                                <Link
                                    className="btn btn-dark mr-3"
                                    to={"/edit/" + author._id}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={(e) => {
                                        deleteAuthor(author._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorList;
