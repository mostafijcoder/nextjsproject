import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SecondPage() {
  const router = useRouter();
  const { content } = router.query; // Extract 'content' from query parameters

  return <h1>Welcome to {content ? content : "Default Page"}</h1>;
}

