import React from 'react';

const widthPic = 80;


class Card extends React.Component{
  render(){
    const { name, phone, picture } = this.props;  
    return(
      <div className="card">
        <div
          className="img-circular"
          style={{
            backgroundImage: `url('${picture}')`,
            width: widthPic,
            height: widthPic,
            borderRadius: widthPic / 2,
          }}
        />
        <h3>{name.first} {name.last}</h3>
        <p>{phone}</p>
      </div>
    );
  }
}

export default Card;