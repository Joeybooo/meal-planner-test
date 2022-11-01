import React from "react";

// code in return will be replaced with actual login page when availiable
function SignOut() {
    return (
        class LoggingButton extends React.Component {
            handleClick() {
              console.log("Click")
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

export default SignOut;