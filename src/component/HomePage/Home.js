import Navbar from "../navbar";
import Title from "../title";
import Find from "../find";
import Tab from "../tab";
import Advertise from "../advertise";
import Card from "../cards";
import { rooms } from "../../constants/constants";
import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/playstore.png';
import blue from '../../assets/images/Frame38.png';
import Apps from "../apps";
import Promotion from "../promotion";
import Footer from "../footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="m-auto w-3/4">
                <Title className={"font-bold text-3xl mt-20 w-2/3"} text={"Find an apartment for your vacation"} />
                <p className="mt-4 w-5/12">We have several thousand apartments for every taste in every corner of the globe</p>
                <section className="bg-slate-100 p-3 my-3 border-rounded-4 ">
                    <Find />
                    <Tab className={"flex items-center justify-center rounded-[40px] bg-white m-1 w-3/4 p-1 px-3"} />
                </section>
                <Advertise />
                <Title text={"Featured Properties on our Listing"} className={"text-secondary font-bold text-3xl w-1/3 mt-10"} />
                <section className="grid grid-cols-3 gap-7">
                    {rooms.map((item) => {
                        return (<Card item={item} />)
                    })}
                </section>
                <section className="my-20">
                    <Title className={"text-black w-2/5 text-5xl font-bold"} text={'Download our Mobile App'} />
                    <p className="py-2">Available for free on these platforms</p>
                    <div className="flex gap-2">
                        <Apps image={playstore} alt={"Playstore"} text={"Play Store"} />
                        <Apps image={appstore} alt={"Appstore"} text={"App Store"} />
                    </div>
                </section>
                    <Promotion className={"flex justify-between gap-5"}/>
                    <Footer />
            </div>
           
        </>
    )
}
export default Home;