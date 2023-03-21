import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams} from 'react-router-dom';

import Wrapper from './Wrapper'


function EditProduct() {
    
    const location = useLocation()
    const [data,setData] = useState([]);
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const navigate = useNavigate();

    const locationData = location?.state?.data
    const param = useParams()
    console.warn("param",param?.id)
    console.log('locationData',locationData)

    
    function updateData(id) {
        let object = {
            "title": title || locationData?.title,
            "image": image ||  locationData?.image
        }

        fetch(`http://localhost:5000/products/${id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(object)
        }).then((result)=>{
            result.json()
            .then((data)=>{
                console.log(data)
                navigate(-1)
            }
            )
        })
    }
  
//     useEffect(()=>{
// fetch(`http://localhost:5000/products/`)
// .then((result)=>{
//     result.json().then((data)=>
//     setData((data)))
//     updateData()
// })
//     },[])
       
    return (
        <Wrapper>
            <form onSubmit={(e)=>{ 
                e.stopPropagation()
                updateData(param?.id)}}>
           
            <input type="text" defaultValue={locationData?.title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" defaultValue={locationData?.image} onChange={(e)=>setImage(e.target.value)} />
            <button type="submit">Update</button>
        
            </form>
        </Wrapper>
    )
}

export default EditProduct

