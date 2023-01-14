import "./styles.css";

import CardCar from "../../components/CardCar";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Comment() {
  return (
    <>
      <Header />

      <main>
        <h2 className="dc-title">Venha nos visitar</h2>

        <section id="comment-section" className="dc-container">
          <div className="dc-card-container">
            <CardCar />
            <CardCar />
          </div>
        </section>

        <div className="dc-section-comments">
          <div className="dc-card-comments-container">
            <h3>O que estão dizendo</h3>

            <CardComment />
            <CardComment />
            <CardComment />
            <CardComment />
            <CardComment />
            <CardComment />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
