import React, { useState, useEffect } from "react";
import { Layout, Button } from "antd";
import { ThemeMode } from "@crema/constants/AppEnums";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { AiOutlineMenu } from "react-icons/ai";

const { Sider } = Layout;

type Props = {
  children: React.ReactNode;
  className?: string;
  collapsed?: boolean;
  [key: string]: any;
};

const MainSidebar: React.FC<Props> = ({
  children,
  className,
  collapsed: initialCollapsed = window.innerWidth < 1200,
  ...props
}) => {
  const { themeMode } = useThemeContext();
  const { sidebarColorSet, allowSidebarBgImage, sidebarBgImageId } =
    useSidebarContext();

  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const isLargeScreen = window.innerWidth >= 1200; // Cambiado a 992 para incluir pantallas grandes
  const isSmallScreen = window.innerWidth < 1200;

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 1200;
      setCollapsed(isSmallScreen);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      theme={themeMode === ThemeMode.LIGHT ? ThemeMode.LIGHT : ThemeMode.DARK}
      breakpoint="lg"
      className={className}
      style={{
        width: collapsed ? "80px" : "250px",
        backgroundColor: sidebarColorSet.sidebarBgColor,
        marginLeft: isLargeScreen && !collapsed ? "5.3%" : "0",
        zIndex: 999,
        color: sidebarColorSet.sidebarTextColor,
        backgroundImage: allowSidebarBgImage
          ? `url(/assets/images/sidebar/images/${sidebarBgImageId}.png)`
          : "",
        borderRight: "1px solid #E1E8ED",
      }}
      collapsed={collapsed}
      {...props}
    >
      {isSmallScreen && ( // Mostrar el botón cuando la resolución sea menor a 1200
        <Button
          type="text"
          icon={<AiOutlineMenu style={{ fontSize: "24px" }} />}
          onClick={toggleCollapsed}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            color: collapsed ? "#3f3f3f" : "", // Ajustar los colores según sea necesario
          }}
        />
      )}
      {children}
    </Sider>
  );
};

export default MainSidebar;
