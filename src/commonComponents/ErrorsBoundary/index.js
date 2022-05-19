import React from "react";

class ErrorsBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <details>
            <summary style={{ textAlign: "center" }}>
              Something went wrong, try refreshing the page
            </summary>
            <h1 style={{ textAlign: "center" }}>
              Something went wrong, try refreshing the page
            </h1>
          </details>
          <progress style={{ width: "100%" }}></progress>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorsBoundary;
