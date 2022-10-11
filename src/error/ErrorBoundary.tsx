import React from "react";
import { Navigate } from "react-router-dom";

export class ErrorBoundary extends React.Component<any, any> {
  state = { error: null, errorInfo: null };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <Navigate to="/page-not-found"/>
    }

    return this.props.children;
  }
}