import { Card, CardBody, CardTitle, Button, CardSubtitle, CardText } from 'reactstrap';
import { Pet } from '../models/pet';

export interface IPetCardProps {
    pet: Pet;
}

export function PetCard (props: IPetCardProps) {

  return (
        <Card>
    <img
        alt="Sample"
        src={`/img/${props.pet.image}`}
    />
    <CardBody>
        <CardTitle tag="h5">
        {props.pet.name}
        </CardTitle>
        <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        >
        {props.pet.breed}
        </CardSubtitle>
        <CardText>
            <p>Probably need to describe the pet</p>
        </CardText>
        <Button>
        Adopt Me!
        </Button>
    </CardBody>
    </Card>
  );
}
