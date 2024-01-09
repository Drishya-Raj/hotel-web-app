import hall from '../assets/images/hallred.png';
import Button from './button';
import Title from './title';

const Advertise = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className='flex-col w-[422px] h-[164px] justify-center items-start gap-[30px] inline-flex'>
                <Title className={"text-zinc-800 text-[40px] font-bold"} text="Try Hosting With Us" />
                <p className="text-zinc-800 text-base font-medium">Earn extra by renting your Property</p>
                <Button buttonText="Become a Host" className={"text-neutral-100 text-base font-medium leading-tight"} style={"w-[166px] h-[60px] p-5 bg-primary rounded-[50px] justify-center items-center inline-flex"}/>
            </div>
            <img src={hall} alt="hall" className='w-2/3' />
        </div>
    )
}
export default Advertise;