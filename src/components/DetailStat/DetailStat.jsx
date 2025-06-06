const DetailStat = ({stat, color}) => {
    return (
        <div className="my-1">
            <span style={{ paddingInline: `${stat / 2}px`,}} 
                className={String.raw`mx-2 border-2 ${color} rounded-md sm:px-2 md:px-4`}
            ></span>
        </div>
    )
}

export default DetailStat