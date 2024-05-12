import { useEffect, useState } from "react";
import AuthorDetails from "./AuthorDetails";

const AuthorBio = () => {
    const [author, setAuthor] = useState([])


    useEffect(() => {
        fetch('../../public/author.json')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setAuthor(data)
            })
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-serif font-bold text-center mt-20">Meet Our Author</h1>
            <p className="md:w-1/2 text-center font-sans text-[18px] mt-3 mx-auto">"Meet Our Author" is a common feature on websites and blogs that provides visitors with a brief introduction to the person or group behind the content. This section typically includes a short description of the author's background, experience, expertise, and interests.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-11/12 md:w-10/12 mx-auto mt-16">
                {
                    author.map((author, i) => <AuthorDetails key={i} author={author}></AuthorDetails>)
                }
            </div>
        </div>
    );
};

export default AuthorBio;