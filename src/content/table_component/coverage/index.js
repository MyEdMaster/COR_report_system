import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {nodeurl} from "../../../tool/fetch-help";
import {ProblemPanel} from "../../component/problem_panel";


class OverallReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backend:'',
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

        fetch(`${nodeurl}/system_ask_question`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    wrong:res,
                    render:1
                });
            });

    }

    render() {
        if(this.state.render ===1){
            return (
                <div>
                    <div className={classes.title}>All student answers</div>
                    <MDBTable hover>
                        <MDBTableHead>
                            <tr>
                                <th>#</th>
                                <th>Question</th>
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
export const Overall = withRouter(OverallReact);
