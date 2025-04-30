export interface ArticleData {
  _id: string;
  thumbnailUrl: string;
  tags: string[];
  category?: string;
  title: string;
  preview: string;
  content: string;
  createdAt: string;
}

export type PaginationData = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};
