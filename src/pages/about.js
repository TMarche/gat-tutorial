import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const About = () => {
    return (
        <Layout>
            <div className={page}>
                <h1>About Page</h1>
                <h1>Hello world</h1>
                <p className={text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem maxime accusantium saepe deleniti sit error, eligendi
                    iure facere, incidunt quod eveniet ea distinctio totam
                    asperiores nulla ipsa fugiat praesentium atque.
                </p>
            </div>
        </Layout>
    )
}

export default About
