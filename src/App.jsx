import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Webtoon from './pages/Webtoon';
import Worldview from './pages/Worldview';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'webtoon':
        return <Webtoon />;
      case 'worldview':
        return <Worldview />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;
