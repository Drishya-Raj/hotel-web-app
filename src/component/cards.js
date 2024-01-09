import bedimage from '../assets/images/bed.png';
import user from '../assets/images/user-1.png';
import arrow from '../assets/images/scale.png';

const Card = ({ item }) => {
    const { id, image, head, place, price, day, bed, sleep, sq } = item;
    return (
    
          <div className="flex-col justify-center items-center gap-6 border-2 border-neutral-400 p-2 rounded-xl m-auto " key={id}>
            <img src={image} alt="rooms" className="block" />
            <div className="flex-col gap-5">
                <h5>{head}</h5>
                <p className="text-primary">{place}</p>
                <div className='inline-flex gap-3 items-center'>
                    <b className='text-secondary text-xl'>{price}</b>
                    <span className='text-blue'>{day}</span>
                </div>
            </div>
            <div className="inline-flex gap-6 mt-3">
                <span className="inline-flex gap-1"><img src={bedimage} alt="bed" />{bed}</span>
                <span className="inline-flex gap-1"><img src={user} alt="user" />{sleep}</span>
                <span className="inline-flex gap-1"><img src={arrow} alt="arrow" />{sq}</span>
            </div>
        </div>
    )
}
export default Card;