import React, { useEffect, useState, useCallback } from "react";
import Sort from "./Sort";

export default function Data() {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();


  const dataHandler = useCallback(async () => {
    setLoad(true);
    setError(null);
    try {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );

      if (!response.ok) {
        throw new Error("Error!");
      }
      const results = await response.json();
      setData(results);
    } catch (error) {
      setError(error.message);
    }
    setLoad(false);
  }, []);

  useEffect(() => {
    dataHandler();
  }, [dataHandler]);



  return (
    <>
      {error}
      {!error && !load && <Sort data={data} />}
    </>
  );
}
