import React from 'react';

const Post = () => {
    return (
        <div className="container row">
            <div className="col offset-m2 offset-l2 s12 m8 l8 mt-5 center">
                <div className="card input-filed z-depth-0 border-gray home-card p-5">
                    <input type="text" placeholder="title"/>
                    <input type="text" placeholder="description"/>
                    <div className="file-field input-field">
                        <div className="btn #2196f3 blue">
                            <span>Upload image</span>
                            <input type="file" multiple />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">
                        Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Post;