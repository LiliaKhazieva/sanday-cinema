import { EnumMovieSort } from "@/services/movie.types";
import { IStore } from "./store.types";
import { create } from "zustand";
import { ISimpleCartItem } from "@/types/cart.types";
import { persist } from "zustand/middleware";
import { randomUUID } from "crypto";
import { IMovie } from "@/types/movie.types";

const initialQueryParams: Pick<IStore, "queryParams"> = {
  queryParams: {
    sort: EnumMovieSort.NEWEST,
    searchTerm: "",
    page: 1,
    perPage: 10,
    isAdultOnly: "true",
  },
};

export const useFiltersStore = create<IStore>((set) => ({
  ...initialQueryParams,
  isFilterUpdated: false,
  updatetQueryParam: ({ key, value }) =>
    set((state) => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),
  reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true })),
}));

interface IGuestCartStore {
  items: ISimpleCartItem[];
  addItem: (product: IMovie, quantity: number, asSecondItem?: boolean) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
}

export const useGuestCartStore = create(
  persist<IGuestCartStore>(
    (set, get) => ({
      items: [],
      addItem: (product, quantity, asSecondItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          const updated = currentItems.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  asSecondItem,
                }
              : item
          );

          set({ items: updated });
        } else {
          set({
            items: [
              ...currentItems,
              {
                id: randomUUID(),
                product,
                quantity,
                asSecondItem,
              },
            ],
          });
        }
      },
      removeItem: (cartItemId: string) => {
        set({
          items: get().items.filter((item) => item.id !== cartItemId),
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "guestCartStore",
    }
  )
);
