import './App.css';
import {useEffect, useState} from "react";
import {Transition,CSSTransition} from 'react-transition-group';

function App() {
    const [loaderVisible, setLoaderVisible] = useState(false)

    return (
        <div className="App">
            <button onClick={() => {
                setLoaderVisible(!loaderVisible)
            }}>{loaderVisible ? 'hide' : 'show'}
            </button>
            <div className="wrap">
              <CSSTransition
                  in={loaderVisible}
                  timeout={500}
                  classNames={
                      {
                          enterActive:'circle-show',
                          enterDone:'circle-rotate',
                          exitActive:'circle-hide'
                      }
                  }
                  mountOnEnter
                  unmountOnExit
              >
                  <div className="circle"></div>
              </CSSTransition>
            </div>
        </div>
    );
}

export default App;
