import * as React from 'react';
import { Pressable } from 'react-native';

const CatButton = (props) =>{
    return(
    <Pressable   {...props}
    >
           {props.children}
    </Pressable>
    )
}

export default CatButton;