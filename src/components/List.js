import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
        // code here
        <>
          <ul>
            <li id="list" className='items'>
              {listx.map((list) => (<ListItems valuex = {list}/>))}
            </li>
          </ul>
          
        </>
  )
}

export default List;