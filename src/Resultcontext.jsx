import { createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);

  const addRight = () => setRight((r) => r + 1);
  const setTotalQuestions = (total) => setTotal(total);

  const reset = () => {
    setRight(0);
    setTotal(0);
  };

  return (
    <ResultContext.Provider
      value={{
        right,
        total,
        addRight,
        setTotalQuestions,
        reset,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

