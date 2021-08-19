import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  page: number;
  last_page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const generateButtons = (page: number, last_page: number): number[] => {
  const previousPages = [];
  const nextPages = [];

  for (let i = page - 1; i > page - 3; i--) {
    if (i > 1) {
      previousPages.push(i);
    }
  }

  for (let i = page + 1; i < page + 4; i++) {
    if (i < last_page) {
      nextPages.push(i);
    }
  }

  previousPages.reverse();

  return [...previousPages, page, ...nextPages];
};

function PaginationButtons({ page, last_page, setPage }: Props) {
  const [pages, setPages] = useState([0]);
  useEffect(() => {
    const pgs = generateButtons(page, last_page);
    setPages(pgs);
  }, [page, last_page]);

  const handleClick = (pageNumber: number) => {
    window.scrollTo(0, 0);
    setPage(pageNumber);
  };

  return (
    <Flex justify="center" align="flex-end" mb="10">
      {page > 1 && (
        <Button
          onClick={() => handleClick(1)}
          m="1"
          bgColor="accent"
          color="black"
        >
          1
        </Button>
      )}
      {page > 4 && (
        <Button m="1" bgColor="accent" color="black" disabled>
          ...
        </Button>
      )}

      {pages.map((p) => (
        <Button
          m="1"
          key={p}
          bgColor={p === page ? "black" : "accent"}
          color={p === page ? "accent" : "black"}
          onClick={() => handleClick(p)}
        >
          {p}
        </Button>
      ))}
      {page < last_page - 4 && (
        <Button m="1" bgColor="accent" color="black" disabled>
          ...
        </Button>
      )}
      {page < last_page && (
        <Button
          onClick={() => handleClick(last_page)}
          m="1"
          bgColor="accent"
          color="black"
        >
          {last_page}
        </Button>
      )}
    </Flex>
  );
}

export default PaginationButtons;
