import { useState, useRef } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import "../css/Discount.scss";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const Discount = () => {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);

  const valueRef = useRef();
  const customPercentage = useRef();
  const personValue = useRef();

  const discountAmount = [5, 10, 15, 25, 50];

  const handleChange = (value) => {
    const amount = valueRef.current.value;
    const percentage = customPercentage.current.value
      ? customPercentage.current.value
      : value;
    const person = personValue.current.value;

    let total = parseFloat((amount * percentage) / 100).toFixed(2);
    let tip = parseFloat((amount * 0.12) / person).toFixed(2);

    setTip(tip);
    setTotal((amount - total) / person);
  };

  return (
    <section className="Discount">
      <div className="Discount__amount">
        <Title tittle="Bill" />
        <div className="Input">
          <span className="Input__Icon">
            <img src={dollarIcon} alt="Dollar" />
          </span>
          <input
            ref={valueRef}
            className="Input__Editable"
            type="number"
            placeholder="142.55"
            required
          />
        </div>

        <Title tittle="Select Tip %" />
        <article className="Discount__percentage">
          {discountAmount.map((discount) => {
            return (
              <Button
                key={discount}
                text={discount}
                onClick={() => {
                  handleChange(discount);
                }}
              />
            );
          })}
          <input ref={customPercentage} type="number" placeholder="Custom %" />
        </article>

        <Title tittle="Number of People" />
        <div className="Input">
          <span className="Input__Icon">
            <img src={personIcon} alt="Person Icon" />
          </span>
          <input
            ref={personValue}
            className="Input__Editable"
            type="number"
            placeholder="5"
            required
          />
        </div>
      </div>

      <div className="Discount__Output">
        <div className="Output__text">
          <div>
            <Title tittle="Tip Amount" />
            <p>/ person </p>
          </div>
          <div className="Output__total">
            <img src={dollarIcon} alt="dollar" />
            <p> {tip}</p>
          </div>
        </div>
        <div className="Output__text">
          <div>
            <Title tittle="Total" />
            <p>/ person </p>
          </div>
          <div className="Output__total">
            <img src={dollarIcon} alt="dollar" />
            <p>{total}</p>
          </div>
        </div>

        <Button text="RESET" />
      </div>
    </section>
  );
};

export default Discount;
