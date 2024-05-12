
const AuthorDetails = ({ author }) => {
    const { image, author_name, deg, bio } = author;
    return (
        <div>
            <div className="flex flex-col justify-center hover:scale-105 hover:border-secondary font-serif  p-6 rounded-md border-2 border-opacity-30  ">
                <img src={image} alt="author" className="w-32 h-32 mx-auto border-2 border-white shadow-xl rounded-full bg-gray-500 aspect-square" />
                <div className="space-y-4  divide-y ">
                    <div className="my-2 space-y-1 text-center">
                        <h2 className="text-xl font-semibold sm:text-2xl">{author_name}</h2>
                        <p className="px-5 text-xs sm:text-base ">{deg}</p>
                    </div>
                </div>
                <p className="text-justify">{bio.slice(0,380)}<span className="text-blue-600">......</span></p>
            </div>
        </div>
    );
};

export default AuthorDetails;