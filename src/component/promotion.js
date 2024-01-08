import Button from "./button";
import Title from "./title";
import blue from '../assets/images/Frame38.png';

const Promotion = ({className}) => {
    return (
        <div className={className}>
            <div className="flex-col max-width-screen-xl w-90 m-auto bg-white">
                <Title className={"text-secondary font-bold text-5xl w-2/3 "} text={"Discover More About Property Rental"} />
                <hr className="bg-primary w-1/4 py-1 rounded-lg my-6" />
                <p className="py-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <Button className={"bg-primary  py-5 px-8 rounded-[40px] text-white font-bold my-8"} buttonText={"Discover More"} />
            </div>
           <img src={blue} alt="pool" className="w-2/3" />
        </div>
    )
}
export default Promotion;