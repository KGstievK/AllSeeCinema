"use client";
import { useGetMovieInfoQuery } from "@/redux/api/infomovie";
import React, { useEffect } from "react";

const InfoMovie: React.FC = () => {
  const { data, isLoading } = useGetMovieInfoQuery();

  useEffect(() => {
    if (data) {
      console.log("Данные получены:", data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Загрузка...</p>;
  } else if (!data) {
    return <p>Нет данных для отображения</p>;
  }

  return (
    <div>
      <h1>Information</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <ul>
            <li>Год: {item.year}</li>
            <li>Страна: {item.country}</li>
            <li>Бюджет: {item.budget}</li>
            <li>Сборы в США: {item.fees_in_usa}</li>
            <li>Сборы в мире: {item.fees_in_world}</li>
            <li>Качество: {item.quality}</li>
            <li>Рейтинг: {item.star}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InfoMovie;
