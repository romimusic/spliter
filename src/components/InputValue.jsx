import { useRef } from "react";
import Button from "../components/Button";
import Title from "../components/Title";

import "../css/InputValue.scss";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";


const InputValue = ({ img, type, placeHolder, alt }) => {
  const valueRef = useRef();
  const customPercentage = useRef();
  const personValue = useRef();

  const discountAmount = [5, 10, 15, 25, 50];

  const handleChange = () => {
    const amount = valueRef.current.value;
    const percentage = customPercentage.current.value;
    const person = personValue.current.value;

    console.log(amount, percentage, person);
  };

  return (
    <>
    
    </>
  );
};

export default InputValue;
