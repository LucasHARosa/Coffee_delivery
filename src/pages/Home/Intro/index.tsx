import { IntroContainer, Title, SubTitle, GridContainer, IntroTitle } from './styles'
import introcoffe from '../../../assets/introcoffe.png'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

export function Intro(){
  return (
    <IntroContainer>
      <div>
        <IntroTitle>
          <Title>
            Encontre o café perfeito para qualquer hora do dia
          </Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </SubTitle>
        </IntroTitle>
        <GridContainer>
          <div>
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </GridContainer>
      </div>
      <img src={introcoffe} alt="" />
    </IntroContainer>
  )
}