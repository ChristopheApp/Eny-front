import React from 'react'
const CardNews = ({ title, subt, desc }) => {
    return (
        <>
            <div className={"md:w-1/4 w-full min-h-60 flex flex-col justify-between bg-opacity-40 bg-OM p-4 rounded-3xl w-28 m-4 shadow-lg"} >
                <h4 className={"text-lg font-medium my-2 "}>{title}</h4>
                <div className={"h-full flex items-center"}>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    );
}

export default CardNews
