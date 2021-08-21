import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

import { ExampleButton } from "../examples/button"

export default function Home() {
    return (
        <Layout>
            <Wrapper>
                <div>
                    <ExampleButton>Click Me!</ExampleButton>
                    <h1>Home Page</h1>
                    <h1>Hello world</h1>
                    <h1>Hello people</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Praesentium quae fugiat inventore unde quod veniam
                        fugit. Ab laborum rerum ipsum non sequi inventore
                        corrupti explicabo, nisi eum cum odit aliquid.
                    </p>
                </div>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.section`
    color: red;
    h1 {
        color: yellowgreen;
    }
    .text {
        text-transform: uppercase;
    }
`
