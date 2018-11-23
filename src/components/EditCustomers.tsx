import * as React from 'react';
import { PageHeader, Row, Grid, Table } from 'react-bootstrap';
import { History } from 'history';
import CustomerSearchForm from './reusables/CustomerSearchForm';
import { LinkedCustomer } from './reusables/customer';

interface EditCustomersProps {
    history: History,
    searchValue: string,
    customers: LinkedCustomer[],
    handleSearch: (searchValue: string) => void
}

export default class EditCustomers extends React.Component <EditCustomersProps> {
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
                <Grid>
                    <Row>
                        <CustomerSearchForm onSubmit={this.submitForm}/>
                    </Row>
                    <Row>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Old database</th>
                                </tr>
                                <tr>
                                    <th>id</th>
                                    <th>Full name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.createOldCustomerList()}
                            </tbody>
                        </Table>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th colSpan={2}>New database</th>
                                </tr>
                                <tr>
                                    <th>id</th>
                                    <th>Full name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.createNewCustomerList()}
                            </tbody>
                        </Table>
                        
                    </Row>
                </Grid>
            </div>
        );
    }

    public submitForm(e: any) {
        e.preventDefault();
        this.props.handleSearch(e.target.value);
    }

    public createOldCustomerList() {
        const table:any[] = [];
        const customerList = this.props.customers;

        if(customerList === undefined) {
            return table;
        }

        for (let i = 0; i < customerList.length; i++) {
            const cells = [];
            const customer = customerList[i];
            if(customer.oldData) {
                cells.push(<td key={"oId" + i}>{customer.oldData.id}</td>);
                cells.push(<td key={"oName" + i}>{customer.oldData.firstName + " " + customer.oldData.surname}</td>);
                table.push(<tr key={i+""} id={i+""}>{cells}</tr>);
            }
        }
        return table
    }

    private createNewCustomerList() {
        const table:any[] = [];
        const customerList = this.props.customers;

        if(customerList === undefined) {
            return table;
        }

        for (let i = 0; i < customerList.length; i++) {
            const cells = [];
            const customer = customerList[i];
            if(customer.newData) {
                cells.push(<td key={"nId" + i}>{customer.newData.id}</td>);
                cells.push(<td key={"nName" + i}>{customer.newData.givenNames.join(" ")}</td>);
                table.push(<tr key={i+""} id={i+""}>{cells}</tr>);
            }
        }
        return table
    }
}