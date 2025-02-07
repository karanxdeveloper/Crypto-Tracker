import { Route, Routes } from "react-router-dom";
import { lazy,Suspense } from "react"
import MainLayout from "../../pages/Layout";
import { Code } from "react-content-loader";
import MyLoader from "../PageLoader/Loader"
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorboundary";




const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"))

function Routing() {

    return (

        <CustomErrorBoundary>

        <Routes>
            <Route path="/" element={<MainLayout />} >


                <Route index element={
                    
                    <Suspense fallback={<Code/>}>

                        <Home />

                    </Suspense>

                    
                    
                    } />

                <Route path="/details/:coinId" element={
                    
                    <Suspense fallback={<MyLoader/>}>

                        <CoinDetailsPage />

                    </Suspense>
                    
                    
                    } />


            </Route>

        </Routes>

        </CustomErrorBoundary>

    )
}


export default Routing;