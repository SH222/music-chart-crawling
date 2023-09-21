"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Melon() {
  const [page, setPage] = useState("");
  useEffect(() => {
    const getHtml = axios("/chart/index.htm")
      .then((response) => {
        console.log(response.data);
        setPage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("page", page);

  return <div>{page}</div>;
}
