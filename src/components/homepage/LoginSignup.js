import React from "react";

// code in return will be replaced with actual login page when availiable
function LogInSignUp() {
    return (
        class LoggingButton extends React.Component {
            handleClick() {
              console.log('click');
            }
          
            render() {
              // This syntax ensures `this` is bound within handleClick
              return (
                <button onClick={() => this.handleClick()}>
                  Click me
                </button>
              );
            }
          }
    );
}

export default LogInSignUp()