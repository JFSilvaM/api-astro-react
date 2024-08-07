import { useState } from "react";

const url = "/results/";

const Search = () => {
  const [value, setValue] = useState("");

  const buscar = (e) => setValue(e.target.value);

  return (
    <div>
      <center>
        <h1 className="mt-5">Search Movie</h1>

        <form action={url + value} method="POST">
          <input
            type="search"
            className="form-control p-3"
            value={value}
            onChange={buscar}
            placeholder="Search..."
          />
        </form>
      </center>
    </div>
  );
};

export default Search;
