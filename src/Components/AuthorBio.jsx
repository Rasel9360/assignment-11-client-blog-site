import { useEffect, useState } from "react";
import AuthorDetails from "./AuthorDetails";

const AuthorBio = () => {
    const [author, setAuthor] = useState([])

    
    useEffect(()=>{
        fetch('../../public/author.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setAuthor(data)
        })
    },[])

    return (
        <div>
            <h1 className="text-4xl font-serif font-bold text-center mt-20">Meet Our Author</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-10/12 mx-auto mt-10">
               {
                author.map((author, i) => <AuthorDetails key={i} author={author}></AuthorDetails>)
               }
            </div>
        </div>
    );
};

export default AuthorBio;