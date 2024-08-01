import { useAuthUser } from "@crema/hooks/AuthHooks";

import { StyledCrUserInfoAvatar } from "./index.styled";

const Avatar = ({style = {}}) =>{
    const { user } = useAuthUser();
    const getUserAvatar = () => {
        if (user.displayName) {
          return user.displayName.charAt(0).toUpperCase();
        }
        if (user.email) {
          return user.email.charAt(0).toUpperCase();
        }
      };

    return(
        <>
        {user.photoURL ? (
                <StyledCrUserInfoAvatar src={user.photoURL} style={style}/>
              ) : (
                <StyledCrUserInfoAvatar style={style}>
                  {getUserAvatar()}
                </StyledCrUserInfoAvatar>
              )}
        </>
    )
}


export default Avatar;