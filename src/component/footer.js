import { connect, contact, socialMedia } from "../constants/constants";
import { help } from "../constants/constants";

const Footer = () => {
    return (
        <>
        <div className="max-w-screen-xl w-90 m-auto h-[318px]  py-[50px] justify-start items-start inline-flex">
            <div className="grow shrink basis-0 pr-[50px] flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="text-secondary text-[50px] font-bold">LOGO</div>
                <div className="self-stretch text-yellow-500 text-[15px] font-normal leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </div>
            </div>
            <div className="justify-start items-start gap-[30px] flex">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <h5 className="w-44 h-7 text-zinc-800 text-lg font-bold  leading-tight">COMPANY</h5>
                    {contact.map((item) => {
                        const { id, text } = item;
                        return (<div key={id} className=" w-[153px] h-7 text-zinc-800 text-[15px] font-medium leading-tight">{text}</div>)
                    })}
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <h5 className="w-[153px] h-7 text-zinc-800 text-lg font-bold  leading-tight">HELP CENTER</h5>
                    {help.map((item) => {
                        const { id, text } = item;
                        return (<div key={id} className=" w-[153px] h-7 text-zinc-800 text-[15px] font-medium leading-tight">{text}</div>)
                    })}
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <h5 className="w-[153px] h-7 text-zinc-800 text-lg font-bold leading-tight">CONTACT INFO</h5>
                    {connect.map((item) => {
                        const { id, text } = item;
                        return (<div key={id} className=" h-7 text-zinc-800 text-[15px] font-medium leading-tight">{text}</div>)
                    })}
                    <div className="h-6 justify-start items-start gap-[30px] inline-flex">
                        {socialMedia.map((item) => {
                            const { id, media } = item;
                            return (<img src={media} alt="media" key={id} className="w-6 h-6 relative" />)
                        })}
                    </div>
                </div>
            </div>
           </div>
            <hr className=""/>
            <div className="flex mt-6">
            <div className="w-[914px] text-zinc-800 text-base font-semibold leading-tight">© 2024 @bawazir | All rights raserved</div>
            <div className="text-right"><span className="text-zinc-800 text-base font-semibold leading-tight">Created with love by </span><span className="text-zinc-800 text-base font-bold underline leading-tight">@bawazir</span></div>
            </div>
       </>
    )
}
export default Footer;