import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const initialFormData = {
  type: '',
  size: '',
  count: '',
  price: ''
};

const types = ['sea', 'pond', 'river'];
const sizes = ['M', 'S', 'L'];

export const AddStock = (props) => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormData = (event) => {
    event.preventDefault();
    const hasFormValue = Object.values(formData).every((value) => {
      if (value === '') {
        return true;
      }

      return false;
    });

    if (hasFormValue) {
      setError('All field are required to filled.');
      return;
    } else {
      setError(null);
      props.handleSubmit(formData);
      event.target.reset();
    }
  };
  return (
    <div className='add-stock'>
      <Container>
        <h3>Add stock:</h3>
        <Form onSubmit={(e) => handleFormData(e)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Type</Form.Label>
            <Form.Select
              aria-label='Default select example'
              name='type'
              onChange={(value) => handleChange(value)}>
              <option>Select Type</option>
              {types?.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Size</Form.Label>
            <Form.Select
              aria-label='Default select example'
              name='size'
              onChange={(value) => handleChange(value)}>
              <option>Select Type</option>
              {sizes?.map((size, idx) => (
                <option key={idx} value={size}>
                  {size}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicCount'>
            <Form.Label>Count</Form.Label>
            <Form.Control
              type='number'
              name='count'
              onChange={(value) => handleChange(value)}
              placeholder='Count'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPrice'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              name='price'
              onChange={(value) => handleChange(value)}
              placeholder='Price'
            />
          </Form.Group>

          {error && <Alert variant='danger'>{error}</Alert>}
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
