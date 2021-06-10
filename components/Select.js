import {  Form, FormGroup, Input } from 'reactstrap';

const Select = ({data}) => {   
  return (
    <Form>
      <FormGroup>
        <Input type="select" name="select"  id="select-items" >
          <option>All Categories</option>
          {   data && data.makeList.map(data => (
                 <option key={data.id}>{data.name}</option>
             ))
          }     
        </Input>
      </FormGroup>
    </Form>
  );
}



export default Select;