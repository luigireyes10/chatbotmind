import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import { useIntl } from "react-intl";
import ChangeStaff from "./ChangeStaff";
import TaskStatus from "./TaskStatus";
import TaskPriority from "./TaskPriority";
import { Col, Input, Row } from "antd";
import TaskLabel from "./TaskLabel";
import { FiSend } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai";
import AppIconButton from "@crema/components/AppIconButton";
import {
  StyledDetailContent,
  StyledTodoDetailBtn,
  StyledTodoDetailContentHeader,
  StyledTodoDetailContentHeaderLabel,
  StyledTodoDetailContentHeaderLeft,
  StyledTodoDetailContentHeaderTag,
  StyledTodoDetailContentHeaderTagBtn,
  StyledTodoDetailFooter,
  StyledTodoDetailPara,
  StyledTodoDetailStaff,
  StyledTodoDetailStaffEdit,
  StyledTodoDetailStaffEditBtnView,
  StyledTodoDetailStaffRow,
  StyledTodoDetailStatus,
  StyledTodoDetailStatusPri,
  StyledTodoDetailTextAreaForm,
  StyledTodoDivider,
} from "../index.styled";
import { useGetDataApi, putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import {
  CommentsLists,
  AssignedStaff,
  TodoDatePicker,
  TaskCreatedByInfo,
  TaskLabels,
} from "@crema/modules/apps/ToDo";
import { StaffObjType, TodoObjType } from "@crema/types/models/apps/Todo";
import { getDateObject, getFormattedDate } from "@crema/helpers/DateHelper";
import { CRMType } from "@crema/types/models/dashboards/CRM";
import AppRowContainer from "@crema/components/AppRowContainer";
import DealsNew from "@crema/modules/dashboards/CRM/DealsNew";

type TaskDetailBodyProps = {
  selectedTask: TodoObjType;
  DataBuscaFactura: any;
  onUpdateSelectedTask: (data: TodoObjType) => void;
};

const TaskDetailBody: React.FC<TaskDetailBodyProps> = ({
  selectedTask,
  DataBuscaFactura,
  onUpdateSelectedTask,
}) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { user } = useAuthUser();
  const [{ apiData: staffList }] = useGetDataApi<StaffObjType[]>("/api/todo/staff/list", []);
  const [{ apiData: crmData, loading }] = useGetDataApi<CRMType>("/dashboard/crm");
  const [statecrmData, setstatecrmData] = useState<CRMType>();

  useEffect(() => {
    if (crmData) {
      console.log(crmData.dealsTableData)
      setstatecrmData(crmData)
    }
  }, [crmData])

  const dataproduct = DataBuscaFactura?.GetOneEmFacturaProductos?.products

  const [isEdit, setEdit] = useState(false);
  const [title, setTitle] = useState(selectedTask.title);
  const [content, setContent] = useState(selectedTask.content);
  const [comment, setComment] = useState("");
  const [scheduleDate, setScheduleDate] = useState(getDateObject(selectedTask.startDate));
  const [selectedStaff, setStaff] = useState(selectedTask.assignedTo);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(60);
  }, []);

  const onClickEditButton = () => {
    setEdit(true);
  };

  const onDoneEditing = () => {
    const task = selectedTask;
    task.content = content;
    task.title = title;
    task.startDate = getFormattedDate(scheduleDate);
    task.assignedTo = selectedStaff;
    putDataApi<{ task: TodoObjType }>("/api/todoApp/task/", infoViewActionsContext, {
      task,
    })
      .then((data) => {
        onUpdateSelectedTask(data.task);
        infoViewActionsContext.showMessage("Task Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    console.log("onDoneEditing: ", task);
    setEdit(!isEdit);
  };

  const onAddComments = () => {
    const task = selectedTask;
    task.comments = task.comments.concat({
      comment: comment,
      name: user.displayName ? user.displayName : "User",
      image: user.photoURL,
      date: dayjs().format("MMM DD"),
    });
    putDataApi<{ task: TodoObjType }>("/api/todoApp/task/", infoViewActionsContext, {
      task,
    })
      .then((data) => {
        onUpdateSelectedTask(data.task);
        infoViewActionsContext.showMessage("Task Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    setComment("");
  };

  const handleStaffChange = (value: number) => {
    const newStaff = staffList.find((staff: StaffObjType) => staff.id === value) as StaffObjType;
    setStaff((staff) => {
      return { ...staff, ...newStaff };
    });
  };

  const { messages } = useIntl();

  return (
    <StyledDetailContent>
      <StyledTodoDetailContentHeader>
        <StyledTodoDetailContentHeaderLeft>
          <h2>{DataBuscaFactura?.GetOneEmFacturaProductos.NOMBRE_CLIENTE}</h2>
        </StyledTodoDetailContentHeaderLeft>

       {/*  <TaskCreatedByInfo
          createdBy={selectedTask.createdBy}
          createdOn={selectedTask.createdOn}
        /> */} 
      </StyledTodoDetailContentHeader>

      <Row gutter={[16, 16]}>
       
        <Col span={8}>
          <StyledTodoDetailPara>
            <strong>ID Moneda:</strong> {DataBuscaFactura?.GetOneEmFacturaProductos.ID_MONEDA}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>ID Cliente:</strong> {DataBuscaFactura?.GetOneEmFacturaProductos.ID_CLIENTE}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>Dirección:</strong>{" "}
            {DataBuscaFactura?.GetOneEmFacturaProductos.DIRECCION_LINEA1}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>Estado Documento:</strong>{" "}
            {DataBuscaFactura?.GetOneEmFacturaProductos.ESTADO_DOCUMENTO}
          </StyledTodoDetailPara>
        </Col>

      
        <Col span={8}>
          <StyledTodoDetailPara>
            <strong>Estado:</strong> {DataBuscaFactura?.GetOneEmFacturaProductos.ESTADO}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>Nombre del cliente:</strong>{" "}
            {DataBuscaFactura?.GetOneEmFacturaProductos.NOMBRE_CLIENTE}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>Apellidos Cliente:</strong>{" "}
            {DataBuscaFactura?.GetOneEmFacturaProductos.APELLIDOS_CTE}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>Fecha de Vencimiento:</strong>{" "}
            {dayjs(DataBuscaFactura?.GetOneEmFacturaProductos.FECHA_VENC).format(
              "YYYY-MM-DD"
            )}
          </StyledTodoDetailPara>
        </Col>

        
        <Col span={8}>
          <StyledTodoDetailPara>
            <strong>Despachada:</strong>{" "}
            {DataBuscaFactura?.GetOneEmFacturaProductos.DESPACHADA ? "Sí" : "No"}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>Fecha de Despacho:</strong>{" "}
            {DataBuscaFactura?.GetOneEmFacturaProductos.FECHA_DESP
              ? dayjs(DataBuscaFactura?.GetOneEmFacturaProductos.FECHA_DESP).format(
                  "YYYY-MM-DD"
                )
              : "N/A"}
          </StyledTodoDetailPara>
          <StyledTodoDetailPara>
            <strong>ID Pedido:</strong>{" "}
            {DataBuscaFactura?.GetOneEmFacturaProductos.ID_PEDIDO}
          </StyledTodoDetailPara>
        </Col>
      </Row>
      <br  />
      <AppRowContainer>
        <Col lg={24} xl={24}>
          {statecrmData && <DealsNew dealsTableData={statecrmData?.dealsTableData} dataproduct={dataproduct} />}
        </Col>
      </AppRowContainer>

      <StyledTodoDivider />
    </StyledDetailContent>
  );
};

export default TaskDetailBody;
