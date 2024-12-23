"use client";

import styles from "../styles/movie.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}
export default function Movie({ id, title, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div key={id} className={styles.movie} onClick={onClick}>
      <img src={poster_path} alt={title} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
