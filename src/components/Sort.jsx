import React, { useState } from "react";

export default function Sort({ data }) {
  const [selectSort, setSelectSort] = useState("all");
  const [nameSort, setNameSort] = useState("az");
  const [newData, setNewData] = useState(data);

  const onChangeSortHandler = (event) => {
    setSelectSort(event.target.value);

    const lithuaniaArea = data && data.find((c) => c.name === "Lithuania").area;

    if (event.target.value === "all") {
      setNewData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }

    if (event.target.value === "all" && nameSort === "za") {
      setNewData(data.sort((a, b) => b.name.localeCompare(a.name)));
    }

    if (event.target.value === "Lithuania") {
      setNewData(
        data
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((result) => result.area < lithuaniaArea)
      );
    }
    if (event.target.value === "Lithuania" && nameSort === "za") {
      setNewData(
        data
          .sort((a, b) => b.name.localeCompare(a.name))
          .filter((result) => result.area < lithuaniaArea)
      );
    }

    if (event.target.value === "Oceania") {
      setNewData(
        data
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((result) => result.region === "Oceania")
      );
    }
    if (event.target.value === "Oceania" && nameSort === "za") {
      setNewData(
        data
          .sort((a, b) => b.name.localeCompare(a.name))
          .filter((result) => result.region === "Oceania")
      );
    }
  };

  const onChangeNameHandler = (event) => {
    setNameSort(event.target.value);

    if (event.target.value === "az") {
      newData.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (event.target.value === "za") {
      newData.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  return (
    <>

      <select value={selectSort} onChange={onChangeSortHandler}>
        <option value="all">All</option>
        <option value="Lithuania">Smaller than Lithuania</option>
        <option value="Oceania">In Oceania region</option>
      </select>

      <select className="nameSort" value={nameSort} onChange={onChangeNameHandler}>
        <option value="az">Name A-Z</option>
        <option value="za">Name Z-A</option>
      </select>


      <div>
        {newData &&
          newData.map((country) => (
            <ul key={country.name}>
              <li>
                <span>Name: {country.name}</span>
              </li>
              <li>
                <span>Area: {country.area}</span>
              </li>
              <li>
                <span>Region: {country.region}</span>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
}
