import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Table, Label, Input, Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { reportingModuleColumn } from './EcommerceCustomersConstants';
import { dummyData } from './EcommerceCustomersConstants';


class EcommerceCustomers extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Customers" />
                        <Row>
                            <Col xs="12">
                                <Card>
                                    <CardBody>
                                        <Row className="mb-2">
                                            <Col sm="4">
                                                <div className="search-box mr-2 mb-2 d-inline-block">
                                                    <div className="position-relative">
                                                        <Input type="text" className="form-control" placeholder="Search..." />
                                                        <i className="bx bx-search-alt search-icon"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="8">
                                                <div className="text-sm-right">
                                                    <Button type="button" color="success" className="btn-rounded waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-plus mr-1"></i> New Customers</Button>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="table-responsive">
                                            <Table className="table-centered table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        {reportingModuleColumn.map((item) => <th>{item.header_name}</th>)}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dummyData.map((item) => <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                <Label className="custom-control-label" htmlFor="customCheck8">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>{item.Ledger_Super_Group}</td>
                                                        <td>{item.Ledger_Group_Type}</td>
                                                        <td>{item.Ledger_Group}</td>
                                                        <td>{item.Particular}</td>
                                                        <td>{item.Open_Bal_Dr}</td>
                                                        <td>{item.Open_Bal_Cr}</td>
                                                        <td>{item.Curr_Bal_Dr}</td>
                                                        <td>{item.Curr_Bal_Cr}</td>
                                                        <td>{item.Closing_Bal_Dr}</td>
                                                        <td>{item.Closing_Bal_Cr}</td>
                                                    </tr>)}
                                                </tbody>
                                            </Table>
                                        </div>
                                        {/* <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                                            <PaginationItem disabled>
                                                <PaginationLink previous href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem active>
                                                <PaginationLink href="#">
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    4
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    5
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink next href="#" />
                                            </PaginationItem>
                                        </Pagination> */}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default EcommerceCustomers;