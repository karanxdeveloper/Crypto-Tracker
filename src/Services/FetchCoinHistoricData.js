import axiosInstance from "../Helpers/axiosInstance"


export async function fetchCoinHistoricData(id,interval,days=7,currency){
    try{

        const response =  await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`)
        // console.log(response)
        return response.data

    } catch(error){
        console.log(error)
        return null
    }
}