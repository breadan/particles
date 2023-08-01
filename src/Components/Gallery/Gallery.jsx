import { useEffect, useState } from "react";


function Gallery() {
    const [number, setNumber] = useState(0);

let [count, setCount] = useState(0);
let [name, setName] = useState('');


//1- did mount
//best place call Api
useEffect( () => {
    
    console.log('component did mount')

}, []);

//2- did update
useEffect( () => {
    //to know if data update or not if not didn't run method
    //if api change will call Api here else it call in did mount
    if (count === 0)
    return;
    console.log('component did update')

}, [count]);

//3- component will unmount
useEffect( () => {
    return () => {
        console.log('will unmount');
    }
}, [])

//use effect here will run with all render
useEffect( () => {
    console.log('hello with out array');
})


function increaseCount() {
setCount(Math.random());

}


    return <>


    <div className="container">
    <h2>Gallery</h2>
    <h2>{count}</h2>
    <button onClick={increaseCount} className="btn btn-info">count</button>


    </div>

    
    
    
    
    </>
}

export default Gallery;