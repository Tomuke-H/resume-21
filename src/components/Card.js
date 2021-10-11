import React from "react";

const Card = (props) => {
  return (
    <div style={{...styles.container, flex: props.flex}}>
      <h1 style={styles.header}>{props.header}</h1>
      {props.children}
    </div>
  )
}

const styles = {
  container: {
    margin: '10px',
    padding: '12px',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
  },
  header : {
    color: '#444'
  }
}

export default Card;