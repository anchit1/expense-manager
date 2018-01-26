import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <p> The info is : {props.info} </p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> 
        : <p>Please login to view this content.</p>
      }
    </div>
  );
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="42"/>, document.getElementById('app'));