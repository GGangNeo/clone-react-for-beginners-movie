import { useEffect, useState } from 'react';
import style from './App.module.css';
import Button from './Button';
import Greeting from './Greeting';

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [show, setShow] = useState(false);
  const onClick = () => setCount((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onHide = () => setShow((current) => !current);
  console.log('It will keep running');

  useEffect(() => {
    console.log('It runs only once.');
  }, []);

  useEffect(() => {
    console.log('It runs when keyword changed');
  }, [keyword]);

  useEffect(() => {
    console.log('It runs when count changed');
  }, [count]);

  useEffect(() => {
    console.log('It runs when count and keyword changed');
  }, [count, keyword]);

  return (
    <div className={style.title}>
      {show ? <Greeting /> : null}
      <input value={keyword} placeholder="Search" onChange={onChange}></input>
      {show ? <h1> {count}</h1> : null}
      <Button text={'Click me'} onClick={onClick} />
      <Button text={show ? 'Hide' : 'Show'} onClick={onHide} />
    </div>
  );
}

export default App;
