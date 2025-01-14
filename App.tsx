import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EcoForm from './components/EcoForm';
import Results from './components/Results';
import './App.css';

export default function App() {
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (calculatedScore: number) => {
    setScore(calculatedScore);
    setShowResults(true);
  };

  const handleRetry = () => {
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="app">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        Calcula tu Día Verde
      </motion.h1>
      {!showResults ? (
        <EcoForm onSubmit={handleFormSubmit} />
      ) : (
        <Results score={score} onRetry={handleRetry} />
      )}
    </div>
  );
}

