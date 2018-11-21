import * as React from 'react';
import 'src/css/Search.css';
import { Button, FormGroup, FormControl, Form, Col } from 'react-bootstrap';

interface CSFormState {
    searchValue: string
}

interface CSFormProps {
    onSubmit: (e: any) => void
}

export default class CustomerSearchForm extends React.Component <CSFormProps, CSFormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            searchValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    public render() { 
        return(<div className='container searchContainer' >
            <Form horizontal={true} onSubmit={ this.props.onSubmit } >
                <FormGroup controlId="CustomerSearch" >
                    <Col sm={10}>
                        <FormControl
                            type="text"
                            value={this.state.searchValue}
                            placeholder="Search customers..."
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col sm={1}>
                        <Button type="submit">Search</Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        );
    }

    private handleChange(e: any) {
        this.setState({ 
            searchValue: e.target.value 
        });
    }
}