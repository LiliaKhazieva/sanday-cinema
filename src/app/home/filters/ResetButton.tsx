import { useFiltersStore } from "@/store/store";
import { ReceiptSwissFranc } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function ResetButton() {
  const { reset } = useFiltersStore();
  const router = useRouter();
  const pathname = usePathname();

  const resetHandler = () => {
    reset();
    router.replace(pathname);
  };

  return (
    <button onClick={resetHandler}>
      <ReceiptSwissFranc size={25} color="#fff" />
    </button>
  );
}
