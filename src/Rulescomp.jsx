export const RulesComp = () => {
    return (
        <div className="flex flex-col gap-3 text-[14px] tracking-wide 
                    font-regular text-gray-600 mt-3 transition-all ease-in-out">
            <p>1. You will have to answer a total of <span className="text-pink-500 font-semibold">10 questions</span></p>
            <p>2. Each question will have <span className="text-pink-500 font-semibold"> 4 options</span></p>
            <p>3. For each correct answer, you will earn <span className="text-pink-500 font-semibold">2 points</span></p>
            <p>4. However, you must answer each question within <span className="text-pink-500 font-semibold">10 seconds</span> </p>
            <p>5. You may skip the questions, if you don't know the answer</p>
            <p className="text-center text-md font-bold">Good Luck :)</p>
        </div>
    )
}