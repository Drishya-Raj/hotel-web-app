
import search from '../assets/images/shape.png';
import { tabItems } from '../constants/constants';

const Tab = ({className}) => {

    return (
        <div className={className}>
            {tabItems.map((item) => {
                const { id, head, text } = item;
                return (
                    <div key={id} className="flex justify-between w-80 p-3 border-r-2  border-zinc-400 ">
                        <div className="flex-col">
                            <p>{head}</p>
                            <span className="text-primary gap-10">{text}</span>
                        </div>
                    </div>
                )
            })}
           <div className="bg-primary p-5 rounded-full ml-3">
            <img src={search} alt="search"/>
           </div>
        </div>
    )
}
export default Tab;