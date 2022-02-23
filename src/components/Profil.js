import React, { useState } from "react";
import Display from "./Display";

const Profil = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };

  return (
    <div>
      <form>
        <label>Unesi GitHub username:</label>
        <input type="text" value={username} onChange={onChangeHandler}></input>
        <button type="submit" onClick={submitHandler}>
          Pošalji
        </button>

        <Display data={data} repositories={repositories} />
      </form>
    </div>
  );
};

export default Profil;
