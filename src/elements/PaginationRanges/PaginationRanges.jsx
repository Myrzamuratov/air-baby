import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNews } from "../../context/NewsContextProvider";

const PaginationRanges = ({ totalItems, itemsPerPage, handlePageChange }) => {
  const { pagination } = useNews();
  const [currentPage, setCurrentPage] = useState();

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <Stack sx={{ marginBottom: "15px" }} spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        siblingCount={0}
        boundaryCount={2}
      />
    </Stack>
  );
};

export default PaginationRanges;
