import React, { useState } from "react";

function NewPlantForm({newPlant}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleChange(e) {
    if (e.target.name === 'price') {
      setFormData({...formData, [e.target.name] : Number(e.target.value)})
    } else {
      setFormData({...formData, [e.target.name] : e.target.value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    newPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={e => handleChange(e)} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={e => handleChange(e)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={e => handleChange(e)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
