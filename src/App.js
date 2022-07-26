import style from './App.module.css';
import Button from './Button';

function App() {
  return (
    <div className={style.title}>
      <h3> Wellcome</h3>
      <Button text={'welcome'} />
      <Button text="Hi" />
    </div>
  );
}

export default App;
