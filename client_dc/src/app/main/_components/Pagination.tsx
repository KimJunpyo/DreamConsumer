interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  curruntPage: number;
  handler?: (e: number) => void;
}

export default function Pagination({
  totalPosts,
  postsPerPage,
  curruntPage,
  handler,
}: PaginationProps) {
  const numOfPage = Math.ceil(totalPosts / postsPerPage);
  let totalButtons = new Array(numOfPage).fill(null);
  totalButtons = totalButtons.map((_, index) => index + 1);

  return (
    <div>
      {totalButtons.map((pageNumber, idx) => {
        return (
          <button
            key={idx}
            onClick={handler?.bind(null, pageNumber)}
            className={`mr-5 text-xl  ${
              curruntPage === pageNumber ? 'font-neb text-grey-text' : 'font-nr text-blue-secondary'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}
