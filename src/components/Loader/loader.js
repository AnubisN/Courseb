import React from 'react';
import { css } from "@emotion/react"
import PulseLoader from 'react-spinners/PulseLoader'

function Loader() {
    const override = css`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    `
  return <PulseLoader size={20} css={override} color={"#0066FF"}></PulseLoader>;
}

export default Loader;
