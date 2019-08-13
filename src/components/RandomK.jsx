import React, { Component } from 'react';   
import kanjidic2 from '../kanjidic2.json';

class  RandomK extends Component {


    state = { 
       
     }
    render() { 
        const x = Math.floor(Math.random() * 13000);;

        const elem = kanjidic2.kanjidic2.character;
        return ( 
        <ul>
         {/*Object.keys(elem).map((v, i) => <li key={i}>{v} {kanjidic2.kanjidic2.character[v].literal}</li> )*/
         
         <li> {kanjidic2.kanjidic2.character[x].literal + " " + x}</li> 
         
         }

        </ul>



         );
    }
}
 
export default RandomK ;