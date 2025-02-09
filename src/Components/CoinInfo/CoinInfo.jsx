import Alert from "../Alert/Alert"
import { Line } from "react-chartjs-2"
import { CategoryScale } from "chart.js"
import Chart from "chart.js/auto"
import { chartDays } from "../../Helpers/Constants"


function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {

    
    function handleDayChange(e){
            console.log(e.target.options[e.target.selectedIndex].value)
            const daySelected = e.target.options[e.target.selectedIndex].value;
            if(daySelected == 1){
                setCoinInterval("");
            }else{
                setCoinInterval("daily")
            }
            
            setDays(e.target.options[e.target.selectedIndex].value)
    }

    Chart.register(CategoryScale)

    if (!historicData) {
        return <Alert message={"no data found"} type={"error"} />
    }

    return (
        <>
            <div
                className="flex flex-col  h-full "
            >

                <div className="h-[70vh]">

                    <Line

                        data={{
                            labels: historicData.prices.map(coinPrice => {
                                let date = new Date(coinPrice[0]);
                                let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` :
                                    `${date.getHours()}:${date.getMinutes()} AM`;
                                return days === 1 ? time : date.toLocaleDateString();
                            }),
                            datasets: [
                                {
                                    label: ` price (past ${days}) Days in ${currency.toUpperCase()}`,
                                    data: historicData.prices.map(coinPrice => coinPrice[1]),
                                    pointBackgroundColor: "rgb(255, 0, 0,0.5)",
                                    pointBorderColor: "rgb(255, 0, 0)"
                                }
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            elements: {
                                point: {
                                    radius: 2
                                }
                            }

                        }}


                    />

                </div>



                <div className="flex justify-center w-full m-2">

                    <select className="select select-primary w-full max-w-xs " onChange={handleDayChange}>
                        {chartDays.map((day, index) => {
                            return (
                                <option selected={days == day.value} key={index} value={day.value}>{day.label}</option>
                            )
                        })}
                    </select>





                </div>

            </div>

        </>

    )
}

export default CoinInfo