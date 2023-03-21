import "./FooterStyle.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Golden Sunset</h1>
                    <p>Don't just get there, get there in style</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                </div>
            </div>


            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Version</a>
                    <a href="/">Changelog</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Twitter</a>
                    <a href="/">facebook</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                </div>
                <div>
                    <h4>Project</h4>
                    <a href="/">Terms of service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;