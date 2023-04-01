/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RANDOM_GREETING } from './greeting';

const Greetings = ({ greeting }) => {
  useEffect(() => {
    this.props.RANDOM_GREETING();
  }, []);

  return (
    <h1>{greeting}</h1>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting.greeting,
});

const mapDispatchToProps = (dispatch) => ({
  randomGreeting: () => dispatch(randomGreeting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greetings);
