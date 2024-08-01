import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { useRouter } from "next/router";
import {
  FolderObjType,
  LabelObjType,
  PriorityObjType,
  StaffObjType,
  StatusObjType,
  TodoObjType,
} from "@crema/types/models/apps/Todo";
import { APIDataProps } from "@crema/types/models/APIDataProps";
import { useQuery } from "@apollo/client";
import { QUERY_GET_FACTURA_ENC, QUERY_PRODUCTOS_CARRITO_COMPRAS } from "utils/Queries/Administrative";
import { dataFact } from "utils/dataDummy";

export const ViewMode = {
  List: "list",
  Calendar: "calendar",
};

export type TodoContextType = {
  labelList: LabelObjType[];
  folderList: FolderObjType[];
  priorityList: PriorityObjType[];
  staffList: StaffObjType[];
  statusList: StatusObjType[];
  taskLists: APIDataProps<TodoObjType[]>;
  dataFact: any;
  loadingFact: any;
  loading: boolean;
  page: number;
  viewMode: string;
  folder: string;
  label: string;
};

export type TodoActionContextType = {
  setTodoData: (data: APIDataProps<TodoObjType[]>) => void;
  setQueryParams: (data: object) => void;
  onPageChange: (data: number) => void;
  reCallAPI: () => void;
  setPage: (data: number) => void;
  setViewMode: (data: string) => void;
};

const ContextState: TodoContextType = {
  labelList: [],
  folderList: [],
  priorityList: [],
  staffList: [],
  statusList: [],
  taskLists: {} as APIDataProps<TodoObjType[]>,
  dataFact: [],
  loadingFact: {},

  loading: false,
  page: 0,
  viewMode: "list",
  folder: "",
  label: "",
};

const TodoContext = createContext<TodoContextType>(ContextState);
const TodoActionsContext = createContext<TodoActionContextType>({
  setTodoData: (data: APIDataProps<TodoObjType[]>) => {},
  setQueryParams: (data: object) => {},
  onPageChange: (data: number) => {},
  reCallAPI: () => {},
  setPage: (data: number) => {},
  setViewMode: (data: string) => {},
});

export const useTodoContext = () => useContext(TodoContext);

export const useTodoActionsContext = () => useContext(TodoActionsContext);

type Props = {
  children: ReactNode;
};
export const TodoContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const { all, asPath } = router.query;
  let folder = "",
    label = "";
  if (all?.length === 2) {
    label = all[1];
  } else if (all?.length === 1) {
    folder = all[0];
  }

  const [viewMode, setViewMode] = useState(ViewMode.List);
  const [{ apiData: labelList }] = useGetDataApi<LabelObjType[]>(
    "/api/todo/labels/list"
  );
  const [{ apiData: priorityList }] = useGetDataApi<PriorityObjType[]>(
    "/api/todo/priority/list"
  );
  const [{ apiData: staffList }] = useGetDataApi<StaffObjType[]>(
    "/api/todo/staff/list"
  );
  const [{ apiData: folderList }] = useGetDataApi<FolderObjType[]>(
    "/api/todo/folders/list",
    []
  );
  const [{ apiData: statusList }] = useGetDataApi<StatusObjType[]>(
    "/api/todo/status/list",
    []
  );
  const [page, setPage] = useState(0);

  const [
    { apiData: taskLists, loading },
    { setQueryParams, setData: setTodoData, reCallAPI },
  ] = useGetDataApi<APIDataProps<TodoObjType[]>>(
    "/api/todo/task/list",
    undefined,
    {},
    false
  );


  // const { loading: loadingFact, data: dataFact, error: errorFact } = useQuery(QUERY_GET_FACTURA_ENC, {
  //   variables: { condition: { ID_EMPRESA: "1", ID_TIPO_TRANS: "FAT" } },
  //   fetchPolicy: "cache-first",
  // });

  useEffect(() => {
    setPage(0);
  }, [asPath]);

  useEffect(() => {
    if (folder || label)
      setQueryParams({
        type: all?.[0],
        name: all?.[1],
        page: page,
      });
  }, [page, all]);

  const onPageChange = (value: number) => {
    setPage(value);
  };

  return (
    <TodoContext.Provider
      value={{
        folder,
        label,
        labelList,
        priorityList,
        staffList,
        statusList,
        folderList,
        taskLists,
        dataFact,
        loading,
        page,
        viewMode,
      }}
    >
      <TodoActionsContext.Provider
        value={{
          setTodoData,
          onPageChange,
          setQueryParams,
          reCallAPI,
          setPage,
          setViewMode,
        }}
      >
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
