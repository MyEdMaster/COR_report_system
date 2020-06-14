import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {nodeurl} from "../../../tool/fetch-help";


class StuWrongReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrong:'',
            render:0
        };

    }
    componentDidMount() {
        const overall={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        fetch(`${nodeurl}/student_wrong`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    wrong:res,
                    render:1
                });
            });
    }

    render() {
        if(this.state.render===1){
            return (
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
            );
        }
        else return null


    }
}
export const StuWrong = withRouter(StuWrongReact);
