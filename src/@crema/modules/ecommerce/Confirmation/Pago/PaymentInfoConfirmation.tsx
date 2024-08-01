import React, { useState } from 'react';
import { Button, Form, Input, Radio, Switch } from 'antd';
import AppCard from '@crema/components/AppCard';
import {
  StyledCheckoutCardTitle,
  StyledPaymentInfoItem,
  StyledPayModeContent,
  StyledPayModeFormField,
  StyledPayRadioMode,
} from './index.styled';
import { StyledNotificationListItem } from 'modules/account/MyProfile/index.styled';
import { MUTATION_CREATE_FACTURA , MUTATION_CREATE_UPDATE_CUENTA_PAGO  } from 'utils/Mutations/Administrative';
import { showNotification } from 'utils/general';
import { useMutation } from '@apollo/client';

const PaymentInfo = ({ onFinish }) => {
  const [paymentMode, setPaymentMode] = useState('CARD');
  const [form] = Form.useForm();
  
  const [ConfirmPay, setConfirmPay] = useState('N');

  const [CuentaPago] = useMutation(MUTATION_CREATE_UPDATE_CUENTA_PAGO)




  
  // const saveData = async (data: any) => {

    // console.log('data', data)

    const saveData = async (data: any) => {
      console.log('data', data)
      console.log('paymentMode', paymentMode)
      // let prueba = 0
      // if (prueba === 0) return
      if(paymentMode === 'COD' && ConfirmPay ==='N' ) {
        showNotification({
          message: `DEBE CONFIRMAR PAGAR AL ENTREGAR`,
          type: 'warning',
        })
        return
        }
      try {
        const values = await form.validateFields();
        const paymentData = {
          NOMBRE_CUENTA: values['NOMBRE_CUENTA'],
          NUM_CUENTA: values['NUM_CUENTA'],
          TIPO_CUENTA: paymentMode,
          ID_CUENTA: paymentMode,
          NUM_CVV: values['NUM_CVV'],
        };
        onFinish(paymentData);
        form.resetFields();

        const response = await CuentaPago({
          variables: {
            condition:{
              ...data,
              ID_CUENTA: paymentMode,
              DESC_CUENTA: data?.NOMBRE_CUENTA,
              TIPO_CUENTA: paymentMode
              },
            },
        })
        //console.log('response', response)
        if (response) {
          showNotification({
            message: `transaccion procesada con exito`,
            type: 'success',
          })
          console.log('response', response)
         // console.log('product.title', product.title)
          // infoViewActionsContext.showMessage( `${product.title} added to cart successfully` );
          // infoViewActionsContext.fetchSuccess()
          //refetch && refetch()
        }
      } catch (e) {
       // infoViewActionsContext.fetchError(e.message);
        console.log('ocurrio un error', e.message)
        showNotification({
          message: `ocurrio un error en la transaccion`,
          type: 'error',
        })
      }
    }
    function onChange(checked: boolean) {
      console.log(`switch to ${checked}`);
      setConfirmPay('S')
    }

  return (
    <Form form={form} onFinish={saveData}    // onFinish={saveData}
    initialValues={{
     
    }}
  >
    <AppCard
      title={<StyledCheckoutCardTitle>Payment Info</StyledCheckoutCardTitle>}
      actions={<Button type='primary'>Place Order</Button>}
    >
      <StyledPaymentInfoItem>
        <StyledPayRadioMode onClick={() => setPaymentMode('COD')}>
        <Form.Item
          name="cv-code"  
          >
          <Radio checked={paymentMode === 'COD'}>COD</Radio>
          </Form.Item>
        </StyledPayRadioMode>
        {paymentMode === 'COD' ? (
          <StyledPayModeContent>
            {/* <p>Cash on delivery</p> */}
            <StyledNotificationListItem>
                <Switch
                  defaultChecked={false}
                  onChange={onChange} 
                />
                <label className="label" >CONFIRMA PAGAR EN LA ENTREGA</label>
              </StyledNotificationListItem>
          </StyledPayModeContent>
        ) : null}
      </StyledPaymentInfoItem>
      <StyledPaymentInfoItem>
        <StyledPayRadioMode onClick={() => setPaymentMode('CARD')}>
        <Form.Item
            name="data-car"
           
          >
          <Radio checked={paymentMode === 'CARD'}>CARD</Radio>
          </Form.Item>
        </StyledPayRadioMode>
        {paymentMode === 'CARD' ? (
          <StyledPayModeContent>
           
           <Form.Item
  name="NOMBRE_CUENTA"
  rules={[{ required: true, message: 'Por favor ingresa el nombre completo.' }]}
>
  <Input placeholder='Full Name' type='search' />
</Form.Item>
           
            <Form.Item
            name="NUM_CUENTA" 
            rules={[{ required: true, message: 'Por favor ingresa el número de cuenta' }]}>
              <Input  placeholder='Card Number' type='search'  />
              </Form.Item>
           
            <StyledPayModeFormField>
              <Form.Item
               name="FECHA_EXPIRACION"
               rules={[{ required: true, message: 'Por favor ingresa la fecha de expiracion' }]}>
                <Input
                  placeholder='Expiry Date (MM/YY)'
                  type='search'
                  
                />
                 </Form.Item>
             
              <Form.Item
              name="NUM_CVV"  rules={[{ required: true, message: 'Por favor ingresa el número CVV' }]}>
                <Input  placeholder='CVV' type='password'  />
                </Form.Item>
            
            </StyledPayModeFormField>
          </StyledPayModeContent>
        ) : null}
      </StyledPaymentInfoItem>
      {/* <StyledPaymentInfoItem>
        <StyledPayRadioMode onClick={() => setPaymentMode('PAYPAL')}>
        <Form.Item
            name="metodo-car"
           
          >
          <Radio checked={paymentMode === 'PAYPAL'}>PAYPAL</Radio>
          </Form.Item>
        </StyledPayRadioMode>
        {paymentMode === 'PAYPAL' ? (
          <StyledPayModeContent>
           
            <Form.Item
            name="email-paypal"
           
          >
              <Input
                
                placeholder='PayPal email address'
                type='search'
              />
                 </Form.Item>
           
          </StyledPayModeContent>
        ) : null}
      </StyledPaymentInfoItem> */}

      {/* <Button
      onClick={saveData}
      type="primary" style={{ marginTop: 16 }}
      >
      Guardar Cuenta
      </Button> */}

       <Button 
       //type="primary"
       htmlType="submit"
       type="primary" style={{ marginTop: 16 }} 
        >
       Guardar Cuenta
      </Button>
    </AppCard>
    </Form>
  );
};

export default PaymentInfo;