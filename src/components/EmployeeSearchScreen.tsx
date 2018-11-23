import * as React from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import 'src/css/Search.css';
import { History } from 'history';
import CustomerSearchForm from './reusables/CustomerSearchForm';



interface SearchScreenProps {
    history: History;
    searchValue: string;
    handleSearch: (searchValue: string) => void
}

export default class EmployeeSearchScreen extends React.Component<SearchScreenProps> {
    constructor(props: any) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    public render() {
        return( 
            <div className='container'>
                <PageHeader className="searchPageHeader">
                    Employee Portal
                </PageHeader>
                <div className="container parentContainer">
                    <CustomerSearchForm onSubmit={this.submitForm} />
                </div>
                <Button href="/customers" bsStyle="link">Straight to customers</Button>
                <Button href="/addCustomers">Add customers</Button>
            </div>
        );
    }

    public submitForm(e: any) {
        e.preventDefault();
        this.props.handleSearch(e.target.value)
        this.props.history.push("/customers");
    }
}