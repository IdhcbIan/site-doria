import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
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

const BrandsSlider = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 2rem 0;
  margin: 2rem 0;
  background: #f8f8f8;
  border-radius: 15px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #068743;
    border-radius: 4px;
  }
`

const BrandItem = styled.div`
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 0 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #068743;
`

const PageTitle = styled.h1`
  text-align: center;
  color: #333333;
  margin: 2rem 0;
  font-size: 2.5rem;
`

const Footer = styled.footer`
  background-color: #f8f8f8;
  color: #333333;
  text-align: center;
  padding: 2rem;
  border-top: 3px solid #068743;
  box-shadow: 0 -4px 12px rgba(6, 135, 67, 0.1);
`

function Produtos() {
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
      
      <MainContent>
        <PageTitle>Nossos Produtos</PageTitle>
        
        <BrandsSlider>
          <BrandItem>Marca 1</BrandItem>
          <BrandItem>Marca 2</BrandItem>
          <BrandItem>Marca 3</BrandItem>
          <BrandItem>Marca 4</BrandItem>
          <BrandItem>Marca 5</BrandItem>
          <BrandItem>Marca 6</BrandItem>
        </BrandsSlider>

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

export default Produtos
