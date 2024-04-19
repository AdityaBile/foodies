import MealsGrid from "@/components/meals/meals-grid";
import MealsLoadingPage from "./loading-out";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meal() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

async function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* Suspense : to show A component until B is getting ready 
        where A is the fallback and B is the main component to be displayed
        */}
        <Suspense fallback={<MealsLoadingPage />}>
          {/* Getting meals from database */}
          <Meal />
        </Suspense>
      </main>
    </>
  );
}

export default MealPage;
