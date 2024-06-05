
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import ListTodo from './components/ListTodo';
import FormSearch from './components/FormSearch';
import FormTodo from './components/FormTodo';
import FilterTodo from './components/FilterTodo';
import { Button, Col, Form, InputGroup, Navbar, Row } from 'react-bootstrap';


function App() {

  return (
    <div className="container">
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
      <div className="p-3 border-1 border-round-2 border rounded-3 bg-info">
        <h2 className="text-center">Todo App</h2>
        <FormTodo />
        <div className="mb-3">
          <FormSearch />
          <FilterTodo />
        </div>
        <ListTodo />
      </div>
    </div>

  )
}

export default App
