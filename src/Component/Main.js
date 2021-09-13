import React from 'react'
import MainChild from './MainChild'

export default function Main() {
    const videoList=[
        {
            id:0,
            title:'ReactJS Tutorial - 1 - Introduction',
            description:'1 615 966 vues  22oct2018',
            src:'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'
        },
        {
            id:1,
            title:'ReactJS Tutorial - 2 - Hello World',
            description:'731 674 vues  29oct2018',
            src:'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2'
        },
        {
            id:2,
            title:'ReactJS Tutorial - 3 - Folder Structure',
            description:'1 615 451 vues  23oct2018',
            src:'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3'
        },
        {
            id:3,
            title:'ReactJS Tutorial - 4 - Components',
            description:'1 123 966 vues  22oct2018',
            src:'https://www.youtube.com/watch?v=DNYXgtZBRPE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=32'
        },
        {
            id:4,
            title:'ReactJS Tutorial - 5 - Props',
            description:'1 615 966 vues  22oct2018',
            src:'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4'
        },
        {
            id:5,
            title:'ReactJS Tutorial - 6 - State',
            description:'1 615 966 vues  22oct2018',
            src:'https://www.youtube.com/watch?v=lnV34uLEzis&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=6'
        },
        {
            id:6,
            title:'ReactJS Tutorial - 7 - Events',
            description:'6 615 966 vues  25oct2018',
            src:'https://www.youtube.com/watch?v=B6aNv8nkUSw&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=33'
        },
        {
            id:7,
            title:'ReactJS Tutorial - 8 - React Hook',
            description:'1 615 245 vues  25oct2018',
            src:'https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11'
        },
        {
            id:8,
            title:'ReactJS Tutorial - 9 - React Redux',
            description:'1 402 966 vues     22oct2018',
            src:'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8'
        },
        
    ]
    return (
        <div className="video">
            <MainChild videoList={videoList} />
        </div>
            
    )
}