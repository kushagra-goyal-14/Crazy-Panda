import React from "react";
// import { ShimmerPostList } from "react-shimmer-effects";



{/* <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={4} gap={30} /> */ }
const Shimmer = () => {
    const arr= new Array(12)
    for(let i=0;i<12;i++){
        arr.push(i);
    }
    return (
        <>
            <div className="shimmer-container">
                {
                arr.map((key,idx)=> {return (<Shimmercomp key={idx}/>)})}
            </div>
        </>
    );
}


const Shimmercomp = ()=>{
    return (
        <>
            <div className="shimmer-container">
                <div className="shimmer-card">
                    <div className="shimmer-img stroke animate">
                    </div>
                    <div className="shimmer-title stroke animate">
                    </div>
                    <div className="shimmer-tags stroke animate ">
                    </div>
                    <div className="shimmer-details stroke animate ">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shimmer;