const CardUser=({el})=>{
    return(
        <div>
            <h3>{el.name}</h3>
            <h4>{el.address.geo.lat}</h4>
        </div>
    )
}

export default CardUser