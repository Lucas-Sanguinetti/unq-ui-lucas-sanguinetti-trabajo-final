import { createContext, useState } from "react";

export const DifficultyContext = createContext();

export const DifficultyProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(0);

  const setCurrentDifficulty = (difficulty) => setDifficulty(difficulty);


  return (
    <DifficultyContext.Provider
      value={{
        difficulty,
        setCurrentDifficulty,
      }}
    >
      {children}
    </DifficultyContext.Provider>
  );
};

