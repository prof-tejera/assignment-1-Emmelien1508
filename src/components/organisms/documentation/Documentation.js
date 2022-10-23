import React from "react";
import Button from "../../atoms/button/Button";
import './Documentation.css';

export default function Documentation(props) {
    return (
        <div className="container documentation">
            <div className="documentation-atoms">
                <h1>Atoms</h1>
                <table>
                    <tr className="dark-border">
                        <th>Component</th>
                        <th>Description</th>
                        <th>The thing</th>
                    </tr>
                    <tr>
                        <td>Button</td>
                        <td>This is a button</td>
                        <td>
                            <Button classes="small start">Start</Button>
                        </td>
                    </tr>
                </table>
            </div> 
            <div className="documentation-molecules">
                <h1>Molecules</h1>
                <table>
                    <tr className="dark-border">
                        <td>Control Buttons</td>
                        <td>This is a button</td>
                        <td>
                            <Button classes="small start">Start</Button>
                        </td>
                    </tr>

                    <tr className="light-border">
                        <td>Round Chooser</td>
                        <td>This is a button</td>
                        <td>
                            <Button classes="small start">Start</Button>
                        </td>
                    </tr>

                    <tr className="light-border">
                        <td>Time Chooser</td>
                        <td>This is a button</td>
                        <td>
                            <Button classes="small start">Start</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>Time Panel</td>
                        <td>This is a button</td>
                        <td>
                            <Button classes="small start">Start</Button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}