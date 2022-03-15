import "./SubscribeBox.css";

const SubscribeBox = () => {
  return (
    <div className="SubscribeBox">
      <p className="subscribe-text">
        get the latest recipease right to your inbox:
      </p>
      <form className="subscribe-form">
        <input id="email-input" type="text" placeholder="  email address" />
        <button className="subscribe-button">SUBMIT</button>
        <i className="fa-solid fa-arrow-right"></i>
      </form>
    </div>
  );
};

export default SubscribeBox;
