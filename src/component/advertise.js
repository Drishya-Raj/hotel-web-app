import hall from '../assets/images/hallred.png';
import Button from './button';
import Title from './title';

const Advertise = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className='flex-col pl-6'>
                <Title className={"font-bold text-3xl text-black py-2"} text="Try Hosting With Us" />
                <p>Earn extra by renting your Property</p>
                <Button buttonText="Become a Host" className={"bg-primary rounded-[40px] px-4 py-3 my-6 w-1/2"}/>
            </div>
            <img src={hall} alt="hall" className='w-2/3' />
        </div>
    )
}
export default Advertise;