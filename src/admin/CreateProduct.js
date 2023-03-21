import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper'

function CreateProduct() {

  const [title, setTitle] = useState();
  const [image, setImage] = useState();


  function submitData(e){
    e.preventDefault()
   addData()
  }
  function addData(){
    let data = {title, image}
    fetch(`http://localhost:5000/products/`,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((data)=>{

        console.log('data',data)
        
      })
    })

  }
  return (
    <Wrapper>
      <Link to="/admin/products" className="btn">Go to Products</Link>
      <form onSubmit={submitData}>
      
      <label>Title</label>
      <input type="text" name="title"  onChange={e=>setTitle(e.target.value)} />
      <label>Image</label>
      <input type="text" name="image"  onChange={e=>setImage(e.target.value)} />
      <button type="submit">Add</button>
      </form>
    </Wrapper>
  )
}

export default CreateProduct