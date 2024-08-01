import React from "react";
import { useDropzone } from "react-dropzone";
import { useIntl } from "react-intl";
import IntlMessages from "@crema/helpers/IntlMessages";
import { Button, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import {
  StyledContactForm,
  StyledContactFormAvatar,
  StyledContactFormBtn,
  StyledContactFormContent,
  StyledContactFormContentField,
  StyledContactFormContentItem,
  StyledContactFormFooter,
  StyledContactFormHeader,
  StyledContactFormHeaderTitle,
  StyledContactFormItemTitle,
  StyledContactModalScrollbar,
} from "./index.styled";
import { postDataApi, putDataApi, useGetDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";

import type {
  ContactObjType,
  LabelObjType,
} from "@crema/types/models/apps/Contact";
import { generateRandomUniqueNumber } from "@crema/helpers/Common";
import {MUTATION_UPSERT_INSERT_UPDATE_PROSPECTO} from "utils/Mutations/Administrative"
import { useMutation } from "@apollo/client";



type AddContactFormProps = {
  selectContact?: ContactObjType | null;
  userImage: string;
  setUserImage: (image: string) => void;
  onUpdateContact?: (contact: ContactObjType) => void;
  handleAddContactClose: () => void;
  reCallAPI?: () => void;
};

const AddContactForm: React.FC<AddContactFormProps> = ({
  userImage,
  selectContact,
  setUserImage,
  handleAddContactClose,
  onUpdateContact,
  reCallAPI,
}) => {
  const [{ apiData: labelList }] = useGetDataApi(
    "/api/contactApp/labels/list",
    []
  );

  const [Prospecto] = useMutation(MUTATION_UPSERT_INSERT_UPDATE_PROSPECTO);

  const saveData = async (data: any) => {
    console.log("data", data);
    
const 
  condition = {
    NOMBRES: data.NOMBRES,
    EMAIL: data.EMAIL,
    CONTACTO: data.CONTACTO,
    ID_EMPRESA: data.ID_EMPRESA,
    TIPO_CUENTA: data.TIPO_CUENTA,
    FECHA_NACIMIENTO: data.FECHA_NACIMIENTO,
    WEBSITE: data.WEBSITE,
    ID_PROVINCIA: data.ID_PROVINCIA,
    facebookId: data.facebookId,
    twitterId: data.twitterId
    
  }


console.log('condition', condition);



    try {
      const response = await Prospecto({
        variables: {
        condition: { condition }
        },
      });

  if (response) {
    console.log("response", response);
    infoViewActionsContext.fetchSuccess();
    handleAddContactClose(); // Cerrar modal después de guardar
  }
} catch (e) {
  infoViewActionsContext.fetchError(e.message);
}
};




  const infoViewActionsContext = useInfoViewActionsContext();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      ".pdf": [],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const { messages } = useIntl();

  const { Option } = Select;

  const onFinish = (values: any) => {
    if (values.birthday)
      values.birthday = dayjs(values.birthday).format("DD-MM-YYYY");
    if (selectContact) {
      const newContact = {
        id: selectContact.id,
        isStarred: selectContact.isStarred,
        isFrequent: selectContact.isFrequent,
        image: userImage,
        ...values,
      };
      putDataApi("/api/contactApp/contact/", infoViewActionsContext, {
        contact: newContact,
      })
        .then(() => {
          if (reCallAPI) {
            reCallAPI();
          }
          infoViewActionsContext.showMessage("Contact updated successfully!");
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });

      if (onUpdateContact) onUpdateContact(newContact);
    } else {
      const newContact = {
        id: generateRandomUniqueNumber(),
        isStarred: false,
        isFrequent: Math.random() > 0.5,
        image: userImage,
        ...values,
      };

      postDataApi("/api/contactApp/compose", infoViewActionsContext, {
        contact: newContact,
      })
        .then(() => {
          if (reCallAPI) {
            reCallAPI();
          }
          infoViewActionsContext.showMessage("Contact created successfully!");
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });

      handleAddContactClose();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  console.log("selectContact: ", selectContact);
  return (
    <StyledContactForm
      name="basic"
      initialValues={
        selectContact
          ? {
              ...selectContact,
              birthday: selectContact.birthday
                ? dayjs(selectContact.birthday, "MMM DD,YYYY")
                : "",
            }
          : {}
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledContactFormHeader>
        <Form.Item {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <label htmlFor="icon-button-file">
            <StyledContactFormAvatar src={userImage} />
          </label>
        </Form.Item>
        {selectContact ? (
          <StyledContactFormHeaderTitle>
            {selectContact.name}
          </StyledContactFormHeaderTitle>
        ) : null}
      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="contactApp.personalDetails" />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item
                className="form-field"
                name="NOMBRES"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder={messages["common.NOMBRES"] as string} />
              </Form.Item>

              <Form.Item
                className="form-field"
                name="APELLIDOS"
                rules={[{ required: true, message: "Please input your Last Name!" }]}
              >
                <Input placeholder={messages["Apellidos"] as string} />
              </Form.Item>
              
              <Form.Item className="form-field"
              name="SEXO"
              rules={[{ required: true, message: 'Por favor selecciona tu genero' }]}
              >
                <Select placeholder="Selecciona tu genero">
                  <Option value="masculino">Masculino</Option>
                  <Option value="femenino">Femenino</Option>
                  <Option value="otro">Otro</Option>
                  </Select>
                  </Form.Item>

              <Form.Item className="form-field" name="EMAIL">
                <Input placeholder={messages["common.email"] as string} />
              </Form.Item>

              <Form.Item className="form-field" name="CARGO">
                <Input placeholder={messages["Cargo"] as string} />
              </Form.Item>

              <Form.Item
                className="form-field"
                name="CEDULARNC"
                rules={[{ required: true, message: "Please input your RNC!" }]}
              >
                <Input placeholder={messages["RNC"] as string} />
              </Form.Item>

              <Form.Item
                className="form-field"
                name="PHONE"
                rules={[
                  { required: true, message: "Please input your Phone!" },
                ]}
              >
                <Input placeholder={messages["common.phone"] as string} />
              </Form.Item>

              {/* <Form.Item className="form-field" name="FECHA_NACIMIENTO">
                <DatePicker />
              </Form.Item> */}

              <Form.Item className="form-field" name="TIPO_CUENTA">
                <Select placeholder="Tipo de cuenta">
                  {labelList.map((label: LabelObjType) => {
                    return (
                      <Option value={label.id} key={label.id}>
                        {label.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item className="form-field" name="WEBSITE">
                <Input placeholder={messages["common.website"] as string} />
              </Form.Item>
            </StyledContactFormContentField>
          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="common.otherDetails" />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item className="form-field" name="ID_EMPRESA">
                <Input placeholder={messages["common.company"] as string} />
              </Form.Item>

              <Form.Item className="form-field" name="ID_PROVINCIA">
                <Input placeholder={messages["common.address"] as string} />
              </Form.Item>
            </StyledContactFormContentField>
          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="common.socialMedia" />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item className="form-field" name="facebookId">
                <Input placeholder={messages["common.facebookId"] as string} />
              </Form.Item>

              <Form.Item className="form-field" name="twitterId">
                <Input placeholder={messages["common.twitterId"] as string} />
              </Form.Item>
            </StyledContactFormContentField>
          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="common.notes" />
            </StyledContactFormItemTitle>

            <Form.Item className="form-field" name="NOTES">
              <Input.TextArea
                placeholder={messages["common.notes"] as string}
              />
            </Form.Item>
          </StyledContactFormContentItem>
        </StyledContactFormContent>

        <StyledContactFormFooter>
          
          <StyledContactFormBtn
            type="primary"
            ghost
            onClick={handleAddContactClose}
          > 
            <IntlMessages id="common.cancel" />
          </StyledContactFormBtn>
          <Button
          onClick={saveData}
          type="primary" style={{ marginTop: 16 }}
          
          >
           Guardar
          </Button>
        </StyledContactFormFooter>
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default AddContactForm;
