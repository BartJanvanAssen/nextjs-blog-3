import Link from "next/link";
import React from "react";
export default function FirstPost() {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <>
      <h1>Starships</h1>
      <ul>
        {state?.results?.map((starship) => (
          <li>{starship.name}</li>
        ))}
      </ul>
    </>
  );
}
