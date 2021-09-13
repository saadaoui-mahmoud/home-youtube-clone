import React from 'react'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainChild(props) {
    const videoList=props.videoList
    return (
        <div >
            <div className="container">
            <div className="row" style={{marginTop:10}}>
            {
                videoList.map((item) => (
                    <div key={item.id} className="col-4" style={{marginTop:30}}>
                    <div >
                        
                                <ReactPlayer width='300px' height='150px' controls url='{item.src}' />
                                <h6 style={{marginTop:15}}>{item.title}</h6>
                                <p style={{marginTop:-10}}>{item.description}</p>
                    </div>
                    </div>
                         
                ))
            }
            </div>
        </div>
        </div>
    )
}
