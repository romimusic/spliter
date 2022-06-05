import { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import "../css/Discount.scss";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const Discount = () => {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [billValue, setBillValue] = useState('0');
  const [people, setPeople] = useState(1);
  const [customDiscount , setCustomDiscount] = useState('0');

  const discountAmount = [5, 10, 15, 25, 50];


  const handleChange = (valueName, value) => {

    if ( valueName === 'billValue' ) {
      setBillValue(parseInt(value));
    } else if ( valueName === 'people' ) {
      setPeople(parseInt(value));
    } else if ( valueName === 'customDiscount' || valueName === '') {
      setCustomDiscount(parseInt(value));
    }

    let total = billValue - (billValue * customDiscount) / 100;
    setTotal(parseFloat(total / people).toFixed(2));
    setTip(parseFloat((total * .12) / people).toFixed(2));
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
            onChange={(e) => { handleChange(e.target.name, e.target.value)}}
            className="Input__Editable"
            type="number"
            placeholder="142.55"
            value={billValue}
            name="billValue"
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
                  handleChange("", discount);
                }}
              />
            );
          })}
          <input
            type="number"
            className="Discount__custom"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Custom %"
            value={customDiscount}
            name="customDiscount"
          />
        </article>

        <Title tittle="Number of People" />
        <div className="Input">
          <span className="Input__Icon">
            <img src={personIcon} alt="Person Icon" />
          </span>
          <input
            className="Input__Editable"
            type="number"
            placeholder="5"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={people}
            name="people"
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
