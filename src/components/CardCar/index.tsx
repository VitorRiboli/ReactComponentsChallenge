import "./styles.css";

import CarImg from "../../assets/img/car.png";

export default function CardCar() {
  return (
    <div className="dc-card">
      <div className="dc-card-control">
        <img src={CarImg} alt="Car" />
        <h3>Lorem ipsum dolor</h3>
      </div>
    </div>
  );
}
