import React, { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
import AppIconButton from "@crema/components/AppIconButton";
import { MdOutlineAttachFile } from "react-icons/md";
import {
  StyledAddComment,
  StyledAddCommentInput,
  StyledAddCommentUser,
  StyledAddCommentUserInfo,
  StyledAddSuffixAction,
  StyledPostItemAvatar,
} from "./index.styled";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { postDataApi } from "@crema/hooks/APIHooks";
import { useQuery } from "@apollo/client";
import { QUERY_PERFIL } from "utils/Queries/Administrative"; // Asegúrate de tener la consulta correcta aquí

type AddCommentProps = {
  postId: number;
  wallData: any;
  setPostList: any;
};

const AddComment: React.FC<AddCommentProps> = ({
  postId,
  wallData,
  setPostList,
}) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const [comment, setComment] = useState("");

  const { loading, data, error } = useQuery(QUERY_PERFIL, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1", ID_PERFIL: "1" } },
    fetchPolicy: "cache-first",
  });

  const submitComment = (event: any) => {
    if (event.key === "Enter") {
      const newComment = {
        author: {
          name: data?.GetEmPerfil?.NOMBRE_COMPLETO,
          profilePic: data?.GetEmPerfil?.FOTO_PERFIL,
          id: data?.GetEmPerfil?.ID_USER,
        },
        comment,
      };
      postDataApi("/wall/posts/comments", infoViewActionsContext, {
        postId,
        comment: newComment,
      })
        .then((data) => {
          setPostList(data);
          infoViewActionsContext.showMessage("Comment Added Successfully!");
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
      setComment("");
    }
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <StyledAddComment>
      <StyledPostItemAvatar src={data?.GetEmPerfil?.FOTO_PERFIL} />
      <StyledAddCommentUser>
        <StyledAddCommentUserInfo>
          <StyledAddCommentInput
            placeholder="Write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={submitComment}
            suffix={
              <StyledAddSuffixAction>
                <AppIconButton icon={<SmileOutlined />} />
                <AppIconButton icon={<MdOutlineAttachFile />} />
              </StyledAddSuffixAction>
            }
          />
        </StyledAddCommentUserInfo>
      </StyledAddCommentUser>
    </StyledAddComment>
  );
};

export default AddComment;
