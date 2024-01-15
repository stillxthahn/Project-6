import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { allReducers } from "./reducers/index.js";
import { createStore } from "redux";

const store = createStore(allReducers);
ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <Provider store={store}>
   <App />
  </Provider>
 </BrowserRouter>
);
