import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const Url = 'http://localhost:6001/plants'

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [searched, setSearched] = useState('')
  const filteredPlants = plantData.filter(plant => plant.name.toLowerCase().includes(searched.toLowerCase()))

  useEffect(() => {
    fetch(Url)
    .then(res => res.json())
    .then(data => setPlantData(data))
  }, [])

  function newPlant(formData) {
    fetch(Url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => setPlantData([...plantData, data]))
  }

  function deletePlant(id) {
    const deletePlants = plantData.filter(plant => plant.id !== id)
    setPlantData(deletePlants)
  }

  return (
    <main>
      <NewPlantForm newPlant={newPlant}/>
      <Search searched={searched} setSearched={setSearched}/>
      <PlantList plantData={filteredPlants} Url={Url} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
