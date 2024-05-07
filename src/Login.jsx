import { useContext } from "react";
import { RulesComp } from "./Rulescomp";
import { useNavigate } from "react-router-dom";
import { NameContext } from "./Context";

export const Login = () => {

    const { name, setName, email, setEmail } = useContext(NameContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/quiz") //when user fill the details and click start button its navigate the page to quiz component

    }


    return (
        <div className="p-12">

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold text-center my-12">Happy Quiz</h1>
                    <input type="text"
                        placeholder="Enter Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-3 outline-none 
                    border border-gray-400 rounded-md focus:border-black placeholder:text-sm placeholder:font-medium" />
                    <input type="email"
                        placeholder="Enter Your E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-3 outline-none border 
                    border-gray-400 rounded-md focus:border-black placeholder:text-sm placeholder:font-medium" />
                    <div className="flex items-center gap-1">
                        <input type="checkbox"
                            required />
                        <span className="text-[14px]">By checking, accept the terms & and conditions.</span>
                    </div>

                    <button type="submit" className="py-2 text-center border-none text-lg font-bold bg-black text-lime-400 rounded-md">Start</button>

                    <p className="text-md font-medium text-left w-full">
                        <i className="fa-solid fa-angles-right cursor-pointer text-left mr-2"></i>Read the rules before you play</p>
                    <RulesComp />
                </div>
            </form>




        </div>
    )
}