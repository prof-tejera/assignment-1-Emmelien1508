import React from "react";

import Documentation from "../../organisms/documentation/Documentation";
import Loading from "../../organisms/loading/Loading";

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