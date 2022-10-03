export interface ITab {
  tab?: string;
  addNew?: boolean;
  defaultTab?: boolean;
}

export interface IColumn {}

export interface IModal {
  ModalType?: string;
  ModalDetail?: Record<string, never> | any;
  BoardTab?: string;
}

export interface ISubTask {
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  id: string;
  question?: string;
  description?: string;
  solution?: string;
  status?: string;
  subtasks?: ISubTask[];
}

export interface IColumn {
  id: string | number;
  name?: string;
  tasks?: ITask[];
}

export interface IBoard {
  id: string;
  name?: string;
  columns?: IColumn[];
}
