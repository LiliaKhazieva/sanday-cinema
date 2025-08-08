import { div } from "framer-motion/client";

const SkeletonLoader = () => {
  return (
    <div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>1124</div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
