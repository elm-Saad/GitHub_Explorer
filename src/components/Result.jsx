import React from "react"
import Loader from "./Loader"
import Userinfo from "./Userinfo"
import Defaultsearch from "./DefaultSearch"
export default function Result({loading,githubData}){
    console.log(githubData.length)
    return (
        <>
            {
            loading ?
            <Loader/> :
            (
                (githubData.length != 0)?
                    <Userinfo githubData={githubData}/>:
                    <Defaultsearch />
            )

            }
        </>
    )
}
