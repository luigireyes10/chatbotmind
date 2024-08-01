import React, { useEffect, useState } from "react";
import { Col, Row, Avatar } from "antd";
import { PhoneOutlined, MailOutlined, GlobalOutlined, HomeOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

import AppRowContainer from "@crema/components/AppRowContainer";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledContactDetailContent,
  StyledContactDetailModal,
  StyledContactDetailScrollbar,
  StyledContactModalHeader,
  StyledContactModalUser,
  StyledContactModalUserAvatar,
} from "./index.styled";
import {
  StyledContactFormBtn,
  StyledContactFormFooter,
} from "../CreateContact/index.styled";
import {
  ContactActions,
} from "@crema/modules/apps/Contact";

import type { ContactObjType } from "@crema/types/models/apps/Contact";

type ContactDetailProps = {
  isShowDetail: boolean;
  selectedContact: ContactObjType | null;
  onShowDetail: (show: boolean) => void;
  onSelectContactsForDelete: (ids: number[]) => void;
  onOpenEditContact: (contact: ContactObjType | null) => void;
  onChangeStarred: (checked: boolean, item: any) => void;
};

const ContactDetail: React.FC<ContactDetailProps> = ({
  isShowDetail,
  selectedContact,
  onShowDetail,
  onSelectContactsForDelete,
  onOpenEditContact,
  onChangeStarred,
}) => {
  const [contact, setContact] = useState<ContactObjType | null>(
    selectedContact
  );

  useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact!.id]);
    onShowDetail(false);
  };

  const onContactDetailClose = () => {
    onShowDetail(false);
  };

  console.log(contact);

  return (
    <StyledContactDetailModal
      open={isShowDetail}
      footer={false}
      onCancel={() => onShowDetail(false)}
    >
      <StyledContactModalHeader>
        <ContactActions
          onChangeStarred={onChangeStarred}
          onDeleteContact={onDeleteContact}
          onOpenEditContact={onOpenEditContact}
          contact={contact}
        />
        <StyledContactModalUser>
          {contact!.image ? (
            <StyledContactModalUserAvatar src={contact!.image} />
          ) : (
            <StyledContactModalUserAvatar>
              {contact!.NOMBRES?.toUpperCase() + ' ' +  contact!.APELLIDOS?.toUpperCase()}
            </StyledContactModalUserAvatar>
          )}
          <h4> {contact!.NOMBRES?.toUpperCase() + ' ' +  contact!.APELLIDOS?.toUpperCase()}</h4>
        </StyledContactModalUser>
      </StyledContactModalHeader>

      <StyledContactDetailScrollbar>
        <StyledContactDetailContent>
          <AppRowContainer>
            <Col xs={24} md={12}>
               <Row gutter={[16, 16]}>
                 <Col span={24}>
                  <h4><IntlMessages id="contactApp.personalDetails" /></h4>
                </Col>
                <Col xs={30} md={24} sm={12}>
                <p><PhoneOutlined /> <strong>{contact!.PHONE}</strong></p>
                  <p><MailOutlined /> <strong>{contact!.EMAIL}</strong></p>
                  <p><GlobalOutlined /> <strong>{contact!.WEBSITE}</strong></p>
                  <p><strong>{<IntlMessages id="Cargo" />}:</strong> {contact!.CARGO}</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={12}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <h4><IntlMessages id="common.otherDetails" /></h4>
                </Col>
                <Col span={24}>
                  <p><HomeOutlined /> <strong>{contact!.ID_PROVINCIA}</strong></p>
                  <p><strong>{<IntlMessages id="common.company" />}:</strong> {contact!.ID_EMPRESA}</p>
                </Col>
                <Col span={24}>
                  <h4><IntlMessages id="common.socialMedia" /></h4>
                  <p><FacebookOutlined /> <strong>{contact!.facebookId}</strong></p>
                  <p><TwitterOutlined /> <strong>{contact!.twitterId}</strong></p>
                </Col>
              </Row>
            </Col>
          </AppRowContainer>
          <AppRowContainer>
            <Col xs={24}>
              <h4><IntlMessages id="common.notes" /></h4>
              <p>{contact!.NOTES}</p>
            </Col>
          </AppRowContainer>
        </StyledContactDetailContent>

        <StyledContactFormFooter>
          <StyledContactFormBtn
            type="primary"
            ghost
            onClick={onContactDetailClose}
          >
            <IntlMessages id="common.cancel" />
          </StyledContactFormBtn>
        </StyledContactFormFooter>
      </StyledContactDetailScrollbar>
    </StyledContactDetailModal>
  );
};

export default ContactDetail;
