
import React, { useEffect, useState } from "react";
import AppLogo from "../components/AppLogo";
import { useIntl } from "react-intl";
import AppLanguageSwitcher from "../../AppLanguageSwitcher";
import AppHeaderMessages from "../../AppHeaderMessages";
import AppNotifications from "../../AppNotifications";
import AppHome from "@crema/components/AppHeaderHome";
import AppHeart from "@crema/components/AppHeaderHeart";
import AppSales from "@crema/components/AppHeaderSales";
import Avatar from "../components/UserInfo/Avatar";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import ContadorNotificaciones from "../../AppNotifications/contador";
import {
  StyledAppHeader,
  StyledAppHeaderSectionDesk,
  StyledAppHeaderSectionMobile,
  StyledHeaderSearch,
  StyledHeaderColumn,
  StyledHeaderSearchColumn,
  StyledHeaderIconsColumn,
  StyledHeaderLogo,
} from "./index.styled";
import { Dropdown, List, Spin } from "antd";
import { StyledDropdownWrapper } from "../index.styled";
import {
  StyledCreatePostAction,
  StyledCreatePostActionBtn,
  StyledCreatePostInput,
} from "@crema/modules/apps/Wall/CreatePost/index.styled";
import {
  PictureOutlined,
  SendOutlined,
  SmileOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import AppIconButton from "@crema/components/AppIconButton";
import { useDropzone } from "react-dropzone";
import { generateRandomUniqueNumber } from "@crema/helpers/Common";
import { AttachmentObjType } from "@crema/types/models/apps/Wall";
import { BiCartAlt } from "react-icons/bi";
import {
  StyledCrUserDesignation,
  StyledCrUserInfoContent,
  StyledCrUserInfoInner,
  StyledUserArrow,
  StyledUsername,
  StyledUsernameInfo,
} from "../components/UserInfo/index.styled";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { messages } from "@crema/mockapi/fakedb";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppSelect from "@crema/components/AppSelect";
import { CustomStyledAppSelect, StyledOption } from "modules/customcomponent/CustomSelect/CustomStyledAppSelect";
import { StyledAppSelect } from "@crema/components/AppSelect/index.styled";
import ContadorNotificacionesWhislist from "modules/CustomComponents/ContadorNotificacionesWhislist/ContadorNotificacionesWhislist";
import ContadorNotificacioneCarritoComp from "modules/CustomComponents/ContadorNotificacioneCarritoComp/ContadorNotificacioneCarritoComp";
import { getFromLocalStorage } from "utils/general";
import AppRowContainer from "@crema/components/AppRowContainer";

const items = [
  { key: 1, label: <AppHeaderMessages /> },
  { key: 2, label: <ContadorNotificaciones targetUserId={undefined} /> },
  { key: 3, label: <AppLanguageSwitcher /> },
  { key: 4, label: <IntlMessages id="common.viewProfile" /> },
  { key: 5, label: <IntlMessages id="common.profile.logout" /> },
];

type Props = {
  onToggleSidebar: (isCollapsed: boolean) => void;
  isCollapsed: boolean;
};


const searchAPI = async (query) => {
  const ValueProductosBuscador  = getFromLocalStorage('DataProductBuscador')
  // Simula una llamada a una API con un retraso
 // await new Promise((resolve) => setTimeout(resolve, 500));
  return ValueProductosBuscador.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
};
const AppHeader: React.FC<Props> = ({ isCollapsed, onToggleSidebar }) => {
  const menus = []
  //const onChange

    
  const ValueCategoria  = getFromLocalStorage('DataCategoria')

  const ValueProductosBuscador  = getFromLocalStorage('DataProductBuscador')

  console.log(ValueCategoria)

  const defaultValue = '0'
  const selectionKey = ''

  const { messages } = useIntl();
  const [message, setMessage] = useState<any>('');

  const [selectionType, setSelectionType] = useState(defaultValue);

  const todos = {
          __typename: 'ProductoClasificacion',
          ID_CLASIFICACION: '0',
          ID_EMPRESA: '1',
          DESCRIPCION: 'TODOS',
          ESTADO: 'A',
          CLASIFICACION_PADRE: null,
        };


     ValueCategoria?.unshift(todos);

  console.log(ValueCategoria)

  //const [StateValueCategoria, setStateValueCategoria] = useState(ValueCategoria);
  const router = useRouter();

  const handleSelectionType = (data: any) => {
    console.log("data: ", data);

    
    setSelectionType(data)
  };

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [message, setMessage] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      console.log(ValueProductosBuscador)
     let ProductosBuscador = []
      if(selectionType !== '0'){
        console.log(selectionType)
        ProductosBuscador =  ValueProductosBuscador.filter(item => item.ID_CLASIFICACION === selectionType)

        console.log(ProductosBuscador) 

        const results = await ProductosBuscador.filter(item => { 
       //   console.log(item.DESC_PRODUCTO)
          return (item.DESC_PRODUCTO?.toLowerCase()?.includes(query.toLowerCase()) )});
        console.log(results)
       // await new Promise((resolve) => setTimeout(resolve, 500));
        setSearchResults(results)
      }else {
        console.log(selectionType)

        const results = await ValueProductosBuscador.filter(item => { 
       //   console.log(item.DESC_PRODUCTO)
          return (item.DESC_PRODUCTO?.toLowerCase()?.includes(query.toLowerCase()) )});
        console.log(results)
       // await new Promise((resolve) => setTimeout(resolve, 500));
        setSearchResults(results)
       }

    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (e) => {
    const query = e.target.value;
    setMessage(query);
   
    if (query) {
      console.log(query)
      await handleSearch(query);
    } else {
      setSearchResults([]);
    }
  };


  const cantidadNotificaciones = 5;


  useEffect(() => {
  if(selectionType){

    console.log(selectionType)
  }
  }, [selectionType])
  

  useEffect(() => {
   if(ValueProductosBuscador){

    console.log(ValueProductosBuscador)
   }
  }, [ValueProductosBuscador])
  


  // useEffect(() => {
  //   if(ValueCategoria){

  //     const todos = {
  //       __typename: 'ProductoClasificacion',
  //       ID_CLASIFICACION: '0',
  //       ID_EMPRESA: '1',
  //       DESCRIPCION: 'TODOS',
  //       ESTADO: 'A',
  //       CLASIFICACION_PADRE: null,
  //     };
 
  //     ValueCategoria.unshift(todos);

  //     setStateValueCategoria(ValueCategoria)

  //     console.log(StateValueCategoria)
  //   }
  //  }, [ValueCategoria])



  return (
    <StyledAppHeader>
   

      <StyledHeaderLogo>
        <AppLogo />
      </StyledHeaderLogo>

      <StyledHeaderColumn>
        <StyledHeaderIconsColumn>
        
      <CustomStyledAppSelect
        defaultValue={defaultValue}
        value={selectionType}
        onChange={handleSelectionType} >
        {ValueCategoria?.map((categoria, index) => {
          console.log(categoria)
          return (
          <StyledOption
            key={index}
            value={categoria?.ID_CLASIFICACION}
            >
            { categoria?.DESCRIPCION}
          </StyledOption>
        )})}
       </CustomStyledAppSelect>



       {/* <CustomStyledAppSelect
        defaultValue={defaultValue}
        value={selectionType}
        onChange={handleSelectionType} >
        {ValueCategoria.map((menu, index) => (
          <StyledOption
            key={index}
            value={selectionKey ? menu[selectionKey] : menu}>
            {selectionKey ? menu[selectionKey] : menu}
          </StyledOption>
        ))}
       </CustomStyledAppSelect> */}

        
          <div
          style={{ width: '80%', display: 'inline-flex' ,   }}
          >
          <StyledCreatePostInput
            value={message}
            onChange={handleChange}
            placeholder={messages["common.searchHere"].toString()}
            
            suffix={
              <>
                <StyledCreatePostAction style={{ borderRadius:"20px 20px", backgroundColor:"#3635356e",}}>
                 
                  <AppIconButton
                    // doesn't not apply the styles bg-gray-200
                    className="text-sm font-medium text-gray-900" style={{ backgroundColor: 'lightblue' }}
                    // disabled={!message.trim() && attachments.length === 0}
                    icon={<SearchOutlined />}
                  />
                </StyledCreatePostAction>

         
              </>
            }
          />
          {loading ? (
          <Spin />
           ) : (
        searchResults.length > 0 && (
          <List
            style={{ position: 'absolute', top: '73%', width: '56%',  backgroundColor: 'white', zIndex: 1, borderRadius: '0 0 20px 20px' }}
            dataSource={searchResults}
            renderItem={(item) => (
              <List.Item onClick={() => setMessage(item?.DESC_PRODUCTO)}>
                {item?.DESC_PRODUCTO}
              </List.Item>
              )}
             />
           )
         )}

            </div>
        
        
          <StyledAppHeaderSectionMobile>
            <StyledDropdownWrapper>
              <Dropdown
                menu={{ items }}
                overlayClassName="dropdown-wrapper"
                getPopupContainer={(triggerNode) => triggerNode}
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link-mobile"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiMoreVertical />
                </a>
              </Dropdown>
            </StyledDropdownWrapper>
          </StyledAppHeaderSectionMobile>
        </StyledHeaderIconsColumn>
      </StyledHeaderColumn>
    </StyledAppHeader>
  );
};

export default AppHeader;
