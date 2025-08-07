interface IPagination {
  numberPages: number; // сколько всего страниц
  changePage: (page: string) => void; // функция для изменения страницы
  currentPage?: string; // текущая страница
}

const Pagination = ({ numberPages, changePage, currentPage }: IPagination) => {
  return (
    <div>
      {Array.from({ length: numberPages > 1 ? numberPages : 1 }).map((_, i) => {
        const pageNumber = (i + 1).toString();
        return (
          <button
            onClick={() => changePage(pageNumber)}
            disabled={currentPage === pageNumber}
          ></button>
        );
      })}
    </div>
  );
};

export default Pagination;
