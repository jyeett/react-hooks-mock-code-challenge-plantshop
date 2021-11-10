import React, { useState } from "react";

function PlantCard({plant, Url, deletePlant}) {
  const {name, image, price, id} = plant
  const [myPlant, setMyPlant] = useState({
    name: name,
    image: image,
    price: price,
    id: id
  })
  const [inStock, setInStock] = useState(true)
  const [canEdit, setCanEdit] = useState(false)
  const [edittedPrice, setEdittedPrice] = useState('')

  function handleStock() {
    setInStock(!inStock)
  }

  function handleDelete() {
    deletePlant(id)
    fetch(`${Url}/${id}`, {
      method: 'DELETE'
    })
  }

  function handleEdit(e) {
    e.preventDefault()
    fetch(`${Url}/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({price: edittedPrice})
    })
    .then(res => res.json())
    .then(data => {
      setMyPlant(data)
      setEdittedPrice('')
      setCanEdit(false)
    })

  }

  return (
    <li className="card">
      <img src={myPlant.image} alt={myPlant.name} />
      <h4>{myPlant.name}</h4>
      <p>Price: {myPlant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStock} >In Stock</button>
      ) : (
        <button onClick={handleStock} >Out of Stock</button>
      )}
      <button style={{color: 'white', backgroundColor: 'red'}} onClick={handleDelete}>Delete</button>
      <br></br>
      <button onClick={() => setCanEdit(!canEdit)}>Edit Price</button>
      {canEdit ?
      <form onSubmit={e => handleEdit(e)}>
        <input
          type="number"
          step='0.01'
          value={edittedPrice}
          placeholder='New Price'
          onChange={e => setEdittedPrice(e.target.value)}
        >
        </input>
        <button type='submit'>Submit</button>
      </form>
      : null}
    </li>
  );
}

export default PlantCard;
