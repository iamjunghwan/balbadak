const Button = ({ src, onClick }) => {
  return (
    <img
      className="Button"
      src={src}
      alt=""
      onClick={() => {
        onClick();
      }}
    />
  );
};

export default Button;
