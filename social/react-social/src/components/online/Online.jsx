import "./online.css"

export default function Online({user}) {
    return (
        <li className="rightBarFriend">
        <div className="rightbarProfileImgContainer">
            <img 
            className="rightbarProfileImg" 
            src={user.profilePicture}
            alt="" />
            <span className="rightbarOline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
    )
}
