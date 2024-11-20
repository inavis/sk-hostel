import React, { logErrorToMyService } from "react";

// Note

// Error boundaries do not catch errors for:
// Event handlers
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)

// USE TRY-CATCH in those scenarios

//Error boundary is usually Class component since it has "componentDidCatch"
export class ErrorBoundary extends React.Component {
  // Constructor for initializing Variables etc in a state
  // Just similar to initial line of useState
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // This method is called if any error is encountered
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  // This will render this component wherever called
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          {/* rendering gif along with error message */}
          <iframe
            src="https://giphy.com/embed/3o6ZtrFrmbFtt0Jvs4"
            width="480"
            height="271"
            style={{}}
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return this.props.children;
  }
}
