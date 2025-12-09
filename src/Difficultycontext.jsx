import { createContext, useState } from "react";

export const DifficultyContext = createContext();

export const ResultProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(0);

  const setActualDifficulty = (difficulty) => setDifficulty(difficulty);


  return (
    <ResultContext.Provider
      value={{
        difficulty,
        setActualDifficulty,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

