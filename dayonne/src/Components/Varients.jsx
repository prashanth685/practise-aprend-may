import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Varients = () => {
  return (
    <>
      <Stack spacing={1}>
        <Skeleton varient="text" sx={{ fontSize: "4rem" }} animation="pulse" />
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          animation="wave"
        />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </>
  );
};

export default Varients;
