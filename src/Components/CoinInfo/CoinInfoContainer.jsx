import { useQuery } from "@tanstack/react-query";
import CoinInfo from "./CoinInfo";
import Store from "../../State/Store"
import { useState } from "react";
import { fetchCoinHistoricData } from "../../Services/FetchCoinHistoricData";
import MyLoader from "../PageLoader/Loader";
import Alert from "../Alert/Alert";

function CoinInfoContainer({coinId}){

    const {currency} = Store()

    const [days,setDays] = useState(7)

    const [interval,setCoinInterval] = useState("")

    const {data: historicData, isLoading, isError} = useQuery(["historicData", coinId, currency,days,interval],
    ()=>fetchCoinHistoricData(coinId,interval, days,currency),{
        cacheTime: 1000 * 60 * 3,
        staleTime: 1000 * 60 * 3,
    })

    if(isLoading){
        return <MyLoader/>
    }

    if(isError){
        return <Alert message={"Error Fetching Data"} type={"error"}/>
    }

    return(

        <CoinInfo
            
            historicData={historicData}
            setDays={setDays}
            setCoinInterval={setCoinInterval}
            days={days}
            currency={currency}
            />

    )
}

export default CoinInfoContainer;