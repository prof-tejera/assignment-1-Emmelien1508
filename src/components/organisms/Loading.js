import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import './Loading.css';

const primaryColor = "#ffa2bf";

const sizeMapping = {
  small: 10,
  medium: 14,
  large: 20,
};

const Dot = styled.span`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
`;

export default function Loading({ size = "medium", color = primaryColor }) {
    return (
        <div className="spinner">
            <div className="dot-group">
                <Dot className="dot" size={sizeMapping[size]} color={color} />
                <Dot className="dot" size={sizeMapping[size]} color={color} />
            </div>
            <div className="dot-group">
                <Dot className="dot" size={sizeMapping[size]} color={color} />
                <Dot className="dot" size={sizeMapping[size]} color={color} />
            </div>
        </div>
    );
};

Loading.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
};
