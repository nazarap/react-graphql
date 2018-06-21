import * as React from 'react';
import { CardImage } from 'mdbreact';

export default ({ alt }) => {
  const from = 1;
  const to = 4;
  const randomImage = Math.floor(Math.random() * to) + from;

  return (
    <CardImage className="img-fluid"
               src={require(`./../../assets/images/users${randomImage}.jpg`)}
               alt={alt}
               waves={true}/>
  );
};