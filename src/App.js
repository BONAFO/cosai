import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
export default function App() {
  return (
    <div>
      <HashRouter basename="/cosai">
          <Routes>
            <Route path="/cosai" element={<h1>apscjoqjwe2|1</h1>} />
            <Route
              path="/cosai/perro"
              element={
                <img src="https://www.laguiadelvaron.com/wp-content/uploads/2018/03/facebook-omnitrix7-1520172526.jpg"></img>
              }
            />
          </Routes>
      </HashRouter>
    </div>
  );
}
