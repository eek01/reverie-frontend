import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div id="content">
            <h1>Header</h1>

            
            <Outlet />
            

            <p>Footer</p>
        </div>
    );
};
// outlet is whatever u put in return for home - page specific content

export default Layout;