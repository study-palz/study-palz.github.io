'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditStuffSchema } from '@/lib/validationSchemas';
import { editStuff } from '@/lib/dbActions';

interface EditStuffData {
  id: number;
  name: string;
  quantity: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  owner: string;
}

const onSubmit = async (data: EditStuffData) => {
  await editStuff(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditStuffForm = ({ stuff }: { stuff: EditStuffData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditStuffData>({
    defaultValues: stuff,
    resolver: yupResolver(EditStuffSchema),
  });

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Stuff</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} />
                <input type="hidden" {...register('owner')} />

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('name')}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    {...register('quantity')}
                    isInvalid={!!errors.quantity}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.quantity?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Condition</Form.Label>
                  <Form.Select
                    {...register('condition')}
                    isInvalid={!!errors.condition}
                  >
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.condition?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="pt-3">
                  <Col>
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      onClick={() => reset()}
                      variant="warning"
                      className="float-right"
                    >
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditStuffForm;
