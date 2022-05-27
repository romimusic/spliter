import { useState } from "react";
import Button from "../components/Button";
import InputValue from "../components/InputValue";
import Title from "../components/Title";
import "../css/Discount.scss";
import dolarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";
const discountAmount = ["5%", "10%", "15%", "25%", "50%"];

const Discount = () => {
  const [ total, setTotal ] = useState(0);
  const [ tip, setTip ] = useState(0);

  const handleChange = () => {
    
  }

  return (
    <section className="Discount">
      <div className="Discount__amount">
        <Title tittle="Bill" />
        <InputValue img={dolarIcon} type="number" placeHolder="147.5" />

        <Title tittle="Select Tip %" />

        <article className="Discount__percentage">
          {discountAmount.map((discount) => {
            return <Button key={discount} text={discount} onClik={handleChange} />;
          })}
          <input type="number" placeholder="Custom %" />
        </article>

        <Title tittle="Number of People" />
        <InputValue img={personIcon} type="number" placeHolder="5" />
      </div>

      <div className="Discount__Output">
        <div className="Output__text">
          <div>
            <Title tittle="Tip Amount" />
            <p>/ person </p>
          </div>
          <div className="Output__total">
            <img src={dolarIcon} alt="dollar" />
            <p> {tip}</p>
          </div>
        </div>
        <div className="Output__text">
          <div>
            <Title tittle="Total" />
            <p>/ person </p>
          </div>
          <div className="Output__total">
            <img src={dolarIcon} alt="dollar" />
            <p>{total}</p>
          </div>
        </div>

        <Button text="RESET" />
      </div>
    </section>
  );
};

export default Discount;
