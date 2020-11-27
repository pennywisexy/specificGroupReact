import React, {useState} from 'react';
import List from '../components/List';
import Player from '../components/Player';
import Data from '../data/data.json'

const Home = (props) => {
  const [state, setState] = useState(0)
  const func = (value) => {
    setState(value)
    return state
  }
  
  let updateData = func.bind(state)

  console.log(Data.categories[0].videos.length)
  let listItem = []

  function listItemGen() {
    for(let i=0;i<Data.categories[0].videos.length;i++){
      listItem.push(<List updateData={updateData} objCount={i}/>)
    }
    return listItem
  }
  return (
    <div className='d-flex p-2 flex-column justify-content-between'>
      <Player onClick={() =>console.log(state)} src={Data.categories[0].videos[state].sources}/>
      <div onClick={() =>console.log(state)} className="d-flex p-2 justify-content-between">
      {listItemGen()}
      </div>
    </div>
  )
} 

export default Home