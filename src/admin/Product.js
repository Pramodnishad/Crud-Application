import React, {useEffect, useState} from 'react'
import { Link, useNavigate,} from 'react-router-dom';

import Wrapper from './Wrapper'


function Products() {

const [products, setProducts] = useState([]);

const navigate = useNavigate()


    function showProduct() {
        fetch('http://localhost:5000/products')
        .then((result)=>result.json()
        .then((data)=>setProducts(data))
        )}

        function deleteProduct(id) {
            fetch(`http://localhost:5000/products/${id}`,{
                method:'DELETE',
            })
            .then((result)=>{
                result.json()})
                .then((data)=>{
                showProduct()
                console.log(data)
                })
            
        }
        const handleEdit = (itm)=>{
navigate(`/admin/products/${itm.id}/editproducts`, {state:{data:itm}})
        } 
       
        useEffect(()=>{
            showProduct()
        },[])

    return (
        <Wrapper>
            <Link to="/admin/createproducts" className="btn">Add Products</Link>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        {/* <td>Image Link</td> */}
                        <td>Image </td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((item,i)=>
                        <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        {/* <td>{item.image}</td> */}
                        <td>
                            <img src={item.image} alt=""/>
                        </td>
                        <td>
                            <button onClick={()=>{deleteProduct(item.id)}}>Delete</button> &nbsp;&nbsp;&nbsp;
                            {/* <Link to={`/admin/products/${item.id}/editproducts`}><button>Edit</button></Link> */}
                            <button onClick={()=>handleEdit(item)}>Edit</button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </Wrapper>
    )
    }

export default Products