import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {nodeurl} from "../../../tool/fetch-help";


class StuRightReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1:false,
            format:''
        };

    }

    render() {

        return (
            <div>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        );
    }
}
export const StuRight = withRouter(StuRightReact);
