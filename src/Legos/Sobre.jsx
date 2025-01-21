import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import NaturalImage from '/src/assets/Natural.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff;
    color: #333333;
    margin: 0;
    padding: 0;
  }
`

const Hero = styled.div`
  min-height: 80vh;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
  border-bottom: 3px solid #068743;
  box-shadow: 0 4px 12px rgba(6, 135, 67, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }
`

const HeroContent = styled.div`
  flex: 1;
  max-width: 800px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    text-align: center;
    margin: 2rem 0;
  }
`

const HeroImage = styled.img`
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(6, 135, 67, 0.2);
  margin-left: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    margin: 2rem 0;
    max-width: 90%;
  }
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #333333;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #068743;
  margin-bottom: 2rem;
  font-weight: 500;
`

const MainContent = styled.main`
  padding: 3rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  p {
    line-height: 1.8;
    color: #444;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(6, 135, 67, 0.1);
`

const Footer = styled.footer`
  background-color: #f8f8f8;
  color: #333333;
  text-align: center;
  padding: 2rem;
  border-top: 3px solid #068743;
  box-shadow: 0 -4px 12px rgba(6, 135, 67, 0.1);
`

function Sobre() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Hero>
        <HeroContent>
          <HeroTitle>Sobre a Doria Produtos Naturais</HeroTitle>
          <HeroSubtitle>Nossa história e compromisso com sua saúde</HeroSubtitle>
          <p>Desde nossa fundação, nos dedicamos a oferecer produtos naturais da mais alta qualidade.</p>
        </HeroContent>
        <HeroImage src={NaturalImage} alt="Nossa Loja" />
      </Hero>

      <MainContent>
        <h2>Nossa História</h2>
        <p>
          No dia 13 de janeiro de 2006, Luiz Roberto Rocha Dória, com 50 anos de idade, até então vendedor externo a nível de Brasil, migrou da cidade de São Paulo, capital, para a cidade de São Carlos, onde adquiriu a antiga loja de produtos naturais NATURALIE, sucessora do EMPÓRIO DO ARROZ INTEGRAL.
        </p>
        <p>
          Neste 19 anos, especializamos em comercializar produtos naturais, sustentáveis, de procedência ilibada, praticando os menores preços sustentáveis e tendo a maior variedade possível de produtos.
        </p>
        <p>
          Pautando em informações fidedignas, baseado em profissionais de formação acadêmica e ou de instituições de reconhecimento acadêmico mundial.
        </p>

        <h2>Nossa Localização</h2>
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.8142305653396!2d-47.89063492412567!3d-22.01756994386799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87731e30c5b5d%3A0x694e37b381a331c8!2sR.%20Aquidaban%2C%20980%20-%20Centro%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013560-120!5e0!3m2!1sen!2sbr!4v1707106234567!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </MainContent>

      <Footer>
        <p>© 2024 Doria Produtos Naturais. Todos os direitos reservados.</p>
      </Footer>
    </>
  )
}

export default Sobre
