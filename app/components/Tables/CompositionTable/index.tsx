import { CollapseRowRoot } from "./CollapseRow/CollapseRowRoot";
import { TBody } from "./TBody";
import { TDataCell } from "./TDataCell";
import { THead } from "./THead";
import { THeadCell } from "./THeadCell";
import { TRoot } from "./TRoot";
import { TRow } from "./TRow";

export const Table = {
  Root: TRoot,
  Head: THead,
  Body: TBody,
  Row: TRow,
  HeadCell: THeadCell,
  Cell: TDataCell,
  CollapseRow: CollapseRowRoot,
};