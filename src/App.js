import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Pages
import {Header, Footer} from "./components/index";
//Components
import {Home, Contact, Login, Register, Reset, Admin, Cart, OrderHistory} from "./pages/index";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductsDetails from "./components/product/productDetails/ProductsDetails";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import NotFound from "./pages/notFound/NotFound";
import Checkkout from "./pages/checkoutt/Checkkout";
import CheckkoutDetails from "./pages/checkoutt/CheckkoutDetails";
import CheckkoutSuccess from "./pages/checkoutt/CheckkoutSuccess";


function App() {

  return (
    <>
      <BrowserRouter>
       <ToastContainer />
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/reset" element={<Reset/>}/>

            <Route path="/admin/*" element={
              <AdminOnlyRoute>
                <Admin/>
              </AdminOnlyRoute>
              }
            />

            <Route path="/product-details/:id" element={<ProductsDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-details" element={<CheckkoutDetails />} />
            <Route path="/checkout" element={<Checkkout />} />
            <Route path="/checkout-success" element={<CheckkoutSuccess />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/order-details/:id" element={<OrderDetails />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
