import React from 'react';

const withAuthenticate = FirstComponent =>
  class extends React.Component {
    render() {
      return <FirstComponent />;
    }
  };

export default withAuthenticate;
