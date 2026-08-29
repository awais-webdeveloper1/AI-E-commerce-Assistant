


export default function ProductCard() {
    return (
        <>
            <div className="h-auto px-20 py-10">
                <div className="pb-7">
                    <p className="text-indigo-600 text-[0.9rem] font-bold">CURATED PICKS</p>
                    <h1 className="text-3xl font-extrabold">Recommended Products</h1>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-4 gap-5">

                    {/* Card 1 */}
                    <div className="border border-gray-300 rounded-2xl overflow-hidden">
                        <img
                            src="/product-image(1).png"
                            className="w-full h-60 object-cover"
                            alt="Helix Smartwatch Pro"
                        />

                        <div className="flex flex-col px-5 py-3 gap-1">
                            <p>Helix Smartwatch Pro</p>

                            <div className="flex gap-2 items-center">
                                <h3 className="text-[#6366F1] font-bold">
                                    Rs. 4,499
                                </h3>

                                <p className="text-[0.9rem] text-gray-500 line-through">
                                    Rs. 5,999
                                </p>
                            </div>

                            <button className="flex justify-center items-center h-10 rounded-xl gap-2 mt-3 text-[#6366F1] bg-[#EEF2FF] cursor-pointer">
                                <img
                                    src="/shopping-bag.png"
                                    className="w-4 h-4 object-contain"
                                    alt=""
                                />
                                <p className="text-[0.9rem] font-bold">
                                    Add to Cart
                                </p>
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-300 rounded-2xl overflow-hidden">
                        <img
                            src="/product-image.png"
                            className="w-full h-60 object-cover"
                            alt="Helix Smartwatch Pro"
                        />

                        <div className="flex flex-col px-5 py-3 gap-1">
                            <p>Helix Smartwatch Pro</p>

                            <div className="flex gap-2 items-center">
                                <h3 className="text-[#6366F1] font-bold">
                                    Rs. 4,499
                                </h3>

                                <p className="text-[0.9rem] text-gray-500 line-through">
                                    Rs. 5,999
                                </p>
                            </div>

                            <button className="flex justify-center items-center h-10 rounded-xl gap-2 mt-3 text-[#6366F1] bg-[#EEF2FF] cursor-pointer">
                                <img
                                    src="/shopping-bag.png"
                                    className="w-4 h-4 object-contain"
                                    alt=""
                                />
                                <p className="text-[0.9rem] font-bold">
                                    Add to Cart
                                </p>
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-300 rounded-2xl overflow-hidden">
                        <img
                            src="/product-image(1).png"
                            className="w-full h-60 object-cover"
                            alt="Helix Smartwatch Pro"
                        />

                        <div className="flex flex-col px-5 py-3 gap-1">
                            <p>Helix Smartwatch Pro</p>

                            <div className="flex gap-2 items-center">
                                <h3 className="text-[#6366F1] font-bold">
                                    Rs. 4,499
                                </h3>

                                <p className="text-[0.9rem] text-gray-500 line-through">
                                    Rs. 5,999
                                </p>
                            </div>

                            <button className="flex justify-center items-center h-10 rounded-xl gap-2 mt-3 text-[#6366F1] bg-[#EEF2FF] cursor-pointer">
                                <img
                                    src="/shopping-bag.png"
                                    className="w-4 h-4 object-contain"
                                    alt=""
                                />
                                <p className="text-[0.9rem] font-bold">
                                    Add to Cart
                                </p>
                            </button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="border border-gray-300 rounded-2xl overflow-hidden">
                        <img
                            src="/product-image(1).png"
                            className="w-full h-60 object-cover"
                            alt="Helix Smartwatch Pro"
                        />

                        <div className="flex flex-col px-5 py-3 gap-1">
                            <p>Helix Smartwatch Pro</p>

                            <div className="flex gap-2 items-center">
                                <h3 className="text-[#6366F1] font-bold">
                                    Rs. 4,499
                                </h3>

                                <p className="text-[0.9rem] text-gray-500 line-through">
                                    Rs. 5,999
                                </p>
                            </div>

                            <button className="flex justify-center items-center h-10 rounded-xl gap-2 mt-3 text-[#6366F1] bg-[#EEF2FF] cursor-pointer">
                                <img
                                    src="/shopping-bag.png"
                                    className="w-4 h-4 object-contain"
                                    alt=""
                                />
                                <p className="text-[0.9rem] font-bold">
                                    Add to Cart
                                </p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}