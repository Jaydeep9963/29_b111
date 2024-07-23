import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
