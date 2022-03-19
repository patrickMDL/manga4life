import { 
    HeaderContainer,
    LogoContainer,
    Logo,
    SubLogo,
    SearchField
} from "./styles";

function Header(){
    return(
        <HeaderContainer>
            <LogoContainer>
                <Logo>Manga4Life</Logo>
                <SubLogo>Free Manga Online</SubLogo>
            </LogoContainer>
            <SearchField>
                <input placeholder="Type to search"></input>
            </SearchField>            
        </HeaderContainer>
    )
}

export default Header;