import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import WishlistCard from "../Components/WishlistCard";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`)
            .then(res => {
                // console.log(res.data);
                setWishlist(res.data);
            })
            .catch(err => console.log(err))
    }, [user])

    return (
        <div className="min-h-[calc(100vh-325px)]">
            <h1 className="text-4xl text-center mt-8  font-serif font-bold"> Wishlist Blog</h1>
            <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 md:w-10/12 mx-auto">
                {
                    wishlist.map(wish => <WishlistCard 
                    key={wish._id} 
                    wish={wish}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                    ></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;