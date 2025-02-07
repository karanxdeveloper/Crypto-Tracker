import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../Services/FetchCoinDetails";
import parse from 'html-react-parser'
import Store from "../State/Store";

function CoinDetailsPage(){

    const {currency} = Store()

    const {coinId} = useParams();

     const { isLoading, isError, data:coin } = useQuery(["coin",coinId], () => fetchCoinDetails(coinId),{
        cacheTime: 1000 * 60 * 3,
        staleTime: 1000 * 60 * 3,
     })


     useEffect(()=>{
        console.log(coin)
     },[coin])

     if(isLoading){
        console.log("loading")
        return <div>Loading</div>
     }
     if(isError){
        return <div>Error: Something went wrong</div>
     }

    


    return(
            <div className="flex p-3 gap-2 ">
                <div className="w-[33vw]  h-[90vh]  border-r items-center border-green-400 rounded-md flex flex-col">

                    <img 
                     src={coin?. image ?. large}
                      alt={coin?.name}
                      
                      className="h-[30vh] m-5  "

                      />

                      <h1
                        className=" text-3xl font-bold mb-5"
                        >
                        {coin?.name}
                      </h1>

                      <p
                       className=" h-[35vh] overflow-y-scroll px-2 text-gray-400"
                       >
                        {parse(coin?.description.en)}
                      </p>

                      <div className="flex bg-red-400flex gap-[10rem] mt-5 text-2xl ">

                            <div className=" flex gap-2 text-green-500">

                                <h2 className="">Rank:</h2>

                                <span>{coin?.market_cap_rank}</span>

                            </div>

                            <div className= " flex gap-2 text-blue-400">

                                <h2>Current Price: </h2>

                                <span>{currency == "usd" ? "$" : "₹"} {coin?.market_data.current_price[`${currency}`]}</span>

                            </div>
                      </div>
                      

                </div>

                <div>
                    <h2>second row </h2>
                </div>

            </div>

    )
}

export default CoinDetailsPage;