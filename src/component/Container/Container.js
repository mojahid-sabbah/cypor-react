import "./Container.css";
const Container = (props) => {
  return (
    <div className="container ">

      <div className="main-container">
        {props.children}

      </div>
    </div>
  )
}

export default Container