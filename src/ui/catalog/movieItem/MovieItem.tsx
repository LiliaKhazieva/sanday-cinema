"use client";

import { IMovie } from "@/types/movie.interface";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const MovieItem = ({ movie }: { movie: IMovie }) => {
  if (!movie) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div>
        <div>
          <Star /> <span>{movie.rating}</span>
        </div>
        <Image
          width={151}
          height={224}
          src={movie.image || ""}
          alt={movie.title || ""}
          priority
        />
      </div>
      {movie.title}
      <div>{movie.price}</div>
    </motion.div>
  );
};
