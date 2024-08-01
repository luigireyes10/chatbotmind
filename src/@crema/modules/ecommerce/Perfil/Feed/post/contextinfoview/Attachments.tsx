import React, { useState } from "react";
import AppGrid from "@crema/components/AppGrid";
import AppMedialViewer from "@crema/components/AppMedialViewer";
import {
  StyledPostAttachment,
  StyledPostAttachmentCount,
  StyledPostAttachmentImgItem,
} from "../contextinfoview/style/index.styled";
import { AttachmentObjType } from "@crema/types/models/apps/Wall";

type AttachmentsProps = {
  attachments: any[];
};

const Attachments: React.FC<AttachmentsProps> = ({ attachments }) => {
  console.log(attachments);
  
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  return (
    <StyledPostAttachment>
      <AppGrid
        itemPadding={8}
        data={attachments?.length > 4 ? attachments.slice(0, 4) : attachments}
        column={attachments?.length > 3 ? 2 : attachments?.length}
        renderItem={(item, index) => (
          <StyledPostAttachmentImgItem key={index}>
            <img
              src={process.env.NEXT_PUBLIC_API_URL + item?.DOC_RUTA}
              alt="attachment"
              onClick={() => setIndex(index)}
            />
            {attachments.length > 4 && index === 3 && (
              <StyledPostAttachmentCount>
                + {attachments.length - 3}
              </StyledPostAttachmentCount>
            )}
          </StyledPostAttachmentImgItem>
        )}
      />
      <AppMedialViewer
        index={index}
        medias={attachments?.map((data) => {
          return {
            url:process.env.NEXT_PUBLIC_API_URL + data.preview,
            mime_type: "image/*",
          };
        })}
        onClose={onClose}
      />
    </StyledPostAttachment>
  );
};

export default Attachments;
