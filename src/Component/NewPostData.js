import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
    table: {
        width: "485px",
        margin: "8px"
    },
}));

const Screen1 = () => {
    const classes = useStyles();

    const initialFormDta = {
        title: "",
        postData: "",
    }
    const [formData, updateFormData] = useState(initialFormDta);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
    }

    const handleReset = () => {
        updateFormData(initialFormDta);
    }


    const validate = () => {

        if (!formData.title) {
            setErrorMsg("Title is Required");

        }
        else if (!formData.postData) {
            setErrorMsg("Post Data is Required");
        }

        else {
            setSuccess(true);
            if (true) {
                axios({
                    method: 'post',
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    data: {
                        title: formData.title,
                        postData: formData.postData
                    }
                })
                    .then(function (response) {
                        console.log("response Data : ", response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
            setSuccessMsg("Form Successfully submitted!!!");
            handleReset();
        }
    }
    return (
        <div>
            <h4>New Post Data</h4>
            <Paper style={{ width: '420px', marginLeft: "450px", marginBottom: "50px" }}>
                <div>
                    {successMsg ? <strong style={{ color: 'green' }}>{successMsg}</strong> : errorMsg ? <strong style={{ color: 'red' }}>{errorMsg}</strong> : ""}
                </div>
                <div className={classes.root}>
                    <form className={classes.root}>
                        <TextField  name="title"  label="Title" onChange={handleChange} value={formData.title} />
                        <TextField  name="postData"  label="Post Data" onChange={handleChange} value={formData.postData}/>
                        <Button variant="contained" color="primary" style={{ width: '100px' }} onClick={handleSubmit}>submit</Button>
                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default Screen1;