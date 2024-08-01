import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    StyledAppMediaModal,
    StyledEmbedResponsive,
    StyledMedialCarousel,
    StyledMediaViewer,
    StyledMediaViewerButton,
} from "./index.styled";
import { ArrowLeftOutlined, ArrowRightOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";



const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: ( <section className="slick-prev"> <LeftOutlined /> </section>),
    nextArrow: ( <section className="slick-next"> <RightOutlined /> </section>),
};

const renderItem = (data: any, index: number) => {
    if (data.mime_type.startsWith("image")) {
        return (
            <img
                key={index}
                src={data.url}
                alt={data.name ? data.name : "detail view"}
            />
        );
    } else if (data.mime_type.startsWith("docs")) {
        return (
            <StyledEmbedResponsive>
                <iframe
                    key={index}
                    src={data.url}
                    title={data.name ? data.name : "detail view"}
                />
            </StyledEmbedResponsive>
        );
    } else {
        return (
            <StyledEmbedResponsive>
                <iframe
                    key={index}
                    src={data.url}
                    title={data.name ? data.name : "detail view"}
                />
            </StyledEmbedResponsive>
        );
    }
};

type AppMedialViewerProps = {
    index: number;
    modalTitle?: string;
    medias: any[];
    onClose: () => void;
};

const AppMediaViewer: React.FC<AppMedialViewerProps> = ({
    index,
    modalTitle,
    medias,
    onClose,
}) => {
    const [isOpen, setOpen] = useState(false);
// Suponiendo que tienes un estado o referencia para el ítem actual del slider
// Por ejemplo, un estado que mantiene el índice del ítem actual
const [currentIndex, setCurrentIndex] = useState(0);

// Función que devuelve la URL del contenido actual del slider
// Asumiendo que tienes una función que devuelve tanto la URL como el nombre del archivo del contenido actual
function getCurrentContentDetails() {
    if (medias && medias.length > 0 && medias[currentIndex]) {
        const currentMedia = medias[currentIndex];
        return {
            url: currentMedia.url, // La URL del contenido actual
            name: currentMedia.name || "contenido_descargado" // El nombre del archivo, con un valor por defecto
        };
    }
    return { url: '', name: 'contenido_descargado' }; // Valores por defecto si no hay contenido actual
}

// Modificar la función downloadCurrentContent para usar estos detalles
function downloadCurrentContent() {
    const { url, name } = getCurrentContentDetails(); // Obtener la URL y el nombre del contenido actual

    // Crear un elemento <a> dinámicamente para la descarga
    const link = document.createElement('a');
    link.href = url;
    link.download = name; // Usar el nombre del archivo obtenido
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
    useEffect(() => {
        if (index > -1) setOpen(true);
        else {
            setOpen(false);
        }
    }, [index]);

    return (
        <StyledAppMediaModal
            title={modalTitle}
            open={isOpen}
            footer={null}
            onCancel={onClose}
        >
            <StyledMediaViewerButton>
            <Button onClick={downloadCurrentContent}>Descargar contenido</Button>
   
            </StyledMediaViewerButton>
            <StyledMediaViewer>
                {index >= 0 ? (
                    <StyledMedialCarousel >
                        <Slider
                            {...{
                                ...settings,
                                initialSlide: index,
                                slickGoTo: { index },
                            }}
                        >
                            {medias.map((data, index) =>
                                renderItem(data, index)
                            )}
                        </Slider>
                      
  
                    </StyledMedialCarousel>
                ) : null}
            </StyledMediaViewer>
        </StyledAppMediaModal>
    );
};

export default AppMediaViewer;
