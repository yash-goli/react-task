import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, Form, Button } from 'react-bootstrap';
import CarFilterModel from '../../models/CarFilterModel';

import { useGetCarColorsQuery, useGetCarManufacturersQuery } from '../../services/carsApi';

type CarsFilterProps = {
  carFilter: CarFilterModel,
  setCarFilter: (carFilter: CarFilterModel) => void
};

const { Body } = Card;
const { Group, Label, Select } = Form;

const CarsFilter = ({ carFilter, setCarFilter }: CarsFilterProps) => {
  const { register, handleSubmit } = useForm<CarFilterModel>();

  const { data: colors } = useGetCarColorsQuery('');

  const { data: manufacturers } = useGetCarManufacturersQuery('');

  const onSubmit: SubmitHandler<CarFilterModel> = data => setCarFilter(data);

  return (
    <>
      <Card>
        <Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Group className='mb-4'>
              <Label htmlFor='carColors'>Color</Label>
              <Select id='carColors' {...register('color')}>
                <option value=''>All Car Colors</option>
                {colors?.colors?.map(color => (
                  <option value={color} key={color}>{color}</option>
                ))}
              </Select>
            </Group>

            <Group className='mb-4'>
              <Label htmlFor='carManufacturers'>Manufacturer</Label>
              <Select id='carManufacturers' {...register('manufacturer')}>
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
