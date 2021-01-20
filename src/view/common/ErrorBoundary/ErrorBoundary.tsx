import React from "react";
import { Typography } from "@material-ui/core";
import { ErrorBoundaryState } from "./types";
class ErrorBoundary extends React.Component<unknown, ErrorBoundaryState> {
    constructor(props: unknown) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <Typography>Opps somthing went wrong ...</Typography>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
