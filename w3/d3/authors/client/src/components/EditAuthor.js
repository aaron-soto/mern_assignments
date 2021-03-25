import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const EditAuthor = (props) => {
    const [name, setName] = useState("");
    const [badGet, setBadGet] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${props._id}`)
            .then((res) => {
                setName(res.data.name);
                console.log(res.data);
            })
            .catch((err) => {
                setBadGet(true);
                console.log(err);
            });
        console.log("when does this run?", props._id);
    }, [props._id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/${props._id}`, {
                name,
            })
            .then((res) => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
                console.log(res);
            })
            .catch((err) => {
                console.log("Bad Get!");
            });
    };

    return (
        <div className="container">
            {!badGet ? (
                <form className="w-50 mx-auto mt-5" onSubmit={onSubmitHandler}>
                    <h1>Edit Author</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            step="0.01"
                            value={name}
                        />
                        <span className="text-danger">
                            {errors.name ? errors.name.message : ""}
                        </span>
                    </div>
                    <div className="d-flex">
                        <Link className="btn btn-dark mr-2" to="/">
                            Cancel
                        </Link>
                        <input className="btn btn-dark" type="submit" />
                    </div>
                </form>
            ) : (
                <div className="d-flex flex-column mt-5">
                    <h2 className="w-50 text-center mx-auto">
                        Author does not exist, Would you like to add an author?
                    </h2>
                    <Link className="btn btn-dark mx-auto" to="/create">
                        Sure!
                    </Link>
                </div>
            )}
        </div>
    );
};

export default EditAuthor;
