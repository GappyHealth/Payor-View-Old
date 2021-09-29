import React from "react";

// Root CSS
import "../../css/styles.css";

// External Libraries
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  FormText,
  Label,
  Button,
  Row,
  Col,
  Input,
  InputGroup,
  CustomInput,
} from "reactstrap";

const ResetPin = () => {
  return (
    <React.Fragment>
      <Card className="" style={{ border: "none" }}>
        <CardBody>
          <Form>
            {/* START Input */}
            <FormGroup row>
              <Label for="input-1" sm={4}>
                Pin Information
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="text"
                  id="enterName"
                  placeholder="Last Rembered Pin..."
                />
              </Col>
            </FormGroup>
            {/* END Input */}
            {/* START Input */}
            <FormGroup row>
              <Label for="inputPassword-1" sm={4}></Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="text"
                  id="inputPassword-1"
                  placeholder="Practice Username..."
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="inputPassword-1" sm={4}></Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword-1"
                  placeholder="Practice Password..."
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="operatingSystem11" sm={4} className="pt-0">
                How would you like to receive the new pin?
              </Label>
              <Col sm={8}>
                <CustomInput
                  type="radio"
                  id="operatingSystem11"
                  name="operatingSystem"
                  label="Email"
                  inline
                  defaultChecked
                />
                <CustomInput
                  type="radio"
                  id="operatingSystem12"
                  name="operatingSystem"
                  label="Phone"
                  inline
                />
                <CustomInput
                  type="radio"
                  id="operatingSystem13"
                  name="operatingSystem"
                  label="Practice Manager"
                  inline
                />
              </Col>
            </FormGroup>

            {/* START Textarea */}
            <FormGroup row>
              <Label for="message-1" sm={4}>
                Comments
              </Label>
              <Col sm={8}>
                <Input
                  type="textarea"
                  name="text"
                  id="message-1"
                  placeholder="Anything we need to know...?"
                  className="mb-2"
                />
                <CustomInput
                  type="checkbox"
                  id="iConfirm2"
                  label="I confirm that I have read the Terms & Agreements."
                  className="mb-3"
                />
                <Button color="primary">Save</Button>
              </Col>
            </FormGroup>
            {/* END Textarea */}
          </Form>
          {/* END Form */}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ResetPin;
