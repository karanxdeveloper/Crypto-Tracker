import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../Services/FetchCoinDetails";
import parse from 'html-react-parser'
import Store from "../State/Store";
import MyLoader from "../Components/PageLoader/Loader"
import CoinInfoContainer from "../Components/CoinInfo/CoinInfoContainer";

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
        return <MyLoader/>
     }
     if(isError){
        return <div>Error: Something went wrong</div>
     }

    


    return(
            <div className="flex flex-col justify-center items-center lg:flex-row p-3 gap-2 select-none">
                <div className="w-[100vw] lg:w-[33vw]  h-[90vh]  border-r items-center border-grey-400 flex flex-col">

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

                <div className="w-full lg:w-[66vw] lg:h-full"> 
                   <CoinInfoContainer coinId={coinId}/>
                </div>

            </div>

    )
}

export default CoinDetailsPage;