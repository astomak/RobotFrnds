import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError === true) {
            return <h1 className="text-6xl text-extrabold text-orange-800 text-center">Oops! There was some error!!</h1>
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;