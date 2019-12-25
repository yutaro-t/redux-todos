export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
}

export interface Todo {
  id: number,
  text: string,
  completed: boolean
}