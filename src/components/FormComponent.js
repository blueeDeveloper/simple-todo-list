import { Form, Button } from "react-bootstrap";

const FormComponent = (props) => {
  const { value, changeValue, onSubmit } = props;
  return (
    <>
      <Form
        noValidate
        onSubmit={onSubmit}
        inline
        style={{ marginTop: 30, marginBottom: 50, textAlign: 'left' }}
      >
        <Form.Control
          style={{ textAlign: "left", marginLeft: 30 }}
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Enter new task..."
          onChange={changeValue}
          value={value}
        />

        <Button style={{ marginLeft: 10 }} type="submit" className="mb-2">
          Add Task
        </Button>
      </Form>
    </>
  );
};
export default FormComponent;
