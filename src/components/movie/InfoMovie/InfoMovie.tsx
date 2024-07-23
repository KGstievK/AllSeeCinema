"use client";
import { useInfoMovieQuery } from "@/redux/api/infomovie";
import React from "react";

const InfoMovie: React.FC = () => {
  const { data, error, isLoading } = useInfoMovieQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Ошибка при загрузки информации</div>;
  }
  return (
    <div>
      <h1>Information </h1>
      <div>
        {data && (
          <>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <ul>
              <li>Год: {data.year}</li>
              <li>Страна: {data.country}</li>
              <li>Бюджет: {data.budget}</li>
              <li>Сборы в США: {data.fees_in_usa}</li>
              <li>Сборы в мире: {data.fees_in_world}</li>
              <li>Качество: {data.quality}</li>
              <li>Рейтинг: {data.star}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoMovie;
