import React from 'react';

const getBundle = () =>{
    import(/* webpackChunkName: "lodash" */"lodash").then(_ =>{
        console.log('imported', _);
    })
}

export default ()=>(
    <div className="profile">
        <h1 onClick={getBundle}>Gallery</h1>
    </div> 
);