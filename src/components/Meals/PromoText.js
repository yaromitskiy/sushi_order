import styles from "./PromoText.module.css";

function PromoText() {
  return (
    <section className={styles["promo-text"]}>
      <h2>Онлайн Суши Ресторан Япона Кухня</h2>
      <p>
        Япона кухя - это онлайн суши - ресторан, в котором любимые суши и
        сашими, роллы и другие блюда национальной японской кухни делает команда
        проффесиональных поваров.
      </p>
      <p>
        Быстрая работа и качественная продукция, а также самые настоящие
        компоненты придают хороший вкус блюдам, дарят наслаждение от трапезы.
      </p>
    </section>
  );
}

export default PromoText;
