import "./Hero.css"

const Hero = () => {
    return (
        <div className="container hero-main ">
            <div className="hero-text">
                <h6 className="hero-subtitle">welcome to cyporg</h6>
                <h4 className="hero-title"><em>Browse</em> our Popular Games here</h4>

                <div className="main-button">
                    <a href="browse.html">Browse Now</a>
                </div>
            </div>
        </div>
    )
}

export default Hero