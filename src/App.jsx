//React 套件
import { useState } from "react";

//第三方套件
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

//自訂義 套件 & 元件
import "./assets/style.css";

import ProductList from "./components/ProductList";
import ProductDescription from "./components/ProductDescription";
import LoginInterface from "./components/LoginInterface";

const url = "https://ec-course-api.hexschool.io/v2";
const apiPath = "wayne0917";

function App() {
  const [products, setProducts] = useState([]);
  const [tempProduct, setTempProduct] = useState(null);

  //API 登入所需資料
  const [isAuth, setIsAuth] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //取得商品資料 API
  const getData = async () => {
    try {
      const productsResponse = await axios.get(`${url}/api/${apiPath}/products/all`);
      setProducts(productsResponse.data.products);
    } catch (error) {
        console.log(`API products error: ${error.response.data.message}`);
    }
  }

  //登入 API
  const handleSubmit =  async (e) => {
      e.preventDefault();
      try {
        const loginResponse = await axios.post(`${url}/admin/signin`, formData);
        const { token, expired } = loginResponse.data;
        console.log(loginResponse);

        document.cookie = `token=${token}; expires=${new Date(expired)};`;

        axios.defaults.headers.common.Authorization = token;

        getData();
        setIsAuth(true);

      } catch (error) {
        console.log(`API products error: ${error.response.data.message}`);
      }
    };

  //確認登入是否成功 API
  function checkLogin() {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("hexToken="))
        ?.split("=")[1];
      console.log(token);

      axios.defaults.headers.common.Authorization = token;

      const response = axios.post(`${url}/api/user/check`);
      console.log(response);
    } 
    catch (error) {
      console.log(`API products error: ${error.response.data.message}`);
    }
  }

  const handleInputChange = (e) => {
    const { value, name } = e.target
    
    setFormData(preformData => {
      return {
        ...preformData,
        [name]: value
      }
    });
  }

  return (
    <>
      {isAuth ? (
        <div className="container">
          <div className="row mt-5">
            <ProductList
              products={products}
              setTempProduct={setTempProduct}
              checkLogin={checkLogin}
            />

            <ProductDescription tempProduct={tempProduct} />
          </div>
        </div>
      ) : (
        <div className="container login">
          <LoginInterface
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </>
  );
}

export default App;
