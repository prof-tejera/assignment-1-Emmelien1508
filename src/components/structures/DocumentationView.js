import React from "react";

import Documentation from "../organisms/Documentation";
import Loading from "../organisms/Loading";

import './DocumentationView.css';

export default function DocumentationView() {
    return (
        <div className="documentation">
            <div>
                <div className="documentation-title">Documentation</div>
                <Documentation
                    title="Loading spinner "
                    component={<Loading />}
                    propDocs={[
                        {
                        prop: "size",
                        description: "Changes the size of the loading spinner",
                        type: "string",
                        defaultValue: "medium",
                        },
                    ]}
                />
            </div>
        </div>
    );
};