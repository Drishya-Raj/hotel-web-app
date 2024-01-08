const Apps = (props) => {

    const { image, alt, text } = props;

    return (
        <div className="inline-flex gap-2 items-center justify-center bg-primary rounded-xl py-4 px-14">
            <div className="min-w-1">
                <img src={image} alt={alt} />
            </div>
            <span className="text-white font-bold">{text}</span>
        </div>
    )
}
export default Apps;