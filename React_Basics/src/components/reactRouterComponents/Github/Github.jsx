import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/umar-abid06")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);
  return (
    <>
      <div>Github followers: {data?.followers}</div>
      <img src={data?.avatar_url} />
    </>
  );
};

export default Github;

export const githubApiCall = async () => {
  const response = await fetch("https://api.github.com/users/umar-abid06");
  return response.json();
};
