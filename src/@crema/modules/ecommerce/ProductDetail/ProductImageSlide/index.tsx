import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Button } from "antd";
import { useRouter } from "next/router";
import {
  CommentOutlined,
  DislikeOutlined,
  HeartFilled,
  HeartOutlined,
  LikeOutlined,
  PictureOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import {
  StyledProductFav,
  StyledProductImageSlide,
  StyledProductImageSlideAction,
  StyledProductImageSlideRoot,
  StyledProductImageSlideIcons,
  StyledProductImageSlideIcon,
  StyledProductImageLike,
  StyledDots,
  StyledArticle,
  StyledContentCompartir,
  StyledContetnFavorite,
} from "./index.styled";
import { postDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import type { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";
import AppMedialViewer from "@crema/components/AppMedialViewer";
import {
  StyledPostAttachment,
  StyledPostAttachmentCount,
  StyledPostAttachmentImgItem,
} from "@crema/modules/apps/Wall/PostsList/index.styled";

import Image from "next/image";
import { useMutation } from "@apollo/client";
import { MUTATION_ADD_WISHLIST_PROD } from "utils/Mutations/Administrative";
import CartsCompartir from "../Compartir/index";
import { Modal, Rate } from "antd";
type Props = {
  product: ProductDataType;
};
const ProductImageSlide = ({ product }: Props) => {
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(-1);
  const [isFavorite, setIsFavorite] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(product);

  const slide = () => [
    <img key={crypto.randomUUID()} src={product.image[value].src} alt="" />,
  ];
  const slides = product.image.map((data, index) => (
    <img key={index} src={data.src} alt="" />
  ));
  const onChange = (value: number) => {
    setValue(value);
  };

  const onClose = () => {
    setIndex(-1);
  };

  const [AddWishList] = useMutation(MUTATION_ADD_WISHLIST_PROD);
  const OnFavorite = async () => {
    try {
      const response = await AddWishList({
        variables: {
          condition: {
            ESTADO: "A",
            ID_WISHL_PROD: "WPROD",
            ID_EMPRESA: "1",
            ID_PRODUCTO: "1",
            ID_USER: "1",
          },
        },
      });

      //console.log('response', response)
      if (response) {
        // showNotification({
        //   message: `Caja Cerrada Correctamente`,
        //   type: 'success',
        // })

        console.log("response", response);

        console.log("product.title", product.title);

        infoViewActionsContext.showMessage(
          `${product.title} added to cart successfully`
        );
        //refetch && refetch()
      }
    } catch (e) {
      infoViewActionsContext.fetchError(e.message);
    }

    setIsFavorite(!isFavorite);
  };

  const OnLike_Dislike = async (like) => {
    try {
      const response = await AddWishList({
        variables: {
          condition: {
            ESTADO: "A",
            ID_WISHL_PROD: "WPROD",
            ID_EMPRESA: "1",
            ID_PRODUCTO: "1",
            ID_USER: "1",
            LIKE_PROD: like,
          },
        },
      });

      //console.log('response', response)
      if (response) {
        // showNotification({
        //   message: `Caja Cerrada Correctamente`,
        //   type: 'success',
        // })

        console.log("response", response);

        console.log("product.title", product.title);

        infoViewActionsContext.showMessage(
          `${product.title} added to cart successfully`
        );
        //refetch && refetch()
      }
    } catch (e) {
      infoViewActionsContext.fetchError(e.message);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <StyledProductImageSlide>
      <StyledProductImageSlideRoot>
        <StyledDots>
          <Dots
            rtl={false}
            thumbnails={slides}
            value={value}
            onChange={onChange}
            number={slides.length}
          />
        </StyledDots>
        <StyledArticle>
          <article>
            <StyledPostAttachmentImgItem key={index}>
              <Image
                src={product.image[value].src}
                alt=""
                onClick={() => setIndex(value)}
                width={800}
                height={800}
                layout="responsive"
              />
              {product.image.length > 4 && index === 3 && (
                <StyledPostAttachmentCount>
                  + {product.image.length - 3}
                </StyledPostAttachmentCount>
              )}
            </StyledPostAttachmentImgItem>

            <AppMedialViewer
              index={index}
              medias={product.image.map((data) => {
                return {
                  url: data.src,
                  mime_type: "image/*",
                };
              })}
              onClose={onClose}
            />

            <StyledProductImageSlideIcons>
              <div>
                <p>
                  Dale click a la imagen para verla <span>Grande</span>
                </p>
              </div>

              <StyledProductImageSlideIcon>
                <StyledContentCompartir onClick={showModal}>
                  <ShareAltOutlined /> <h3>Compartir</h3>{" "}
                </StyledContentCompartir>

                <Modal
                  title="Compartir"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  closable={true}
                  footer={null}
                  style={{ top: 400, left: 200 }} // Esto moverá el modal hacia abajo
                  maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} // Esto hará que el fondo sea menos oscuro
                >
                  <CartsCompartir />
                </Modal>

                {/* <CommentOutlined /> */}
            
                  <StyledProductFav  onClick={OnFavorite}>
                 

                    {isFavorite ? <HeartFilled />  : <HeartOutlined />} <h3>Favorito</h3>  {" "}
                  </StyledProductFav>
        
                <StyledProductImageLike>
                  <LikeOutlined onClick={() => OnLike_Dislike("true")} />
                  <DislikeOutlined onClick={() => OnLike_Dislike("false")} />
                </StyledProductImageLike>
              </StyledProductImageSlideIcon>
            </StyledProductImageSlideIcons>
          </article>
        </StyledArticle>
      </StyledProductImageSlideRoot>
    </StyledProductImageSlide>
  );
};

export default ProductImageSlide;
