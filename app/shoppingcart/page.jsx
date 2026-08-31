



export default function ShopingCart(){
    return(
        <>
        <div className="pt-30 px-20  h-screen  bg-amber-300">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <p>Review your selected products and checkout</p>

            <div className=" flex gap-5">
                <div className="w-[55%] bg-amber-500">
                    <h1 className="">Selected Products</h1>
                    <div>
                        
                    </div>
                </div>
                <div className="w-[45%] bg-amber-50">
                    <h1>Order Summary</h1>
                </div>
            </div>
        </div>
        
            
        </>
    )
}