import React, { useState } from 'react';
import {fetchNewPostsData } from "../Action/newpost";
import {connect } from "react-redux";
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

const Screen1 = ({postsData,fetchNewPostsData}) => {
    const classes = useStyles();

    const initialFormDta = {
        title: "",
        postData: "",
    }
    const [formData, updateFormData] = useState(initialFormDta);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // validate();
        fetchNewPostsData({
            title:formData.title,
            postData: formData.postData
        });
        handleReset();

    }

    const handleReset = () => {
        updateFormData(initialFormDta);
    }

    return (
        <div>
            <h4>New Post Data</h4>
            <Paper style={{ width: '420px', marginLeft: "450px", marginBottom: "50px" }}>
                {/* <div>
                    {successMsg ? <strong style={{ color: 'green' }}>{successMsg}</strong> : errorMsg ? <strong style={{ color: 'red' }}>{errorMsg}</strong> : ""}
                </div> */}
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

const mapStateToProps = (state) => {
    return {
      postsData: state.posts,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewPostsData: (formData) => dispatch(fetchNewPostsData(formData)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Screen1);