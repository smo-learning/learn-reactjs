import React from 'react';
import Layout from './hoc/Layout/Layout';
import TodoBuilder from './containers/TodoBuilder/TodoBuilder';

function App() {
  return (
    <Layout>
      <TodoBuilder></TodoBuilder>
    </Layout>
  );
}

export default App;
