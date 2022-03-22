import { createContext, useContext, useState, useEffect } from "react";

const DeadPlantWrapperContext = createContext(null);

export function DeadPlantWrapper({ children }) {
  const [deadplants, setDeadPlants] = useState(0);

  useEffect(() => {
    const storedDeadPlantData = JSON.parse(localStorage.getItem("deadPlants"));

    if (storedDeadPlantData) {
      setDeadPlants(storedDeadPlantData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("deadPlants", JSON.stringify(deadplants));
  }, [deadplants]);

  function addDeadPlant() {
    setDeadPlants(deadplants + 1);
  }

  function resetDeadPlants() {
    setDeadPlants(0);
  }

  let sharedState = {
    deadplants,
    resetDeadPlants,
    addDeadPlant,
  };

  return (
    <DeadPlantWrapperContext.Provider value={sharedState}>
      {children}
    </DeadPlantWrapperContext.Provider>
  );
}

export function useDeadPlantWrapper() {
  return useContext(DeadPlantWrapperContext);
}
