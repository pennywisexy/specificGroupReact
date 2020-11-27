import React from 'react';
import Data from '../data/data.json'
import ListItem from './ListItem';

const List = (props) => {
  return (
      <div  updateData={props.updateData} 
            onClick={() => { 
              props.updateData(props.objCount)
            }} 
            className={`d-flex p-2 justify-content-between w-50 ${Data.categories[0].videos[props.objCount].title.split(' ').join('')}`} 
            title={Data.categories[0].videos[props.objCount].title.split(' ').join('')}>
        <ListItem title={Data.categories[0].videos[props.objCount].title}
                  subtitle={Data.categories[0].videos[props.objCount].subtitle}
                  thumb={Data.categories[0].videos[props.objCount].thumb}
                  description={Data.categories[0].videos[props.objCount].description}
                  
        />
      </div>
  )
} 

export default List