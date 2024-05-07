import { useNavigate } from "react-router-dom";


export const Result = ({ score, answered, list, text, setResult }) => {
    const navigate = useNavigate();

    const handleHome = () => {
        setResult(false);
        navigate("/")
    }

    return (
        <div className="bg-white rounded-md shadow-lg border-2 border-gray-400 text-center px-20 h-[45%] flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Quiz Summary</h1>
                <p className="text-md font-medium">{text}</p>

            </div>
            <h2 className="text-xl font-bold text-pink-500 mt-8">Your Score is : {score}</h2>
            <div className="flex flex-col gap-3 mt-12">
                <p className="text-md font-medium">You have answered {answered} out of {list.length}</p>
                <button onClick={handleHome}
                    className="mt-8 bg-black px-3 py-2 text-lg font-medium cursor-pointer text-white rounded-md text-center"
                >Home</button>
            </div>
        </div>
    )
}