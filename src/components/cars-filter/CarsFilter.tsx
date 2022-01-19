import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, Form, Button } from 'react-bootstrap';
import CarFilterModel from '../../models/CarFilterModel';

import CarColorsModel from '../../models/CarColorsModel';
import CarManufacturersModel from '../../models/CarManufacturersModel';

type CarsFilterProps = {
  colors: CarColorsModel,
  manufacturers: CarManufacturersModel,
  setCarFilter: (carFilter: CarFilterModel) => void
};

const { Body } = Card;

const { Group, Label, Select } = Form;

const CarsFilter = ({ colors, manufacturers, setCarFilter }: CarsFilterProps) => {
  const { register, handleSubmit } = useForm<CarFilterModel>();

  const onSubmit: SubmitHandler<CarFilterModel> = data => setCarFilter(data);

  return (
    <>
      <Card data-testid='carsFilter'>
        <Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Group className='mb-4'>
              <Label htmlFor='carColors'>Color</Label>
              <Select defaultValue='' data-testid='carColors' id='carColors' {...register('color')}>
                <option value=''>All Car Colors</option>
                {colors?.colors?.map(color => (
                  <option value={color} key={color}>{color}</option>
                ))}
              </Select>
            </Group>

            <Group className='mb-4'>
              <Label htmlFor='carManufacturers'>Manufacturer</Label>
              <Select defaultValue='' data-testid='carManufacturers' id='carManufacturers' {...register('manufacturer')}>
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
