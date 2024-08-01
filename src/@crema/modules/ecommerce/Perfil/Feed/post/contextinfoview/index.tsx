import React, { useEffect, useState } from "react";
import Attachments from "./Attachments";
import PostStats from "./PostStats";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { EllipsisOutlined } from "@ant-design/icons";
import { getTimeFromNow } from "@crema/helpers/DateHelper";
import { useQuery } from "@apollo/client";
import { QUERY_PERFIL } from "utils/Queries/Administrative";
import { Dropdown, Menu } from "antd";
import { Button, Image } from "antd";
import axios from "axios";
import {
  StyledPostItemAvatar,
  StyledPostItemCard,
  StyledPostItemExtraBtn,
  StyledPostItemPara,
  StyledPostItemUser,
  StyledPostItemUserInfo,
} from "../contextinfoview/style/index.styled";
import { PostObjType, WallDataType } from "@crema/types/models/apps/Wall";

type PostItemProps = {
  post: PostObjType;
  wallData: WallDataType;
  setPostList: any;
  isLast: boolean;
};

const PostItem: React.FC<PostItemProps> = ({
  post,
  wallData,
  setPostList,
  isLast,
}) => {
  const { owner, message, date, attachments, comments } = post;
  const [postPerfil, setPostPerfil] = useState(null);
  console.log(post);
  console.log(wallData);
  
  const {
    loading,
    data: apiData,
    error,
  } = useQuery(QUERY_PERFIL, {
    variables: { condition: { ID_EMPRESA: "1", ID_USER: "1", ID_PERFIL: "1" } },
    fetchPolicy: "cache-first",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  console.log(apiData);

  const getTitle = () => (
    <StyledPostItemUser>
      <StyledPostItemAvatar src={apiData?.GetEmPerfil?.FOTO_PERFIL} />
      <StyledPostItemUserInfo>
        <h3>{apiData?.GetEmPerfil?.NOMBRE_COMPLETO}</h3>
        <p>{getTimeFromNow(date)}</p>
      </StyledPostItemUserInfo>
    </StyledPostItemUser>
  );

  const handleDelete = async (postId: string) => {
    console.log("idpost:", postId);
    await fetchPostPerfil(postId);
  };
  

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => post._id && handleDelete(post._id.toString())}
      >
        Eliminar
      </Menu.Item>
    </Menu>
  );

  const fetchPostPerfil = async (postId: string) => {
    try {
      const response = await axios.put(
        `http://localhost:4005/api/postperfil/${postId}`
      );
      if (response.status === 200) {
        setPostPerfil(response.data);
      } else {
        console.log(
          "Hubo un problema al obtener el postperfil de la base de datos"
        );
      }
    } catch (error) {
      console.error(
        "Error al obtener el postperfil de la base de datos:",
        error
      );
    }
  };
  const filteredAttachments = wallData.filter(attachment => attachment.ID_POST === post.ID_POST);
console.log(filteredAttachments);


const uniquePosts = wallData.filter((post, index, self) =>
  index === self.findIndex((p) => p.ID_POST === post.ID_POST)
);
console.log(uniquePosts);


  return (

    <>
 {/* {Array.isArray(uniquePosts) ? (
      uniquePosts.map((post, index) => {

        console.log(post);
        
 
        const isLast = index === uniquePosts.length - 1;
        const filteredAttachments = []; // Asumiendo que tienes una lógica para filtrar los attachments

        return (
      <h1>{post.DOC_RUTA}</h1> */}
    
    <StyledPostItemCard
     title={getTitle()}
       className={isLast ? "" : "mb-5"}
       extra={
         <StyledPostItemExtraBtn>
           <Dropdown overlay={menu}>
           <EllipsisOutlined />
           </Dropdown>
         </StyledPostItemExtraBtn>
       }
     >

  <>
    {post.CONTENIDO_POST ? <StyledPostItemPara>{post.CONTENIDO_POST}</StyledPostItemPara> : null}
    {post.DOC_RUTA  ? <Attachments attachments={filteredAttachments} /> : null}
  </>
       <PostStats post={post} setPostList={setPostList} />
       <AddComment
         postId={post.id}
         wallData={wallData}
         setPostList={setPostList}
       />
       {comments?.length > 0 && <CommentsList comments={comments} />}
     </StyledPostItemCard>

</>
  );
};

export default PostItem;
