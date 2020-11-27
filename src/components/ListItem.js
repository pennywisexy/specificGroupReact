import React from "react";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
// import Data from '../data/data.json';

const ListItem = (props) => {
  return (
    <div className="d-flex p-2 justify-content-between flex-column bg-light">
      <div><h4>{props.title}</h4></div>
      <div><h6>{props.subtitle}</h6></div>
      <div>
        <img className='w-100' src={`${props.thumb}`} alt="123" />
      </div>

<OverlayTrigger
      trigger="click"
      key='top'
      placement='top'
      overlay={
        <Popover id={`popover-positioned-top`}>
          <Popover.Title as="h3">{props.title}</Popover.Title>
          <Popover.Content>
          {props.description}
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="secondary">Show description</Button>
    </OverlayTrigger>
    </div>
  );
};

export default ListItem;
