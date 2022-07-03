import React from "react";
import PromoText from "./PromoText";
import MealList from "./MealList";

function Meals() {
  return (
    <React.Fragment>
      <PromoText />
      <main>
        <MealList />
      </main>
    </React.Fragment>
  );
}

export default Meals;
