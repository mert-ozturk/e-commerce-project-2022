import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import LayoutApp from './../../components/Layout.jsx';
import {Row,Col} from 'antd'
import Product from '../../components/Product.jsx';

const Home = () => {

  const [productData,setProductData] = useState([])

  useEffect(()=>{
    const getAllProducst = async () =>{
        try{

          const {data} = await axios.get('/api/products/getproducts')
          setProductData(data);
          console.log(data)

        }catch(error){
          console.log(error)
        }
    } 
    
    getAllProducst()
    
  },[])

  return (
    <LayoutApp>
      <Row>
        {productData.map(product =>(
          <Col xs={24} sm={6} md={12} lg={6}>
          <Product product={product} />
          </Col>
        ))}
       
      </Row>
    </LayoutApp>
  )
}

export default Home