import './props.css';
import Props from "../Message.js/getProps";

function Home() {
  const Message = <Props ></Props>;
  console.log(Message)
  return (
    <div className="container">
      <p>{Message}</p>
    </div>
  );
}

export default Home;
