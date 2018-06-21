import * as React from 'react';
import './Active.css';
import { Badge } from 'mdbreact';
import types from './types';

export default (props) => {
  const { active } = props;
  const badgeProps = types[active ? 'active': 'nonactive'];
  return (
    <Badge className={badgeProps.color + " without-shadow align-middle ml-2"}>
      {badgeProps.text}</Badge>
  );
};