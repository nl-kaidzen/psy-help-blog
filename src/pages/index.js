import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <section className={styles.main}>
      <div className={styles.left}>

      </div>
      <div className={styles.right}>
        <h1 className="h3-text">Меня зовут Анастасия Анишина. Я занимаюсь психологией...</h1>

      </div>

    </section>
    <h1 className="h3-text">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
