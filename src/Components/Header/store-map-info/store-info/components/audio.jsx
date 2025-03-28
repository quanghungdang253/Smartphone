import React from 'react';
import ReactHowler from 'react-howler';
import audio from '../audio/ngauhung.mp3';
function Audio(props) {
    const enableAudio = props.enableAudio;
    return (
        <div>
            <ReactHowler 
                    src={audio}
                    playing={enableAudio}
                    loop={true}

            />
        </div>
    );
}

export default Audio;