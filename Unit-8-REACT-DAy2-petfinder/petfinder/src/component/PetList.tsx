import { useState } from "react"
import { Col, Row } from "reactstrap"
import { Pet } from "../models/pet"
import { PetCard } from "./PetCard"

export function PetList(){
    const [pets, setPets] = useState<Pet[]>(
        [{ name: "blah", breed: "blah", image: "dog1.jpg", isAdopted: false},
        { name: "blah", breed: "blah", image: "dog2.jpg", isAdopted: false},
        { name: "blah", breed: "blah", image: "dog3.jpg", isAdopted: false},
        { name: "blah", breed: "blah", image: "cat1.jpg", isAdopted: false}])
    return( 
        <Row>
            { pets.map((pet) => <Col lg="4"><PetCard pet={pet}></PetCard></Col>)}
        </Row>
    )
}
