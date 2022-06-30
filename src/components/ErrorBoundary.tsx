import React from "react";
import { Text, View } from "react-native";

interface IErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<any, IErrorBoundaryState> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (!hasError) {
      return this.props.children;
    }

    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
}
