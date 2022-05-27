import '../css/Button.scss';

const Buttton = ({ text, onClick }) => {
  return <button className='Button' onClick={onClick}>{ text }</button>;
}

export default Buttton;