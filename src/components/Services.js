import React from 'react';

class Services extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 'first content',
         data1: 'second content'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({
          data: "this is the new contnet....",
          data1: "alternate content...!"
      })
   }

   render() {
      return (
         <div>
            <button onClick = {this.updateState}>CLICK</button>
            <h2>{this.state.data}</h2>
            <h4>{this.state.data1}</h4>
         </div>
      );
   }
}


export default Services;
