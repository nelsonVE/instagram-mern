import React, { useState } from 'react';
import axios from 'axios';
import M from 'materialize-css'

const Post = () => {
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [url, setUrl] = useState("");

    const postDetails = () => {
        const data = new FormData();
        data.append("file", photo);
        data.append("upload_preset", "instamern");
        data.append("cloud_name", "dqi5onakj");

        axios.post("https://api.cloudinary.com/v1_1/dqi5onakj/image/upload", data)
            .then((res) => {
                setUrl(res.data.url);
                
                axios.post("http://localhost:5000/api/post/", {
                    description,
                    photo: url
                }, { 
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer "+localStorage.getItem("jwt")
                    }
                })
                .then((res) => {
                    if(res){
                        M.toast({html: res.data.messages, classes:'#81c784 green lighten-2'});
                    }
                })
                .catch((err) => {
                    console.log(err.request)
                })
            })
            .catch((err) => {
                //M.toast({html: JSON.parse(err.request.response).error.message, classes:'#c62828 red darken-3'});
            })

    }

    return (
        <div className="container row">
            <div className="col offset-m2 offset-l2 s12 m8 l8 mt-5 center">
                <div className="card input-filed z-depth-0 border-gray home-card p-5">
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
                    <div className="file-field input-field">
                        <div className="btn #2196f3 blue">
                            <span>Upload image</span>
                            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light #2196f3 blue" onClick={postDetails} type="submit" name="action">
                        Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Post;