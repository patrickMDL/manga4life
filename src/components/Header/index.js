import { 
    HeaderContainer,
    LogoContainer,
    Logo,
    SubLogo,
    SearchField,
    AvatarContainer,
    Avatar,
    UserName,
    ContentContainer
} from "./styles";

function Header(){
    return(
        <HeaderContainer>
            <ContentContainer>
                <LogoContainer>
                    <Logo>Manga4Life</Logo><br></br>
                    <SubLogo>Free Manga Online</SubLogo>
                </LogoContainer>
                <AvatarContainer>
                    <Avatar >
                        <img src=".\images\henny.png" ></img>
                    </Avatar>
                    <UserName>
                        Henny Saron
                    </UserName>
                </AvatarContainer> 
            </ContentContainer>
                    
        </HeaderContainer>
    )
}

export default Header;