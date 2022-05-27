import { useRef } from "react";
import "../css/InputValue.scss";

const InputValue = ({ img, type, placeHolder, alt }) => {
  return (
    <div className="Input">
      <span className="Input__Icon">
        {" "}
        <img src={img} alt={alt} />{" "}
      </span>
      <input
        className="Input__Editable"
        type={type}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputValue;
