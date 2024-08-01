import React from "react";
import AppCard from "@crema/components/AppCard";
import ImgUpload from "./ImageUpload";
import AppScrollbar from "@crema/components/AppScrollbar";
import { StyledDetailTextarea, StyledText, StyledTextMb } from "./index.styled";
import { Form, Col, Input, FormInstance, Image } from "antd";
import { FileType } from "@crema/types/models/ecommerce/EcommerceApp";
import AppRowContainer from "@crema/components/AppRowContainer";

type Props = {
  form: FormInstance;
  isEdit?: boolean;
  uploadedFiles: FileType[];
  setUploadedFiles?: React.Dispatch<React.SetStateAction<FileType[]>>;
  uploadedFilesIcon: FileType[];
  setUploadedFilesIcon?: React.Dispatch<React.SetStateAction<FileType[]>>;
};

const ProductContent = ({
  setUploadedFiles,
  uploadedFiles,
  uploadedFilesIcon,
  setUploadedFilesIcon,
  isEdit,
  form,
}: Props) => {
  const generateRandomUniqueNumber = () => {
    // Implement your logic to generate a random unique number here
  };

  // console.log("uploadedFiles", uploadedFiles);

  const handleDelete = (fileToDelete) => () => {
    setUploadedFiles((files) =>
      files.filter((file) => file.id !== fileToDelete.id)
    );
    console.log("Deleted");
  };

  const onAddNewFile = (newFile) => {
    const file = {
      ...newFile,
      id: generateRandomUniqueNumber(), // Asegúrate de tener una función para generar un número único
      url: `/assets/images/productos/${newFile.path}`, // Modifica aquí para usar el prefijo deseado y el nombre del archivo
    };
    setUploadedFiles((files) => files.concat(file));

    // Actualiza el valor del campo "FOTO_CLASIF" con la URL modificada del nuevo archivo
    form.setFieldsValue({ DEFAULT_RUTA_DOC: file.url });
  };

  const handleDeleteIcon = (fileToDelete) => () => {
    setUploadedFilesIcon((files) =>
      files?.filter((file) => file.id !== fileToDelete.id)
    );
    console.log("Deleted");
  };

  const onAddNewFileIcon = (newFile) => {
    const file = {
      ...newFile,
      id: generateRandomUniqueNumber(), // Asegúrate de tener una función para generar un número único
      url: `/assets/images/productos/${newFile.path}`, // Modifica aquí para usar el prefijo deseado y el nombre del archivo
    };
    setUploadedFilesIcon((files) => files.concat(file));

    // Actualiza el valor del campo "FOTO_CLASIF" con la URL del nuevo archivo
    form.setFieldsValue({ ICONO_PRODUCTO: file.url });
  };

  return (
    <AppRowContainer>
      <AppScrollbar style={{ height: "700px" }}>
        <Col xs={24} lg={16}>
          <AppCard>
            <Form.Item label="Product Name" name="NOMBRE">
              <Input placeholder="Product Name" />
            </Form.Item>

            <Form.Item label="Description" name="DESC_PRODUCTO">
              <StyledDetailTextarea
                theme="snow"
                placeholder="Description here"
              />
            </Form.Item>

            <Form.Item label="Foto Producto" name="DEFAULT_RUTA_DOC">
              <Input readOnly value={form.getFieldValue("DEFAULT_RUTA_DOC")} />
            </Form.Item>

            <ImgUpload
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
              handleDelete={handleDelete}
              onAddNewFile={onAddNewFile}
            />

            <Form.Item label="Image Hover" name="ICONO_PRODUCTO">
              <Input readOnly value={form.getFieldValue("ICONO_PRODUCTO")} />
            </Form.Item>

            <ImgUpload
              uploadedFiles={uploadedFilesIcon}
              setUploadedFiles={setUploadedFilesIcon}
              handleDelete={handleDeleteIcon}
              onAddNewFile={onAddNewFileIcon}
            />
          </AppCard>
        </Col>
      </AppScrollbar>
    </AppRowContainer>
  );
};

export default ProductContent;
