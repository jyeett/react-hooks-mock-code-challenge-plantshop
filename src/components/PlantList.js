import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, Url, deletePlant}) {
  const plants = plantData.map(plant => <PlantCard key={plant.id} plant={plant} Url={Url} deletePlant={deletePlant} />)
  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
