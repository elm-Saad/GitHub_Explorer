import React from "react"
import Loader from "./Loader"
import Userinfo from "./Userinfo"

export default function Result({loading,githubData}){
    console.log(githubData)
    return (
        <>
            {
            loading? <Loader/> : githubData?
            <Userinfo
                githubData={githubData}
            />:''

            }
        </>
    )
}
