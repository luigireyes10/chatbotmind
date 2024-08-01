
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react'


import { ArgsProps } from 'antd/es/notification/interface'

import dayjs from 'dayjs'
import notification from 'antd/lib/notification'
export const customModalButtonProps = {
  shape: 'round' as const,
  size: 'small' as const,
}


export const showNotification = (data: ArgsProps) => {
  switch (data?.type) {
    case 'success':
      data.style = { backgroundColor: '#f6ffed', border: '1px solid #b7eb8f' }
      break
    case 'info':
      data.style = { backgroundColor: '#e6f7ff', border: '1px solid #91d5ff' }
      break
    case 'warning':
      data.style = {
        backgroundColor: '#fffbe6',
        border: '1px solid #ffe58f',
      }
      break
    case 'error':
      data.style = {
        backgroundColor: '#fff2f0',
        border: '1px solid #ffccc7',
      }
      break

    default:
      return false
  }

  notification[data?.type](data)
}

export type DateTypes = {
  FECHA_DESDE: Date | dayjs.Dayjs
  FECHA_HASTA: Date | dayjs.Dayjs
  HOY?: boolean
}

type filterDateTypes = {
  search: Function
  months?: number
  showButton?: boolean
  getData?: boolean
  setGetData?: Dispatch<SetStateAction<boolean>>
  loading?: boolean
  always?: boolean
}


export  const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};


export  const getFromLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};
