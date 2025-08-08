import { useFiltersStore } from "@/store/store";
import { ReceiptSwissFranc, RotateCcw } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import s from "./ResetButton.module.scss";

export function ResetButton() {
  const { reset } = useFiltersStore();
  const router = useRouter();
  const pathname = usePathname();

  const resetHandler = () => {
    reset();
    router.replace(pathname);
  };

  return (
    <button onClick={resetHandler} className={s.btn}>
      <RotateCcw size={18} color="#fff" />
    </button>
  );
}
