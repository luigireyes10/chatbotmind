import React, { useState } from "react";
import clsx from "clsx";
import ItemMenu from "./ItemMenu";
import AppsStarredIcon from "@crema/components/AppsStarredIcon";
import { Avatar, Checkbox } from "antd";
import ActionBtnHover from "./ActionBtnHover";
import {
  StyledContactListItem,
  StyledContactListItemAvatar,
  StyledContactListItemAvatarView,
  StyledContactListItemCheckView,
  StyledContactListItemCol,
  StyledContactListItemCompany,
  StyledContactListItemMail,
  StyledContactListItemTitle,
  StyledContactListItemAction,
  StyledContactListExportIcon,
  StyledContactListItemMenuView,
} from "../index.styled";
import { ContactObjType, LabelObjType } from "@crema/types/models/apps/Contact";

type ContactListItemProps = {
  contact: ContactObjType;
  labelList: LabelObjType[];
  dataProspect: any;
  onChangeStarred: (isStarred: boolean, contact: ContactObjType) => void;
  onChangeCheckedContacts: (event: any, id: number) => void;
  checkedContacts: number[];
  onSelectContactsForDelete: (contactIds: number[]) => void;
  onOpenEditContact: (contact: ContactObjType) => void;
  onViewContactDetail: (contact: ContactObjType) => void;

  [x: string]: any;
};

const ContactListItem: React.FC<ContactListItemProps> = ({
  contact,
  labelList,
  dataProspect,
  onChangeCheckedContacts,
  checkedContacts,
  onChangeStarred,
  onSelectContactsForDelete,
  onViewContactDetail,
  onOpenEditContact,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onGetLabelColor = (labelId: number) => {
    if (labelId) {
      return labelList?.find((label) => label.id === labelId)!.color;
    }
    return "";
  };

  console.log(dataProspect)
console.log(contact)
  return (
    <StyledContactListItem
      key={contact.CEDULARNC}
      className={clsx("item-hover", {
        rootCheck: checkedContacts.includes(contact.CEDULARNC),
      })}
      onClick={() => onViewContactDetail(contact)}
    >
      <StyledContactListItemCheckView
        onClick={(event) => event.stopPropagation()}
      >
        <Checkbox
          checked={checkedContacts.includes(contact.CEDULARNC)}
          onChange={() => {
            setIsChecked(!isChecked);
            onChangeCheckedContacts(!isChecked, contact.CEDULARNC);
          }}
        />
      </StyledContactListItemCheckView>
      <StyledContactListItemCheckView
        onClick={(event) => event.stopPropagation()}
      >
        <AppsStarredIcon item={contact} onChange={onChangeStarred} />
      </StyledContactListItemCheckView>
      <StyledContactListItemAvatarView>
        {contact.image ? (
          <Avatar size={36} src={contact.image} />
        ) : (
          <StyledContactListItemAvatar size={36}>
            {contact?.NOMBRES.toUpperCase()}
          </StyledContactListItemAvatar>
        )}
      </StyledContactListItemAvatarView>
      <StyledContactListItemTitle className="text-truncate">
        {contact.NOMBRES}
      </StyledContactListItemTitle>

      <StyledContactListItemMail className="text-truncate">
        <span className="text-truncate">
          {contact.EMAIL ? contact.EMAIL : null}
        </span>
      </StyledContactListItemMail>
      <StyledContactListItemCol className="text-truncate">
        <span className="text-truncate">{contact.TIPO_ORGANIZACION}</span>
      </StyledContactListItemCol>
      <StyledContactListItemCompany className="text-truncate contact-list-item-company">
        <span className="text-truncate">
          {contact.VINCULADO_A ? contact.VINCULADO_A : null}
        </span>
      </StyledContactListItemCompany>

      <StyledContactListItemAction className="contact-list-item-action">
        <StyledContactListExportIcon
          style={{ color: onGetLabelColor(contact.label) }}
        />

        <StyledContactListItemMenuView
          onClick={(event) => event.stopPropagation()}
        >
          <ItemMenu
            onSelectContactsForDelete={onSelectContactsForDelete}
            contact={contact}
            onChangeStarred={onChangeStarred}
            onOpenEditContact={onOpenEditContact}
          />
        </StyledContactListItemMenuView>
      </StyledContactListItemAction>

      <ActionBtnHover
        contact={contact}
        onChangeStarred={onChangeStarred}
        onSelectContactsForDelete={onSelectContactsForDelete}
        onOpenEditContact={onOpenEditContact}
      />
    </StyledContactListItem>
  );
};

export default ContactListItem;
