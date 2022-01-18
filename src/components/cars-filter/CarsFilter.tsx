import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

import { useGetCarColorsQuery, useGetCarManufacturersQuery } from '../../services/carsApi';

const { Body } = Card;
const { Group, Label, Select } = Form;

const CarsFilter = () => {

  const { data: colors } = useGetCarColorsQuery('');

  const { data: manufacturers } = useGetCarManufacturersQuery('');

  return (
    <>
      <Card>
        <Body>
          <Form>
            <Group className='mb-4'>
              <Label htmlFor='carColors'>Color</Label>
              <Select id='carColors'>
                <option value=''>All Car Colors</option>
                {colors?.colors?.map(color => (
                  <option value={color} key={color}>{color}</option>
                ))}
              </Select>
            </Group>

            <Group className='mb-4'>
              <Label htmlFor='carManufacturers'>Manufacturer</Label>
              <Select id='carManufacturers'>
                <option value=''>All manufacturers</option>
                {manufacturers?.manufacturers?.map(manufacturer => (
                  <option value={manufacturer.name} key={manufacturer.name}>{manufacturer.name}</option>
                ))}
              </Select>
            </Group>

            <Button variant='primary' type='submit' className='float-end'>
              Filter
            </Button>
          </Form>
        </Body>
      </Card>
    </>
  )
};

export default CarsFilter;
