export enum SortPropertyEnum {
  RATING_DESK = "rating",
  RATING_ASK = "-rating",
  PRICE_DESK = "price",
  PRICE_ASK = "-price",
  TITLE_DESK = "title",
  TITLE_ASK = "-title",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}
