import FooterUser from "../../user/footer";
import HeaderAdmin from "../header";


const LayoutAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
        <HeaderAdmin/>
        <main className="mb-5">{children}</main>
        <FooterUser/>
        </div>
    );
    }
export default LayoutAdmin;