import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/authors", {
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
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <form className="w-50 mx-auto my-5" onSubmit={onSubmitHandler}>
                <h1>Add an author</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="text-danger">
                        {errors.name ? errors.name.message : ""}
                    </span>
                </div>
                <input className="btn btn-dark" type="submit" />
            </form>
        </div>
    );
};

export default AuthorForm;
