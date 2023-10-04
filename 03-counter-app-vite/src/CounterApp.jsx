import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

  const handleAdd = () => {
    console.log('+1');
    value = 1000;
  }

  return (
    <>
      <h1>Counter App</h1>
      <p> {value} </p>
      <button onClick={ handleAdd }>
        +1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
