"use client";

import { IMovie } from "@/types/movie.types";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import s from "../Catalog.module.scss";
import { convertPrice } from "@/utils/convert-price";

export const MovieItem = ({ movie }: { movie: IMovie }) => {
  if (!movie) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={s.item}>
        <div className={s.rating}>
          <Star size={13} fill="#FF6738" /> <span>{movie.rating}</span>
        </div>
        <Image
          width={151}
          height={224}
          src={`/uploads/images/${movie.image}` || ""}
          alt={movie.title || ""}
          priority
        />
      </div>
      {movie.title}
      <div>{convertPrice(movie.price)}</div>
    </motion.div>
  );
};
