import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { instagram } from "react-icons-kit/icomoon/instagram";

const StyledContentIcons = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 10px;
`;

const Peticion = () => {
  const token = 'your_instagram_access_token'; // Asegúrate de reemplazar esto con tu token
  let FeedInstagram = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,children,children_url,timestamp,media_type,caption,permalink&limit=10&access_token=${token}`;

  const [url, setUrl] = useState(FeedInstagram);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const anterior = useRef(null);
  const siguiente = useRef(null);

  useEffect(() => {
    const Post = async () => {
      setLoading(true);
      try {
        let res = await axios.get(url),
            data = await res.data,
            pagina = await data.paging,
            json = await data.data,
            next = pagina.next,
            prev = pagina.previous;
        setPost(json); // Aquí es donde estableces los datos en el estado de 'post'
        setLoading(false);
      } catch (error) {
        console.error(error.response); // Imprime la respuesta completa del error
      }
    }
    Post();
  }, [url]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        post.map((item, index) => (
          <StyledContentIcons
            key={index}
            onClick={() =>
              window.open(item.permalink, "_blank")
            }
          >
            <Icon icon={instagram} size={48} style={{ color: "#E4405F" }} />
          </StyledContentIcons>
        ))
      )}
    </div>
  );
}

export default Peticion;