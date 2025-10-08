import React from 'react';
import MainPage from '../components/pages/MainPage';

/**
 * Main component, that is connected to index.tsx
 */

interface AppProps {
    cardsCount: number;
}

const App: React.FC<AppProps> = ({ cardsCount }) => (
  <MainPage cardsCount={cardsCount} />
);

export default App;
