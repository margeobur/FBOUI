import * as React from 'react';
import { PageHeader, Button, FormGroup, FormControl, Form, Col } from 'react-bootstrap';
import 'src/css/Search.css';

interface SearchScreenState {
    value: string
}

export default class EmployeeSearchScreen extends React.Component<any, SearchScreenState> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    public render() {
        return( 
            <div className='container'>
                <PageHeader className="searchPageHeader">
                    Employee Portal
                </PageHeader>
                <div className='container searchContainer' >
                    <Form horizontal={true} >
                        <FormGroup controlId="CustomerSearch" >
                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
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
            </div>

        );
    }

    private handleChange(e: any) {
        this.setState({ value: e.target.value });
    }
}