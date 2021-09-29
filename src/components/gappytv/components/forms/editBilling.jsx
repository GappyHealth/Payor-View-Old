import React from "react";

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

const EditBilling = () => {
  return (
    <React.Fragment>
      <Card className="" style={{border: "none"}}>
        <CardBody>
          <Form>
            {/* START Input */}
            <FormGroup row>
              <Label for="input-1" sm={4}>
                Banking Information
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="text"
                  id="enterName"
                  placeholder="Name on Account..."
                />
              </Col>
            </FormGroup>
            {/* END Input */}
            {/* START Input */}
            <FormGroup row>
              <Label for="inputPassword-1" sm={4}>
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword-1"
                  placeholder="Account Number..."
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="inputPassword-1" sm={4}>
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword-1"
                  placeholder="Routing Number..."
                />
              </Col>
            </FormGroup>

            {/* END Input */}
            {/* START Radios */}
            <FormGroup row className="mt-5">
              <Label for="operatingSystem11" sm={4} className="pt-0">
                Billing Address
              </Label>
              
              <Col sm={8}>
                <Input
                  type="text"
                  name="text"
                  id="inputPassword-1"
                  placeholder="Address..."
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="inputPassword-1" sm={4}>
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword-1"
                  placeholder="City..."
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="inputPassword-1" sm={4}>
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword-1"
                  placeholder="State..."
                />
              </Col>
            </FormGroup>
            {/* END Radios */}
            {/* START Select */}
            <FormGroup row>
              <Label for="country-selector-1" sm={4}>
              </Label>
              <Col sm={8}>
                <CustomInput
                  type="select"
                  name="customSelect"
                  id="country-selector-1"
                >
                  <option value="">Select Country...</option>
                  <option>United States of America (US)</option>
                  <option>United Kingdom (UK)</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Other...</option>
                </CustomInput>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="inputPassword-1" sm={4}>
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword-1"
                  placeholder="Zip Code..."
                />
              </Col>
            </FormGroup>
            {/* END Select */}
            
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

export default EditBilling;
