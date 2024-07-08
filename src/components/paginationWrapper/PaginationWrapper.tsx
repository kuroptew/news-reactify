import { IPaginationProps } from "../../types";
import Pagination from "../pagination/Pagination";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

function PaginationWrapper({ top, bottom, children, ...paginationProps }: Props & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}

export default PaginationWrapper;
