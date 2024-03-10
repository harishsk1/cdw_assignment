import React, { useMemo } from "react";
import { Typography, Grid, Card, CardHeader, Avatar, Box } from "@mui/material";

const UserList = ({ users, role, searchTerm }) => {
  console.log(searchTerm);
  const filteredUsers = useMemo(() => {
    const searchTermLowerCase = searchTerm?.toLowerCase();
    const includesSearchTerm = (field) =>
      field.toLowerCase().includes(searchTermLowerCase);
    return users?.filter(
      (user) =>
        user.role === role &&
        (searchTermLowerCase === undefined ||
          searchTermLowerCase === "" ||
          ["first_name", "last_name", "email", "role"].some((field) =>
            includesSearchTerm(user[field])
          ))
    );
  }, [users, role, searchTerm]);

  if (!filteredUsers?.length) {
    return <Typography variant="h6">No {role}s found.</Typography>;
  }

  return (
    <Box sx={{ padding: "16px", mx: 4 }}>
      <Typography variant="h5" sx={{ my: 1 }}>
        {role === "admin" ? "Administrators" : "Members"}
      </Typography>
      <Grid container spacing={4}>
        {filteredUsers.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                borderRadius: 3,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderRadius: 3,
                  cursor: "pointer",
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    alt={`${user.first_name} ${user.last_name}`}
                    src={user.img}
                  />
                }
                title={
                  <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                    {`${user.first_name} ${user.last_name}`}
                  </Typography>
                }
                subheader={user.email}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserList;
