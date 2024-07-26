import { useEffect, useState } from "react";
import scss from "./HomeSection.module.scss";
import { useGetRatingQuery } from "@/redux/api/infomovie";
import { useGetMeQuery } from "@/redux/api/auth";
import { useGetMovieQuery } from "@/redux/api/movie";

const HomeSection = () => {
  const [listFilm, setListFilm] = useState<MOVIE.GetMovieResponse>();

  const { data, isSuccess } = useGetMovieQuery();
  useEffect(() => {
    if (data) {
      setListFilm(data);
    }
  }, [isSuccess]);
  return (
    <section className={scss.HomeSection}>
      <div className="container">
        <div className={scss.content}>
          <h1>HomeSection</h1>
          <div className={scss.list}>
            <img src={data?.image} alt="" />
            <h1>{data?.title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
