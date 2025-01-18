import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Legos/Header'
import NaturalImage from '/src/assets/Natural.jpg'
import OatsImage from '/src/assets/Prod/Oats.jpg'
import FavoImage from '/src/assets/Prod/Favo.jpg'
import ChaImage from '/src/assets/Prod/Cha.jpg'

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

const ContactInfo = styled.div`
  margin-top: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333333;
  padding: 1rem;
  background-color: rgba(6, 135, 67, 0.05);
  border-radius: 8px;

  a {
    color: #068743;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const MainContent = styled.main`
  padding: 3rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const ProductCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(6, 135, 67, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(6, 135, 67, 0.2);
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
    border-color: #068743;
    box-shadow: 0 12px 20px rgba(6, 135, 67, 0.15);
  }

  h3 {
    color: #333333;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666666;
    line-height: 1.6;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
`

const Footer = styled.footer`
  background-color: #f8f8f8;
  color: #333333;
  text-align: center;
  padding: 2rem;
  border-top: 3px solid #068743;
  box-shadow: 0 -4px 12px rgba(6, 135, 67, 0.1);
`

function Home() {
  const [products] = useState([
    {
      title: "Aveia Orgânica",
      description: "Cereal integral rico em fibras e nutrientes essenciais",
      image: OatsImage
    },
    {
      title: "Chá Oolong",
      description: "Chá tradicional chinês rico em antioxidantes",
      image: ChaImage
    },
    {
      title: "Favo de Mel",
      description: "Mel puro direto da colmeia em seu favo natural",
      image: FavoImage
    }
  ])

  return (
    <>
      <GlobalStyle />
      <Header />

      <Hero>
        <HeroContent>
          <HeroTitle>Produtos Naturais à sua disposição!</HeroTitle>
          <HeroSubtitle>Descubra nossa linha de produtos orgânicos e sustentáveis</HeroSubtitle>
          <p>A importância dos produtos naturais!</p>
          <p>Os produtos naturais são essenciais para uma vida mais saudável e equilibrada. Eles são livres de químicos artificiais, respeitam o meio ambiente em sua produção e oferecem benefícios genuínos para nossa saúde e bem-estar. Ao escolher produtos naturais, você cuida de si mesmo e do planeta.</p>
        </HeroContent>
        <HeroImage src={NaturalImage} alt="Produtos Naturais" />
      </Hero>

      <MainContent>
        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </ProductCard>
          ))}
        </ProductGrid>
      </MainContent>

      <Footer>
        <p>© 2024 Doria Produtos Naturais. Todos os direitos reservados.</p>
      </Footer>
    </>
  )
}

export default Home
