import { useEffect } from 'react';
const Greeting = () => {
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
};

export default Greeting;
