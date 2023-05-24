import IMG from "../constants"

const RestrauntCard = ({ name, area, avgRating, cuisines, cloudinaryImageId, costForTwoString, lastMileTravelString }) => {
    { cuisines.length > 5 ? cuisines.length = 5 : cuisines = cuisines }
    return (
        <>
            <div className="box">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
                <h3>{name}</h3>

                <div className="price"> {cuisines.join()} </div>
                <span>
                    <h2 className={Number(avgRating) >= 3.5 ? "green" : "red"}>{avgRating}</h2>
                    <h3>•</h3><h3>{lastMileTravelString}</h3><h3>•</h3><h3>{costForTwoString}</h3>

                </span>

            </div>
        </>
    )
}

export default RestrauntCard