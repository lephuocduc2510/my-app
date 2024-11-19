import { Divider } from "antd"
import { Footer } from "antd/es/layout/layout"



const FooterUser = () => {
    return (
        
        <Footer id="footer" className="footer position-relative light-background">
            

        {/* Copyright and Credits Section */}
        <div className="container copyright text-center mt-4">
          <Divider />
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">QuickStart</strong>
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by <a color='yellow' href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </Footer>
    )
}

export default FooterUser