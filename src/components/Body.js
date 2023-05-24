import RestrauntCard from "./RestrauntCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
const Body = () => {

    const [restrauntlist, setrestrauntlist] = useState([]);
    const [searchtext, setsearchtext] = useState("Type here to search");
    const [newrestro, setnewrestro] = useState([]);

    useEffect(() => {
        RestrauntList();
    }, [])
    async function RestrauntList() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7239568&lng=77.1289503&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setrestrauntlist(json?.data?.cards[2]?.data.data.cards)
        setnewrestro(json?.data?.cards[2]?.data.data.cards);
        console.log(restrauntlist);
    }
    console.log("render");

    function filterdata(restrauntlist, searchtext) {
        const data = restrauntlist.filter((e) => e.data.name.toLowerCase().includes(searchtext.toLowerCase()));
        console.log("hello" + data);
        return data;
    }

    return restrauntlist?.length === 0 ? (<section className="popular" id="popular">
        <Shimmer /></section>) : (
        <>

            <section className="popular" id="popular">
                <div className="search-box">
                    <input className="search-input" type="text" value={searchtext} onClick={(e) => setsearchtext("")} onChange={(e) => setsearchtext(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        const data = filterdata(restrauntlist, searchtext)
                        setnewrestro(data)
                    }}><i class="fas fa-search"></i></button>
                </div>
                <div className="box-container">
                    {
                    newrestro?.map((ele) => {
                        return (<RestrauntCard key={ele.data.id} {...ele.data} />)
                    })}
                </div>
            </section>


        </>

    )
}

export default Body