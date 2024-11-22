import { connect } from "react-redux";

//getting the values from store and reducer from provider
function Counter({ user, counter, increment, decrement, changeuser }) {
  return (
    <>
      <h4>{user}</h4>
      <button onClick={changeuser}>change user</button>
      <h4>Counter value: {counter}</h4>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  changeuser: () => dispatch({ type: "CHANGEUSER", payload: { user: "user" } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
