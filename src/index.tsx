import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          category: 'Dev',
          amount: 6000,
          type: 'withdraw',
          createdAt: new Date('2021-01-01 09:00:00'),
        },
        {
          id: 2,
          title: 'Freelance de website 2',
          category: 'Dev',
          amount: 6000,
          type: 'deposit',
          createdAt: new Date('2021-01-01 09:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      try {
        const data = JSON.parse(request.requestBody);
        return schema.create('transaction', data);
      } catch (e) {
        alert(e);
        return null;
      }
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
