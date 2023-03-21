import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateProduct from './admin/CreateProduct';
import EditProduct from './admin/EditProduct';
import Product from './admin/Product';
// import Main from './main/Main';
import Login from './Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/admin/products" element={<Product />}/>
            <Route path="/admin/createproducts" element={<CreateProduct/>} />
            <Route path="/admin/products/:id/editproducts" element={<EditProduct/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
