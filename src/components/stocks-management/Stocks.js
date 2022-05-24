// Library Import
import { useState } from 'react';
import { Container } from 'react-bootstrap';

// File Import
import { StockList } from './StockList';
import { AddStock } from './AddStock';

export const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const handleSubmit = (value) => {
    setStocks((prevState) => [...prevState, value]);
  };
  return (
    <div>
      <Container>
        <AddStock handleSubmit={handleSubmit} />

        <div className='stock-list mt-5'>
          <StockList stocks={stocks} />
        </div>
      </Container>
    </div>
  );
};
