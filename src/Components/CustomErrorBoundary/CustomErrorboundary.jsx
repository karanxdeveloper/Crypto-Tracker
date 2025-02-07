import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI({error, resetErrorBoundary}){
    return(
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">

        <div role="alert" className="alert alert-error w-[40%] text-xl text- ">
            <p>something went wrong...</p>
            <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
        </div>
    )
}

export default function CustomErrorBoundary({children}){
    return(
        <ErrorBoundary
        
        FallbackComponent={CustomErrorBoundaryUI}
        onReset={()=> window.location.reload}

        >

            {children}
        </ErrorBoundary>
    )
}