/* eslint-disable no-const-assign */
import { useEffect, useRef, useState } from "react";
import "./GameBody.css";

const GameBody = () => {

  const [controll, setControll] = useState(true)
  const [fall, setFall] = useState(0)

  // const [replay, setReplay] = useState(0)

  const box_1 = useRef(null)
  const box_2 = useRef(null)
  const box_3 = useRef(null)
  const box_4 = useRef(null)
  const box_5 = useRef(null)
  const box_6 = useRef(null)
  const box_7 = useRef(null)
  const box_8 = useRef(null)
  const box_9 = useRef(null)

  const player = useRef(null)

  useEffect(() => {

    const boxs = document.querySelectorAll('#box')
    boxs.forEach(box => {
        
        box.addEventListener('click', (e) => {

            if (controll && box.innerText !== 'o') {
              box.innerText = 'x'
              setControll(false)
            }

            if (!controll && box.innerText !== 'x') {
              box.innerText = 'o'
              setControll(true)
            }
            
            setTimeout(() => {
              if (box.innerText !== '') {

                if (
                  box_1.current.innerText !== ''
                  && box_1.current.innerText === box_2.current.innerText 
                  && box_2.current.innerText === box_3.current.innerText
                  && box_1.current.innerText === box_3.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_1.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
  
                if (
                  box_4.current.innerText !== ''
                  && box_4.current.innerText === box_5.current.innerText 
                  && box_5.current.innerText === box_6.current.innerText
                  && box_4.current.innerText === box_6.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_4.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
  
                if (
                  box_7.current.innerText !== ''
                  && box_7.current.innerText === box_8.current.innerText 
                  && box_8.current.innerText === box_9.current.innerText
                  && box_7.current.innerText === box_9.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_7.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
  
                if (
                  box_1.current.innerText !== ''
                  && box_1.current.innerText === box_4.current.innerText 
                  && box_4.current.innerText === box_7.current.innerText
                  && box_1.current.innerText === box_7.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_1.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
  
                if (
                  box_2.current.innerText !== ''
                  && box_2.current.innerText === box_5.current.innerText 
                  && box_5.current.innerText === box_8.current.innerText
                  && box_2.current.innerText === box_8.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_2.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
  
                if (
                  box_3.current.innerText !== ''
                  && box_3.current.innerText === box_6.current.innerText 
                  && box_6.current.innerText === box_9.current.innerText
                  && box_3.current.innerText === box_9.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_3.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
  
                if (
                  box_1.current.innerText !== ''
                  && box_1.current.innerText === box_5.current.innerText 
                  && box_5.current.innerText === box_9.current.innerText
                  && box_1.current.innerText === box_9.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_1.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
  
                if (
                  box_3.current.innerText !== ''
                  && box_3.current.innerText === box_5.current.innerText 
                  && box_5.current.innerText === box_7.current.innerText
                  && box_3.current.innerText === box_7.current.innerText
                  ) {
                    setInterval(() => {
                      player.current.innerHTML = `Winner ${box_3.current.innerText} | Replayed...`
                    }, 0);
                    setTimeout(() => {
                      window.location = '/'
                    }, 3000);
                }
                
              }
              
              if(
                box_1.current.innerText !== ''&&
                box_2.current.innerText !== ''&&
                box_3.current.innerText !== ''&&
                box_4.current.innerText !== ''&&
                box_5.current.innerText !== ''&&
                box_6.current.innerText !== ''&&
                box_7.current.innerText !== ''&&
                box_8.current.innerText !== ''&&
                box_9.current.innerText !== ''
                && box_1.current.innerText !== box_2.current.innerText
                && box_2.current.innerText !== box_3.current.innerText
                && box_1.current.innerText !== box_3.current.innerText
                && box_3.current.innerText !== box_4.current.innerText
                && box_4.current.innerText !== box_5.current.innerText
                && box_5.current.innerText !== box_6.current.innerText
                && box_6.current.innerText !== box_7.current.innerText
                && box_7.current.innerText !== box_8.current.innerText
                && box_8.current.innerText !== box_9.current.innerText
              ){
                  setTimeout(() => {
                    window.location = '/'
                  }, 1000);
              }

            }, 100);

            // if (box.innerText !== box.innerText) {
            //   setInterval(() => {
            //     player.current.innerHTML = `Winner ${box_3.current.innerText} | Replayed...`
            //   }, 0);
            //   setTimeout(() => {
            //     window.location = '/'
            //   }, 3000);
            // }

        })
      
    });

    if (controll) {
      player.current.innerText = 'X'
    } else {
      player.current.innerText = 'O'
    }

    
  }, [controll])

  return (
    <>
      <div className="body-game">
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h3 ref={player}> </h3>
        </div>
        <div className="game" id="game">
          <div id="box" ref={box_1} className="box-1"> </div>
          <div id="box" ref={box_2} className="box-2"></div>
          <div id="box" ref={box_3} className="box-3"></div>
          <div id="box" ref={box_4} className="box-4"></div>
          <div id="box" ref={box_5} className="box-5"></div>
          <div id="box" ref={box_6} className="box-6"></div>
          <div id="box" ref={box_7} className="box-7"></div>
          <div id="box" ref={box_8} className="box-8"></div>
          <div id="box" ref={box_9} className="box-9"></div>
        </div>
      </div>
    </>
  );
};

export default GameBody;


