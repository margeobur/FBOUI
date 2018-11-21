import * as React from 'react';
import { History } from 'history';
import { PageHeader } from 'react-bootstrap';

interface CustomerListProps {
    history: History,
    searchValue: string
}

export default class EmployeeCustomerList extends React.Component <CustomerListProps> {

    public render() {
        return(
            <div className="container">
                <PageHeader className="searchPageHeader">
                        Employee Portal
                </PageHeader>

                
            </div>
        );
    }
}