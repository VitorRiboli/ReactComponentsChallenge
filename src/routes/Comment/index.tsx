import CardCar from "../../components/CardCar";
import Header from "../../components/Header";
import "./styles.css";

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

            <div className="dc-card-comment">
              <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</h1>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}
