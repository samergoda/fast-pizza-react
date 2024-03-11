import { useSelector } from "react-redux";

function Username() {

 const userName = useSelector(stete=>stete.user.userName);
if(!userName) return null

 console.log(userName)
  return <div className="hidden text-sm font-semibold md:block">{userName}</div>;
}

export default Username;
