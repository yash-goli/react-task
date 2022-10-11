import React from 'react';
import { useForm } from "react-hook-form";
import { Card, Form, Button } from 'react-bootstrap';
import CarFilterModel from '../../models/CarFilterModel';

import { useColors, useManufacturers } from '../../hooks';
import { useSetRecoilState } from 'recoil';
import { carFilterAtom } from '../../recoil/carFilter';

const { Body } = Card;

const { Group, Label, Select } = Form;

const CarsFilter = () => {
  const { register, getValues } = useForm<CarFilterModel>();

  const colors = useColors();

  const manufacturers = useManufacturers();

  const setCarFilter = useSetRecoilState(carFilterAtom);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCarFilter({
      color: getValues('color'),
      manufacturer: getValues('manufacturer')
    });
  };

  return (
    <>
      <Card data-testid='carsFilter'>
        <Body>
          <Form onSubmit={onSubmit}>
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

            <Button data-testid='filter' variant='primary' type='submit' className='float-end' role='button'>
              Filter
            </Button>
          </Form>
        </Body>
      </Card>
    </>
  )
};

export default CarsFilter;
