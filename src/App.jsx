import './App.css';
import {useEffect, useState} from "react";
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from 'react-transition-group';
import AppRoutes from "./AppRoutes";

function App() {
    const [loaderVisible, setLoaderVisible] = useState(false)
    const [mode, setMode] = useState('out-in')
    const [toggle, setToggle] = useState(false)
    const [text, setText] = useState('')
    const [todoList, setTodoList] = useState([{id: 1, text: 'Сними видео'}, {id: 2, text: 'Сними про React'}, {
        id: 3,
        text: 'Сними про Redux'
    }])

    function changeHandler(e) {
        setMode(e.target.value)
    }

    const addTodo = () => {
        setTodoList([...todoList, {id: Date.now(), text}])
    }

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
                            enterActive: 'circle-show',
                            enterDone: 'circle-rotate',
                            exitActive: 'circle-hide'
                        }
                    }
                    mountOnEnter
                    unmountOnExit
                >
                    <div className="circle"></div>
                </CSSTransition>
            </div>
            <div>
                <label htmlFor="out-in">out-in</label>
                <input onChange={(e) => changeHandler(e)} id='out-in' value='out-in' name='radio' type="radio"/>
                <label htmlFor="in-out">in-out</label>
                <input onChange={(e) => changeHandler(e)} id='in-out' value='in-out' name='radio' type="radio"/>
            </div>
            <SwitchTransition mode={mode}>
                <CSSTransition
                    key={toggle}
                    timeout={500}
                    classNames='fade'
                >
                    <button onClick={() => setToggle(!toggle)}>
                        {toggle ? 'Hello world' : 'Goodbye world'}
                    </button>
                </CSSTransition>
            </SwitchTransition>
            <div>
                <input value={text} type="text" onChange={(e) => setText(e.target.value)}/>
                <button onClick={addTodo}>Добавить</button>
            </div>
            <TransitionGroup component='ul'>
                    {todoList.map(el =>
                        <CSSTransition
                            key={el.id}
                            timeout={500}
                            classNames='todo'
                        >
                            <li
                                className='todo'
                                onClick={() => setTodoList([...todoList.filter(todo => todo.id !== el.id)])}
                            >
                                {el.id}.{el.text}
                            </li>
                        </CSSTransition>
                    )}
            </TransitionGroup>
            <div>
                <AppRoutes></AppRoutes>
            </div>
        </div>
    );
}

export default App;
