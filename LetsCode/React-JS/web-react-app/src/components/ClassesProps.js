/* eslint-disable no-useless-constructor */
// Uso de Classes Props React - Componentes dinamicos//
import React from 'react'

class ClassesProps extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    return (
      <div ClassName="box">
        <div id="title">{this.props.title}</div>
        <div id="text">{this.props.children}</div>
        
      </div>
    )
  }
}

export default ClassesProps;