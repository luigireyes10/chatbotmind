import React, { useState, useEffect } from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import axios from "axios";
import PostItem from "../Feed/post/contextinfoview/index"; // Asegúrate de que la ruta sea correcta
import {
  StyledFeed,
  LateralFeed,
  Category,
  Publication,
  Eclipse,
  PublicationProducts,
  StyledLoading,
} from "./index.styled";
import { Post } from "@crema/modules/ecommerce/Perfil";

import socket from "pages/socket";

const Feed = () => {
  const [postList, setPostList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [postPerfil, setPostPerfil] = useState([]);
  console.log(postPerfil);

  const fetchPostPerfil = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4005/api/postperfil/60b8d2bdf1d5c12a8a8d0f6b"
      );
      if (response.status === 200) {
        const reversedData = response.data.reverse();
        setPostPerfil(reversedData);
        console.log(reversedData);
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

  console.log(postPerfil);

  useEffect(() => {
    fetchPostPerfil();

    socket.on("postReceived", (dataGet) => {
      console.log("Nuevo post recibido:", dataGet);
dataGet.map((dataGet) => {
      const filteredData = {

        _id: dataGet?._id,
        ID_POST: dataGet?.ID_POST,
        CONTENIDO_POST: dataGet?.CONTENIDO_POST,
        DOC_RUTA: dataGet?.DOC_RUTA,
        FECHA_CREACION: dataGet?.FECHA_CREACION,
      };

      console.log(filteredData);
      
      setPostPerfil((prevPostList) => [filteredData, ...prevPostList]);
    });
  })
    // Limpiar el evento al desmontar el componente
    return () => {
      socket.off("postReceived");
    };
  }, []);

  const fetchMoreData = () => {
    // Fetch additional data and update postList
    // For now, we'll just simulate more data loading
    if (postList.length >= 50) {
      setHasMore(false);
      return;
    }
    // Simulate fetching more data
    setTimeout(() => {
      setPostList(postList.concat(Array.from({ length: 10 })));
    }, 1500);
  };

  return (
    <StyledFeed>
      <LateralFeed>
        <Category>
          <h1>
            <IntlMessages id="dashboard.Category.Home" />
          </h1>
          <div className="eclipse-container">
            <div className="eclipse-pair">
              <Eclipse>
                <img
                  src="/assets/images/Categories/mingcutg.svg"
                  alt="Category-Img"
                  className="image"
                />
              </Eclipse>
              <Eclipse>
                <img
                  src="/assets/images/Categories/tshirt.svg"
                  alt="Category-Img"
                  className="image"
                />
              </Eclipse>
              <Eclipse>
                <img
                  src="/assets/images/Categories/heeled-shoes.svg"
                  alt="Category-Img"
                  className="image"
                />
              </Eclipse>
            </div>
            <div className="eclipse-pair">
              <Eclipse>
                <img
                  src="/assets/images/Categories/mug.svg"
                  alt="Category-Img"
                  className="image"
                />
              </Eclipse>
              <Eclipse>
                <img
                  src="/assets/images/Categories/tenny.svg"
                  alt="Category-Img"
                  className="image"
                />
              </Eclipse>
              <Eclipse>
                <img
                  src="/assets/images/Categories/paper.svg"
                  alt="Category-Img"
                  className="image"
                />
              </Eclipse>
            </div>
          </div>
          <span className="space"></span>
        </Category>
      </LateralFeed>

      <Publication>
        <div>
          <Post wallData={postPerfil} setPostList={setPostList} />
        </div>

        <SimpleBar
          style={{ maxHeight: "100vh", overflowX: "hidden", zIndex: 1 }}
        >
          <PublicationProducts>
            <InfiniteScroll
              dataLength={postList.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={
                <StyledLoading>
                  <div className="loader"></div>
                </StyledLoading>
              }
              endMessage={
                <p>
                  <b>
                    <IntlMessages id="common.notPost" />
                  </b>
                </p>
              }
            >
              <div>
                {postPerfil ? (
                     [...new Map(postPerfil.map(post => [post.ID_POST, post])).values()].map((post, index) => (
                 
                    console.log(post),
                    
                    <PostItem
                      key={post.ID_POST}
                      post={post}
                      wallData={postPerfil}
                      setPostList={setPostList}
                      isLast={post.ID_POST === postPerfil.length - 1}
                    />
                  ))
                ) : (
                  <p>Cargando postperfil...</p>
                )}
              </div>
            </InfiniteScroll>
          </PublicationProducts>
        </SimpleBar>
      </Publication>
    </StyledFeed>
  );
};

export default Feed;
