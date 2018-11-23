import * as React from "react";
// import Modal from 'react-responsive-modal';
import { LinkedCustomer } from './customer';
import { Row, Col } from 'react-bootstrap';
import 'src/css/Detail.css';

interface CDProps {
    currentCustomer: LinkedCustomer
}

// interface CDState {
//     open: boolean
// }

const detailStyle = {
    width: '200px',
    borderStyle: 'solid'
}

export default class CustomerDetail extends React.Component<CDProps> {

    constructor(props: any) {
        super(props)   
        // this.state = {
        //     open: false
        // }
    }

    public render() {
        const currentCustomer = this.props.currentCustomer;
        // const { open } = this.state;
		return (
			<div className="container" style={detailStyle}>
                <Row>
                    <Col>
                        <b>Old Customer Data</b>
                    </Col>
                    <Col>
                        <b>New Customer Data</b>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Name: {currentCustomer.oldData ? 
                            currentCustomer.oldData.firstName + currentCustomer.oldData.surname 
                            : 'No old data'}
                    </Col>
                    <Col>
                        Name: {currentCustomer.newData ? 
                            currentCustomer.newData.givenNames.join(' ')
                             : 'No new data'}
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        
                    </Col>
                </Row> */}

            </div>
        );
    }

}