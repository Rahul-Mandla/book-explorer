import React from "react";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";
export default function Input() {
  return (
    <div>
      {/* <Formgroup>
        <InputGroup>
        <FormControl
        placeholder="enter Search text"/>
        </InputGroup>
        </Formgroup> */}
      <FormGroup>
        <InputGroup>
          <FormControl />
        </InputGroup>
      </FormGroup>
    </div>
  );
}
