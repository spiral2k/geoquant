import React, {Component} from 'react';

class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error) {
      return { hasError: true };
   }

   componentDidCatch(error, info) {
        // log the error 
   }

   render() {
     if (this.state.hasError) {
       return <h1>Something went wrong with react-grid.</h1>;
     }

     return this.props.children; 
   }
}

export default ErrorBoundary;