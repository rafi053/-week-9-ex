import React from 'react'
import { NinjaTurtles } from '../../types/ninjaTurtles';
import Ninja from '../Ninja/Ninja';

const NinjaList: React.FC<{ninjaList: NinjaTurtles[]}> = ({ ninjaList }) => {
    return <div className="PostList">
      {ninjaList.map((ninja,idx)=>{
        return <Ninja key={idx} ninja={ninja}/>
      })}
    </div>;
  };

export default NinjaList
