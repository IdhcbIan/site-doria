import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DoriaLogo from '/src/assets/Doria_Logo.png'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const seaGreen = '#068743';

const Nav = styled.nav`
  padding: 1.2rem;
  background-color: ${seaGreen};
  display: flex;
  align-items: center;
  box-shadow: 0 8px 16px rgba(6,135,67,0.2);
  min-height: 70px;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 0.6rem;
  position: relative;
  overflow: hidden;
`

const Logo = styled.img`
  height: 65px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  order: 2;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  
  &:hover {
    transform: rotate(5deg) scale(1.1);
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  order: 1;
  position: relative;
  z-index: 1;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  order: 3;
  margin-left: auto;
`

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
  position: relative;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #ffffff;
    transition: width 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    
    &:after {
      width: 100%;
    }
  }
  
  &:active {
    transform: translateY(1px);
  }
`

const ContactInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
  
  p {
    margin: 0.2rem 0;
  }
  
  strong {
    font-size: 1rem;
  }
`

function Header() {
  return (
    <Nav>
      <NavLinks>
        <StyledLink to="/produtos">Produtos</StyledLink>
        <StyledLink to="/sobre">Sobre</StyledLink>
      </NavLinks>
      <Link to="/">
        <Logo src={DoriaLogo} alt="Logo Doria" />
      </Link>
      <ContactInfo>
        <p>📍 Rua Aquidaban, 980 - Centro</p>
        <p>⏰ Seg à Sex 9:00h às 18h | Sábado 9:00h às 13h</p>
      </ContactInfo>
      <SocialLinks>
        <SocialIcon href="https://www.instagram.com/doriaprodutosnaturais/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://wa.me/message/BNDP5Q6WPGT2J1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </SocialIcon>
      </SocialLinks>
    </Nav>
  )
}

export default Header
