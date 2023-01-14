/* eslint-disable no-unused-vars */
import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addproduct } from "../../Redux/reducer/action/productactions";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { async } from "@firebase/util";
export default function AddProduct() {
  const auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [productTitle, setproductTitle] = useState();
  let [productDescription, setproductDescription] = useState();
  let [loading, setloading] = useState(false);
  let [errors, seterrors] = useState();
  let [brand, setbrand] = useState();
  let [price, setprice] = useState();
  let [catagery, setcatagery] = useState();
  let [images, setimages] = useState([]);
  let [instock, setinstock] = useState();
  let [discount, setDiscount] = useState();
  let [addp, setaddp] = useState();
  const [fileprogress, setfileprogress] = useState();
  const [preview, setpreview] = useState(null);
  fetch("http://localhost:5000/product")
    .then((res) => res.json())
    .then((data) => setaddp(data.data));
  let handlechange = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const formData = {
        productTitle,
        productDescription,
        images,
        price,
        catagery,
        instock,
        brand,
        discount,
      };
      dispatch(addproduct(formData, navigate));
    } catch (error) {
      console.log(error.response.data.message);
      seterrors(error.response.data.message);

      setloading(false);
    }
  };
  useEffect(() => {
    handlechange();
    if (!auth.isAuthenticated) {
      navigate("/login");
    }
  }, []);
  if (loading) {
    <h1>loading....</h1>;
  }
  if (errors == "Product Created Sucessfully") {
    navigate("/");
  }
  const handleupload = (e) => {
    const file = e.target.files[0];
    setpreview(URL.createObjectURL(file));
    const storage_ = ref(storage, "images" + "/" + file.name);
    const percentage = uploadBytesResumable(storage_, file);
    percentage.on(
      "state_change",
      (bytes) => {
        console.log((bytes.bytesTransferred / bytes.totalBytes) * 100);
        setfileprogress((bytes.bytesTransferred / bytes.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        try {
          const url = await getDownloadURL(storage_);
          setimages([url]);
        } catch (error) {
          console.log(error);
        }
      }
    );
  };
  return (
    <div className="Login" id="add">
      <form onSubmit={handlechange}>
        <Alert severity="error">{errors}</Alert>
        <h2>Add Product</h2>

        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Product Title"
          variant="outlined"
          onChange={(e) => setproductTitle(e.target.value)}
        />
        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Product Description"
          variant="outlined"
          onChange={(e) => setproductDescription(e.target.value)}
        />
        <input type="file" onChange={handleupload}></input>
        {preview && <img src={preview} />}
        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Image"
          variant="outlined"
          type="url"
          onChange={(e) => setimages(e.target.value)}
        />
        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Price"
          type="number"
          variant="outlined"
          onChange={(e) => setprice(e.target.value)}
        />
        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Catagory"
          variant="outlined"
          onChange={(e) => setcatagery(e.target.value)}
        />
        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Brand"
          variant="outlined"
          onChange={(e) => setbrand(e.target.value)}
        />
        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Stock"
          type="number"
          variant="outlined"
          onChange={(e) => setinstock(e.target.value)}
        />
        <TextField
          sx={{ mt: 2, width: 370 }}
          id="outlined-basic"
          label="Discount"
          variant="outlined"
          onChange={(e) => setDiscount(e.target.value)}
        />
        <Button sx={{ mt: 1 }} variant="contained" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
}
