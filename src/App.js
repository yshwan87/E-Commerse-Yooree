import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
// import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Navbar from "./components/navbar/navbar";
import Shop from "./routes/shop.component/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/products" element={Products} /> */}
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </>
  );
};

export default App;
