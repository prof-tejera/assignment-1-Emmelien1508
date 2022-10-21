import React from "react";
import './Documentation.css';

export default function Documentation({ title, component, propDocs }) {
    return (
        <div className="documentation-wrapper">
            <div className="documentation-title">{title}</div>
            <div className="documentation-container">
                <div className="documentation-component">{component}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Prop</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {propDocs.map((doc, index) => {
                            return (
                                <tr key={index}>
                                    <td>{doc.prop}</td>
                                    <td>{doc.description}</td>
                                    <td>{doc.type}</td>
                                    <td><code>{doc.defaultValue}</code></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}