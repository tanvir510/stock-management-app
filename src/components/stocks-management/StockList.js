import { Container, Table } from 'react-bootstrap';

export const StockList = (props) => {
  return (
    <div>
      <Container>
        <h3>Stock list:</h3>
        {props.stocks?.length ? (
          <Table responsive='sm'>
            <thead>
              <tr>
                <th>Type</th>
                <th>Size</th>
                <th>Count</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {props.stocks?.map((stock, index) => (
                <tr key={index}>
                  <td>{stock?.type}</td>
                  <td>{stock?.size}</td>
                  <td>{stock?.count}</td>
                  <td>{stock?.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h6 className='mt-2'>No data stored yet, please add one item from avobe !</h6>
        )}
      </Container>
    </div>
  );
};
