import React, { useState, useEffect } from "react";

import AppRowContainer from "@crema/components/AppRowContainer";
import { Button, Col, Input } from "antd";
import AppAnimate from "@crema/components/AppAnimate";
import AppPageMeta from "@crema/components/AppPageMeta";
import { SocialIcon } from "react-social-icons";
import {
  StyledCartsFooter,
  StyledCompartirCopiaR,
  StyledContentIcons,
  StyledButtonCopiar,
  Container,
  StyledInput,
  StyledButton,
} from "./index.styled";
import { Icon } from "react-icons-kit";
import { instagram } from "react-icons-kit/fa/instagram";
import Peticion from "./PeticionIG";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { message } from "antd";

import { em } from "polished";
const CartsCompartir = () => {
  const handleCopyLink = () => {
    message.success("¡Enlace copiado al portapapeles!");
  };

  return (
    <>
      <AppPageMeta title="Carts" />

      <AppRowContainer>
        <AppAnimate animation="transition.slideLeftIn" delay={200}>
          <StyledCartsFooter key={1}>
            {/* <Button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}&quote=${encodeURIComponent(
                    "Mira estos productos!"
                  )}&hashtag=%23ecommerce`,
                  "_blank"
                )
              }
            >
              <FacebookIcon size={32} round={true} />
            </Button> */}
                   <StyledContentIcons
  onClick={() =>
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        "Mira esos productos! " +
          "https://es.aliexpress.com/item/1005006963115203.html?spm=a2g0o.tm1000004745.d4.1.478b5ce510X7yU&pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000038871771632%22%7D&scm=1007.39065.379845.0&scm_id=1007.39065.379845.0&scm-url=1007.39065.379845.0&pvid=640da62c-9199-4e0d-be55-5f9cc0f434a9&utparam=%257B%2522process_id%2522%253A%2522standard-item-process-2%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522640da62c-9199-4e0d-be55-5f9cc0f434a9%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%252233480447%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%252218%2522%252C%2522language%2522%253A%2522es%2522%252C%2522scm%2522%253A%25221007.39065.379845.0%2522%252C%2522countryId%2522%253A%2522DO%2522%252C%2522scene%2522%253A%2522SD-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252310_21669%25234190%252319163%2523550_29065%25230%2523379845%25234%2522%252C%2522x_object_id%2522%253A%25221005006963115203%2522%257D&aecmd=true"
      )}`,
      "_blank"
    )
  }
>
  {window.location.pathname === '/ecommerce/desing' && <img src="../../../../assets/images/logo/emedia-logo.png" alt="eMedia Logo" style={{width: '48px', height: '48px'}}/>}
</StyledContentIcons>


            <StyledContentIcons
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    "https://es.aliexpress.com/item/1005006963115203.html?spm=a2g0o.tm1000004745.d4.1.478b5ce510X7yU&pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000038871771632%22%7D&scm=1007.39065.379845.0&scm_id=1007.39065.379845.0&scm-url=1007.39065.379845.0&pvid=640da62c-9199-4e0d-be55-5f9cc0f434a9&utparam=%257B%2522process_id%2522%253A%2522standard-item-process-2%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522640da62c-9199-4e0d-be55-5f9cc0f434a9%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%252233480447%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%252218%2522%252C%2522language%2522%253A%2522es%2522%252C%2522scm%2522%253A%25221007.39065.379845.0%2522%252C%2522countryId%2522%253A%2522DO%2522%252C%2522scene%2522%253A%2522SD-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252310_21669%25234190%252319163%2523550_29065%25230%2523379845%25234%2522%252C%2522x_object_id%2522%253A%25221005006963115203%2522%257D&aecmd=true"
                  )}`,
                  "_blank"
                )
              }
            >
              <FacebookIcon size={48} round={true} />
            </StyledContentIcons>
            <StyledContentIcons
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    "Mira estos productos!"
                  )}&url=${encodeURIComponent(
                    window.location.href
                  )}&hashtags=ecommerce`,
                  "_blank"
                )
              }
            >
              <TwitterIcon size={48} round={true} />
            </StyledContentIcons>

            <StyledContentIcons
              onClick={() =>
                window.open("https://instagram.com/yourprofile", "_blank")
              }
            >
              <Icon icon={instagram} size={48} style={{ color: "#E4405F" }} />
            </StyledContentIcons>
            {/* <Button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent(
                    "Mira estos productos! " + window.location.href
                  )}`,
                  "_blank"
                )
              }
            >
              <WhatsappIcon size={32} round={true} />
            </Button> */}

            <StyledContentIcons
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent(
                    "Mira esos productos! " +
                      "https://es.aliexpress.com/item/1005006963115203.html?spm=a2g0o.tm1000004745.d4.1.478b5ce510X7yU&pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000038871771632%22%7D&scm=1007.39065.379845.0&scm_id=1007.39065.379845.0&scm-url=1007.39065.379845.0&pvid=640da62c-9199-4e0d-be55-5f9cc0f434a9&utparam=%257B%2522process_id%2522%253A%2522standard-item-process-2%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522640da62c-9199-4e0d-be55-5f9cc0f434a9%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%252233480447%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%252218%2522%252C%2522language%2522%253A%2522es%2522%252C%2522scm%2522%253A%25221007.39065.379845.0%2522%252C%2522countryId%2522%253A%2522DO%2522%252C%2522scene%2522%253A%2522SD-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252310_21669%25234190%252319163%2523550_29065%25230%2523379845%25234%2522%252C%2522x_object_id%2522%253A%25221005006963115203%2522%257D&aecmd=true"
                  )}`,
                  "_blank"
                )
              }
            >
              <WhatsappIcon size={48} round={true} />
            </StyledContentIcons>

     
            
            <StyledCompartirCopiaR>
              <Container>
                <StyledInput value={window.location.href} readOnly />
                <CopyToClipboard
                  text={window.location.href}
                  onCopy={handleCopyLink}
                >
                  <StyledButton>Copiar</StyledButton>
                </CopyToClipboard>
              </Container>
            </StyledCompartirCopiaR>
          </StyledCartsFooter>
          ,
        </AppAnimate>
      </AppRowContainer>
    </>
  );
};

export default CartsCompartir;
