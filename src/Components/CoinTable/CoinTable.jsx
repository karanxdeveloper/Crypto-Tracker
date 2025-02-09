import { useState } from "react";
import { fetchCoinData } from "../../Services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
// import { CurrencyContext } from "../../Context/CurrencyContext"; **THIS IS A WAY FOR USING CONTEXT OF REACT FOR STATE MMANAGEMENT BUT USING ZUSTAND WE CAN MAKE THING MORE EASY FOR US

import Store from "../../State/Store"
import { useNavigate } from "react-router-dom";
// import MyLoader from "../PageLoader/Loader"
import MyLoader2 from "../PageLoader/SecondLoader"

function CoinTable() {

    const navigate = useNavigate();

    // const {currency} = useContext(CurrencyContext)  **THIS IS A WAY FOR USING CONTEXT OF REACT FOR STATE MMANAGEMENT BUT USING ZUSTAND WE CAN MAKE THING MORE EASY FOR US

    const {currency} = Store()

    const [page, setPage] = useState(1)

    const { data, isLoading, isError, error } = useQuery(["coins", page, currency], () => fetchCoinData(page, currency), {

        cacheTime: 1000 * 60 * 3,
        staleTime: 1000 * 60 * 3,

    })

    function handleCoinRedirect(id){
        navigate(`/details/${id}`)
    }

    if(isLoading){
        return <MyLoader2/>
    }


    

    if (isError) {
        return <div>Error: {error.message}</div>
    }


    return (
        <>
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[100vw] mx-auto md:w-[80vw]">
                <div className="w-[100%] bg-yellow-400 text-black flex gap-1 py-4 px-2 font-semibold items-center md:w-[80vw]">
                    <div className="basis-[25%]  flex justify-center items-center ">
                        coin
                    </div>
                    <div className="basis-[25%]  flex justify-center items-center ">
                        price
                    </div>
                    <div className="basis-[20%] flex justify-center items-center ">
                        24h change
                    </div>
                    <div className="basis-[25%] flex justify-center items-center ">
                        maret cap
                    </div>
                </div>

                <div className="flex flex-col w-[100vw] mx-auto md:w-[80vw]">
                    {isLoading && <div>Loading...</div>}
                    {data && data.map((coin) => {
                        return (
                            <div onClick={()=>{handleCoinRedirect(coin.id)}} key={coin.id}
                             className="w-full  cursor-pointer  text-white flex py-4 px-2 font-semibold items-center md:justify-between ">

                                <div className="flex items-center justify-start gap-3    md:basis-[25%]">


                                    <div className="w-[2.5rem] h-[2.5rem]  md:w-[5rem] md:h-[5rem]">
                                        <img src={coin.image} className="w-full h-full" loading= 'lazy' />
                                    </div>

                                    <div>
                                        <div className="text-[12px] md:text-2xl">{coin.name}</div>
                                        <div className="text-[10px] md:text-xl">{coin.symbol}</div>
                                    </div>

                                </div>

                                <div className="w-[25%] bg-green- h-[4rem] flex justify-center items-center">
                                    {`${currency == "usd" ? "$" : "₹"} ${coin.current_price}`}
                                </div>
                                <div className="w-[25%] bg-blue- h-[4rem] flex justify-center items-center">
                                    {(coin.price_change_24h).toFixed(3)}
                                </div>
                                <div className="w-[25%] bg-purple- h-[4rem] flex justify-center items-center">
                                    {coin.market_cap}
                                </div>

                            </div>


                        )
                    })}
                </div>

                <div className="flex gap-4 justify-center items-center"> 
                    <button disabled={page === 1}
                     onClick={()=>{setPage(page - 1)}}
                      className="btn btn-primary btn-white text-white text-xl">Prev</button>
                    <button
                     onClick={()=>{setPage(page + 1)}}
                      className="btn btn-secondary btn-white text-white text-xl">Next</button>
                </div>
            </div>
        </>
    )
}

export default CoinTable;