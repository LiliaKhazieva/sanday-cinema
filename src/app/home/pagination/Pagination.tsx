import s from "./Pagination.module.scss";
interface IPagination {
  numberPages: number; // сколько всего страниц
  changePage: (page: string) => void; // функция для изменения страницы
  currentPage?: string; // текущая страница
}

const Pagination = ({ numberPages, changePage, currentPage }: IPagination) => {
  return (
    <div>
      {Array.from({ length: numberPages > 1 ? Math.ceil(numberPages) : 1 }).map(
        (_, i) => {
          const pageNumber = (i + 1).toString();
          return (
            <button
              className={s.btn}
              key={i}
              onClick={() => changePage(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          );
        }
      )}
    </div>
  );
};

export default Pagination;
