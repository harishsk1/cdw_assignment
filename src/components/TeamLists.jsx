import React from "react";
import useFetch from "../hooks/useFetch";
import TeamListComp from "./TeamList";
import { Divider, CircularProgress } from "@mui/material";

const TeamList = ({ searchTerm }) => {
  const apiUrl = " https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098";
  const { data = [], loading, error } = useFetch(apiUrl, "GET");

  if (loading) return <CircularProgress />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <TeamListComp users={data} role="admin" searchTerm={searchTerm} />
      <Divider />
      <TeamListComp users={data} role="member" searchTerm={searchTerm} />
    </div>
  );
};

export default TeamList;
