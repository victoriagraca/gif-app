import React, { Fragment } from 'react';
import SelectedGif from './SelectedGif';
import GifLists from './GifLists';
import Gif from './Gif';


const gifs = [
    'https://media.giphy.com/media/ckJF143W1gBS8Hk833/giphy.gif',
    'https://media.giphy.com/media/ckJF143W1gBS8Hk833/giphy.gif',
    'https://media.giphy.com/media/ckJF143W1gBS8Hk833/giphy.gif',
    'https://media.giphy.com/media/ckJF143W1gBS8Hk833/giphy.gif'

]
const App = () => {
    return (
        <Fragment>
            <SelectedGif />
            <GifLists />
            <Gif />
        
        </Fragment>
   );
};

export default App ;
