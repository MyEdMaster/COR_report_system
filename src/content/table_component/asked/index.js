import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {nodeurl} from "../../../tool/fetch-help";


class AskedReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right:'',
            render1:0,
            render2:0
        };

    }
    componentDidMount() {
        const overall={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        fetch(`${nodeurl}/student_right`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    right:res,
                    render1:1
                });
            });
        fetch(`${nodeurl}/student_wrong`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    wrong:res,
                    render2:1
                });
            });
    }

    render() {
        if(this.state.render1 && this.state.render2){
            return (
                <div>
                    <div>
                        <div className={classes.title}>Student right</div>
                        <MDBTable hover>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>Asked Question</th>
                                    <th>Student Answer</th>
                                    <th>Rate</th>
                                    <th>isRight</th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    this.state.right.map((item, index)=>{
                                        return <tr>
                                            <td>{index+1}</td>
                                            <td>{item.question_content}</td>
                                            <td>{item.student_answer}</td>
                                            <td>{item.rate}</td>
                                            <td>{item.isRight}</td>
                                        </tr>
                                    })
                                }
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                    <div>
                        <div className={classes.title}>Student wrong</div>
                        <MDBTable hover>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>Asked Question</th>
                                    <th>Student Answer</th>
                                    <th>Rate</th>
                                    <th>isRight</th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    this.state.wrong.map((item, index)=>{
                                        return <tr>
                                            <td>{index+1}</td>
                                            <td>{item.question_content}</td>
                                            <td>{item.student_answer}</td>
                                            <td>{item.rate}</td>
                                            <td>{item.isRight}</td>
                                        </tr>
                                    })
                                }
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </div>
            );
        }
        else return null


    }
}
export const Asked = withRouter(AskedReact);
