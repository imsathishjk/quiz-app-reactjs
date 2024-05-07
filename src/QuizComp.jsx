import { useContext, useState } from "react"
import { NameContext } from "./Context"
import { Result } from "./ResultModal";
export const QuizComp = () => {
    const { list, name, result, setResult } = useContext(NameContext); //destructured the elements from name context
    const [index, setIndex] = useState(0); // set index for moving another question using next or prev button
    const [question, setQuestion] = useState(list[index]);//pass the index through this question variable. it helps to get each que and answer
    const [score, setScore] = useState(0); //score for result component
    const [explanation, setExplanation] = useState(false);//giving explanation while user click the answer even it is right/wrong
    const [answered, setAnswered] = useState(0);//here i get how many questions users have answer
    const [focus, setFocus] = useState(null)// used to focus the element to show the user what element was picked by them
    const [text, setText] = useState("");//setting text for set of scores between 0 - 10


    const handleCheck = (e, i) => {
        //here check the answer
        if (question.answer === e.target.textContent) {
            setScore(score + 1);
            setExplanation(true)
            setAnswered(answered + 1);
            setFocus(i) //here getting index of option element for focusing purpose

        } else {
            setExplanation(true)
            setAnswered(answered + 1);
            setFocus(i)
        }
        if(score === 0){//setting text content based on scores
            setText("Poor Game!")
        }
        else if (score <= 5) {
            setText("You Need Pratice to Score High!")
        }else if(score>5 && score <=8){
            setText("Well Played !")
        }else{
            setText("Fantastic !")
        }
    }
    const handleNext = (index) => {
        //getting index and set to move next que while click next button
        setFocus(null)
        setExplanation(false)
        setIndex(index + 1);
        setQuestion(list[index + 1]);
        if (index + 1 === 10) {
            setIndex(0);
            setQuestion(list[0])
        }

    }
    const handlePrev = (index) => {
        //getting index and set to move prev que while click prev button
        setExplanation(false)
        setIndex(index - 1);
        setQuestion(list[index - 1]);
        if (index <= 0) {
            setIndex(9);
            setQuestion(list[9]);
        }
    }

    return (
        <>
            {
                result ? <Result score={score} answered={answered} list={list} text={text} setResult={setResult}/> : <div className="flex flex-col gap-12 p-8 md:p-20 w-full">
                    <div className="flex flex-col gap-8 bg-white w-full px-4 py-12 shadow-xl rounded-sm">
                        <h1 className="text-2xl font-bold">Hey, {name}</h1>
                        <h1 className="text-lg text-md md:md:text-xl font-semibold">{index + 1}.{question.Ques}</h1>
                        <ul className="flex flex-col gap-5">
                            {
                                question.Options.map((item, index) => {
                                    return <li key={index}
                                        onClick={(e) => handleCheck(e, index)}
                                        className={focus === index ? "bg-yellow-100 text-pink-500 border border-gray-300  py-3 cursor-pointer rounded-md text-md md:text-lg font-medium px-4 transition-all" : "text-black border border-gray-600 py-3 cursor-pointer rounded-md text-md md:text-lg font-medium px-4 transition-all"}>{item}</li>
                                })
                            }
                        </ul>
                        {explanation ? <p className="text-sm font-bold text-red-500 text-wrap transition-all duration-300 ml-2"><span className="text-md font-bold text-black">Explanation:</span> {question.explanation}</p> : ""}
                        <div className="w-full flex gap-20 justify-center items-center">
                            <button onClick={() => handlePrev(index)}
                                className="bg-black w-3 h-3 flex justify-center items-center border-none font-medium rounded-full"><i className="fa-solid fa-circle-chevron-left text-lime-300 text-3xl"></i></button>
                            <p className="text-lg font-semibold">{index + 1} Of {list.length}</p>
                            <button onClick={() => handleNext(index)} className="bg-black w-3 h-3 flex justify-center items-center border-none font-medium rounded-full"><i className="fa-solid fa-circle-chevron-right text-lime-300 text-3xl"></i></button>
                        </div>
                        <button className="py-3 px-4 bg-black text-white text-lg font-medium cursor-pointer border transition-all duration-400 hover:bg-transparent hover:text-black hover:border hover:border-black" onClick={() => setResult(true)}>Submit</button>
                    </div>
                </div>
            }
        </>
    )
}