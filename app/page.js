"use client";
import Hero from "./_components/search_section/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalAPI from "./_services/GlobalAPI";
import { useEffect } from "react";

export default function Home() {
  // Define the getCategoryList function
  const getCategoryList = () => {
    GlobalAPI.getCategory()
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error("Error fetching category list:", error);
      });
  };

  // Use useEffect to call getCategoryList on component mount
  useEffect(() => {
    getCategoryList();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <Hero />
      <CategoryList />
    </div>
  );
}
