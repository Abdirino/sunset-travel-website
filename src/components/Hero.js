import "./HeroStyle.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroIMG" src={props.heroImage} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
