import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList.js'

const Area = (props) => (

  <div className='area' id={ props.details.name }>
    <h3 className='labels'>{ props.details.name }</h3>

    {
      <HostList 
        hosts={ props.hosts }
        selectedHost={ props.selectedHost }
        setSelectedHost={ props.setSelectedHost }
      />
    }

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
