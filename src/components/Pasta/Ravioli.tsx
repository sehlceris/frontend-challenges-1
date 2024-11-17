import React from "react";
import { Link } from "react-router-dom";

export const Ravioli: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Pasta Picker Version 7</h1>
        <p>
          Your Guide to Pasta Perfection! Pick a link to a Pasta shape to learn
          more about it.
        </p>
        <nav className="links my-4">
          <Link className="mr-2" to="/pasta/ravioli">
            Ravioli
          </Link>
          <Link className="mr-2" to="/pasta/linguine">
            Linguine
          </Link>
          <Link className="mr-2" to="/pasta/macaroni">
            Macaroni
          </Link>
        </nav>
        <hr className="my-2" />
      </header>

      <main className="my-4">
        <p>
          Ravioli are a type of pasta comprising a filling enveloped in thin
          pasta dough. They are usually square, though other forms are also
          popular.
        </p>
      </main>

      <footer>
        <hr className="my-2" />
        <p>© 2024 Pasta Picker Inc. All Rights Reserved. Pasta is life!</p>
      </footer>
    </div>
  );
};
