import * as React from "react";

interface Props {
  children: React.ReactNode;
  Fallback?: React.ComponentType;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    const { children, Fallback } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      if (Fallback) {
        return <Fallback />;
      }
      return null;
    }

    return children;
  }
}

export default ErrorBoundary;