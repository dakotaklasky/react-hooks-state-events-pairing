function Header({data}){
    return(
        <div>
            <h1>{data.title}</h1>
            <div>{data.views} Views | Uploaded {data.createdAt}</div>
            <br></br>
        </div>
    )
}

export default Header;