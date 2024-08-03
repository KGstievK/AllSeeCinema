"use client";
import { useEffect, useState } from "react";
import scss from "./HomeSection.module.scss";
import { useGetMovieQuery } from "@/redux/api/movie";

const HomeSection = () => {
  const [listFilm, setListFilm] = useState<MOVIE.GetMovieResponse | undefined>(
    undefined
  );
  const { data, isSuccess } = useGetMovieQuery();

  useEffect(() => {
    if (data) {
      setListFilm(data);
      console.log("Received data:", data);
    }
  }, [data, isSuccess]);

  return (
    <section className={scss.HomeSection}>
      <div className="container">
        <div className={scss.content}>
          <h1>HomeSection</h1>
          <div className={scss.list}>
            {data?.image ? (
              <img src={data.image} alt={data.title || "Movie Image"} />
            ) : (
              <p>No image available</p>
            )}
            <h1>{data?.title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
