import React, { useEffect } from "react";
import TaskDetailHeader from "./TaskDetailHeader";
import TaskDetailBody from "./TaskDetailBody";
import { useRouter } from "next/router";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { TodoObjType } from "@crema/types/models/apps/Todo";
import { useLazyQuery } from "@apollo/client";
import { QUERY_GET_FACTURA_DETAIL } from "utils/Queries/Administrative";
import { DataBuscaFactura } from "utils/dataDummy";




 const datatask = {
  id: 345656,
  title: 'Check the documents of audit',
  priority: { id: 4354454, name: 'Low', type: 3, color: '#52c41a' },
  isStarred: false,
  isReplied: false,
  label: [],
  hasAttachments: false,
  sentAt: '10.30am',
  startDate: 'Jun 02,2024',
  endDate: 'Jun 05,2024',
  scheduleMobile: '6:30 PM',
  folderValue: 123,
  image: '/assets/images/dummy2.jpg',
  assignedTo: {
    id: 506,
    name: 'Marcus Vaughan',
    image: '/assets/images/avatar/A28.jpg'
  },
  createdBy: { name: 'Nathan David', image: '/assets/images/avatar/A26.jpg' },
  createdOn: 'Jun 02,2024',
  status: 3,
  comments: [
    {
      comment: 
        'Call John at 8:00 PM to cross check the things and get a feedback too.',
      name: 'Baichang Bhutia',
      image: '/assets/images/avatar/A13.jpg',
      date: 'Jun 22,2024',
      time: '2:05am'
    }
  ],
  content: 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
}

const TaskDetail = () => {
  const { query } = useRouter();
  const [{ apiData: selectedTask }, { setQueryParams, setData }] =
    useGetDataApi<TodoObjType>(
      "/api/todoApp/task/",
      undefined,
      { id: query?.all?.[query.all.length - 1] },
      false
    );

  useEffect(() => {
    setQueryParams({ id: query.all?.[query.all.length - 1] });

    console.log({ id: query.all?.[query.all.length - 1] })
  }, [query.all]);


  const [getBuscaFactura, { data: DataBuscaFactura123  , loading: loadingBuscaFactura , error  }] = useLazyQuery(QUERY_GET_FACTURA_DETAIL)

  const funtBuscaPerfil = async ( data)=>{

    console.log(data)
    await getBuscaFactura({
      variables: {
        condition: { ID_EMPRESA: "1" ,ID_TIPO_TRANS: "FAT", ID_DOCUMENTO: "3" },
        fetchPolicy: 'cache-first'
      },
    })
  
  }


  useEffect( () => {
  
    console.log({ id: query.all?.[query.all.length - 1] })
    funtBuscaPerfil({ id: query.all?.[query.all.length - 1] })
  
}, [query.all]);


useEffect(() => {
if(DataBuscaFactura){
  console.log(DataBuscaFactura)
}
}, [DataBuscaFactura])


useEffect(() => {
  if(selectedTask){
    console.log(selectedTask)
  }
  }, [selectedTask])


  const onUpdateSelectedTask = (data: TodoObjType) => {
    setData(data);
  };

  // if (!selectedTask) {
  //   return null;
  // }
  // if (loadingBuscaFactura) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  return (
    <>
      <AppsHeader>
        <TaskDetailHeader
          selectedTask={datatask}
          DataBuscaFactura={DataBuscaFactura}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody
          selectedTask={datatask}
          DataBuscaFactura={DataBuscaFactura}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
