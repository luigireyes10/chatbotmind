import React, { useEffect } from "react";
import { Button, Col, Form, Input } from "antd";
import AppRowContainer from "@crema/components/AppRowContainer";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from "../index.styled";
import { useLazyQuery, useMutation } from "@apollo/client";
import { MUTATION_CREATE_UPDATE_REDES_SOCIALES } from "utils/Mutations/Administrative";
import { showNotification } from "utils/general";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import { QUERY_CONSULTA_REDES_SOCIALES } from "utils/Queries/Administrative";

type SocialProps = {
  socialLink: any[];
};

const SocialLink: React.FC<SocialProps> = ({ socialLink }) => {
  const { user } = useAuthUser();
  const [formRedes] = Form.useForm();
  const [getBuscaRedes, { data: DataBuscaRedes, loading: loadingRedes, error }] = useLazyQuery(QUERY_CONSULTA_REDES_SOCIALES, {
    variables: {
      condition: { ID_EMPRESA: "1", ID_USER: "1" },
      fetchPolicy: 'cache-first'
    },
  });

  useEffect(() => {
    funtBuscaRedes();
  }, []);

  const funtBuscaRedes = async () => {
    await getBuscaRedes();
  };

  useEffect(() => {
    if (DataBuscaRedes) {
      const combinedData = combineData(DataBuscaRedes.GetEmRedesSociales);
      formRedes.setFieldsValue(combinedData);
    }
  }, [DataBuscaRedes]);

  const combineData = (data) => {
    return data.reduce((acc, item) => {
      switch (item.ID_REDES_SOCIALES) {
        case 'FACEBOOK':
          acc.FACEBOOK = item.REDES_SOCIALES;
          break;
        case 'INSTAGRAM':
          acc.INSTAGRAM = item.REDES_SOCIALES;
          break;
        case 'LINKEDIN':
          acc.LINKEDIN = item.REDES_SOCIALES;
          break;
        case 'SITIO_WEB':
          acc.SITIO_WEB = item.SITIO_WEB;
          break;
        case 'WHATSAPP':
          acc.WHATSAPP = item.WHATSAPP;
          break;
        case 'X':
          acc.X = item.REDES_SOCIALES;
          break;
        default:
          break;
      }
      return acc;
    }, {});
  };

  const [UpdateCreateRedesSociales] = useMutation(MUTATION_CREATE_UPDATE_REDES_SOCIALES);

  const onFinish = async (values) => {
    try {
      for (const [key, redes] of Object.entries(values)) {
        if (redes) {
          const response = await UpdateCreateRedesSociales({
            variables: {
              condition: {
                ID_EMPRESA: "1",
                ID_REDES_SOCIALES: key,
                ID_USER: "1",
                REDES_SOCIALES: key !== 'SITIO_WEB' ? redes : null,
                TIPO_REDES_SOCIALES: key === 'SITIO_WEB' ? 'SW' : 'SN',
                ESTADO: 'A',
                SITIO_WEB: key === 'SITIO_WEB' ? redes : null,
                WHATSAPP: key === 'WHATSAPP' ? redes : null
              },
            },
          });

          if (response) {
            showNotification({
              message: `Transacción completada con éxito`,
              type: 'success',
            });
          }
        }
      }
    } catch (e) {
      console.log(`Error en el: ${e}`);
      showNotification({
        message: `Hubo un error`,
        type: 'error',
      })
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledUserProfileForm
      form={formRedes}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.socialLink" />
      </StyledUserProfileFormTitle>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item name="X">
            <Input placeholder="X" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="FACEBOOK">
            <Input placeholder="Facebook" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="LINKEDIN">
            <Input placeholder="LinkedIn" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="INSTAGRAM">
            <Input placeholder="Instagram" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="SITIO_WEB">
            <Input placeholder="Website" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="WHATSAPP">
            <Input placeholder="WhatsApp" />
          </Form.Item>
        </Col>
      </AppRowContainer>
      <StyledUserProfileGroupBtn shouldUpdate className="user-profile-group-btn">
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
        <Button>Cancel</Button>
      </StyledUserProfileGroupBtn>
    </StyledUserProfileForm>
  );
};

export default SocialLink;
