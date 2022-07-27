import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './router/Home';
import Detail from './router/Detail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// V5.3.0
// <Router>
//   <Switch>
//     <Route path="/movie">
//       <Detail />
//     </Route>
//     <Route path="/">
//       <Home />
//     </Route>
//   </Switch>
// </Router>;
