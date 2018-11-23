import * as React from 'react';
import { History } from 'history';
import { PageHeader, Grid, Row, Table } from 'react-bootstrap';
import CustomerSearchForm from './reusables/CustomerSearchForm';
import { LinkedCustomer } from './reusables/customer';
import CustomerDetail from './reusables/CustomerDetail';

interface CustomerListProps {
    history: History,
    searchValue: string,
    customers: LinkedCustomer[],
    selectedCustomer: LinkedCustomer,
    handleSearch: (searchValue: string) => void
    selectCustomer: (customer: LinkedCustomer) => void
}

export default class EmployeeCustomerList extends React.Component <CustomerListProps> {
    constructor(props: any) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    public render() {
        return(
            <div className="container">
                <PageHeader className="searchPageHeader">
                        Employee Portal
                </PageHeader>
                <Grid>
                    <Row>
                        <CustomerSearchForm onSubmit={this.submitForm}/>
                    </Row>
                   
                    {this.props.selectedCustomer && <Row>
                        
                        <CustomerDetail currentCustomer={this.props.selectedCustomer}/>
                    </Row>}
                    <Row>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Old database</th>
                                    <th colSpan={2}>New database</th>
                                </tr>
                                <tr>
                                    <th>id</th>
                                    <th>Full name</th>
                                    <th>id</th>
                                    <th>Full name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.createCustomerList()}
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

    private createCustomerList() {
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

            } else {
                cells.push(<td key={"oId" + i}>&nbsp;</td>);
                cells.push(<td key={"oName" + i}>&nbsp;</td>);
            }

            if(customer.newData) {
                cells.push(<td key={"nId" + i}>{customer.newData.id}</td>);
                cells.push(<td key={"nName" + i}>{customer.newData.givenNames.join(" ")}</td>);
            } else {
                cells.push(<td key={"nId" + i}>&nbsp;</td>);
                cells.push(<td key={"nName" + i}>&nbsp;</td>);
            }

            table.push(<tr key={i+""} id={i+""} onClick= {this.selectRow.bind(this, i)}>{cells}</tr>);
        }
        return table
    }

    private selectRow(index: any) {
        const selectedCustomer = this.props.customers[index]
        if (selectedCustomer != null) {
            this.props.selectCustomer(selectedCustomer)
        }
    }
}