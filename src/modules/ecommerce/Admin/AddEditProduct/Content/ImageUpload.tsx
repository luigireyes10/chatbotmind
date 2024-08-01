import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  StyledTextPrimary,
  StyledThumb,
  StyledThumbInner,
  StyledThumbsContainer,
  StyledUploadWrapper,
} from "./index.styled";
import { FileType } from "@crema/types/models/ecommerce/EcommerceApp";

type Props = {
  uploadedFiles: FileType[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
  handleDelete?: (file: FileType) => void;
  onAddNewFile?: (file: FileType) => void;
};

const ImgUpload = ({
  uploadedFiles,
  setUploadedFiles,
  handleDelete,
  onAddNewFile,
}: Props) => {
  const dropzone = useDropzone({
    accept: {
      "image/png": [".png", ".jpeg", ".jpg"],
    },
    onDrop: (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      // Si solo se permite cargar una imagen a la vez, puedes hacer esto
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        onAddNewFile &&
          onAddNewFile({
            ...file,
            url: URL.createObjectURL(file),
          });
      }
    },
  });

  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);

  const thumbs = uploadedFiles?.map((file) => (
    <StyledThumb key={file.name}>
      <StyledThumbInner>
        <img alt="preview" src={file.preview} />
      </StyledThumbInner>
    </StyledThumb>
  ));

  return (
    <section className="container">
      <StyledUploadWrapper>
        <div {...dropzone.getRootProps({ className: "dropzone" })}>
          <input {...dropzone.getInputProps()} />
          <img
            src={"/assets/icon/upload.svg"}
            width={40}
            height={40}
            alt="upload"
          />

          <p>
            <StyledTextPrimary>
              Click para cargar o actualizar a una nueva imagen
            </StyledTextPrimary>
          </p>
          <p style={{ marginTop: 1 }}>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>

        <StyledThumbsContainer>{thumbs}</StyledThumbsContainer>
      </StyledUploadWrapper>
    </section>
  );
};

export default ImgUpload;
