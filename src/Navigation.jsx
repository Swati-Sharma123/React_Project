import { Outlet,Link} from "react-router-dom";

function Navigation()
{
return (<div>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/SignUp ">SignUp </Link></li>
<li><Link to="/SignIn">SignIn</Link></li>
<li><Link to="/AboutUs">AboutUs</Link></li>

</ul></nav>
<Outlet />
</div>)
}
export default Navigation;