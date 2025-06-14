import React from 'react';
import './HomePage.css';
import Values from "../components/values/Values"

export default function HomePage() {
  return (
    <main className="home">
      <section className="home__hero">
        <h1>Welcome to MIAMI Lounge Training</h1>
        <Values />
      </section>
    </main>
  );
}
