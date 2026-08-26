"use client"

export default function Chatbot() {
    return (
        <>
            <div className="h-screen lg:h-[130vh] gap-15 bg-gray-100 pt-27 flex flex-col items-center">

                <div className="flex flex-col items-center gap-5">
                    <div>
                        <p className="text-xs text-indigo-600 font-bold">Introducing Next-Gen AI Shopping</p>
                    </div>
                    <div>
                        <h1 className=" text-[#0F172A] text-2xl md:text-3xl lg:text-5xl font-extrabold">AI E-Commerce Assistant</h1>
                    </div>
                    <div>
                        <h3 className="text-xl text-[#475569]">What are you looking for today?</h3>
                    </div>
                </div>
                <div className="lg:mb-5 h-[60%] lg:h-[90%] w-[80%] lg:w-[60%] flex flex-col items-center rounded-3xl bg-white">
                    <p>Chatbot</p>
                </div>
            </div>
        </>
    )
}

