import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin} from 'phosphor-react'

import LogoCoffe from '../../assets/LogoCoffe.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title="Home">
          <img src={LogoCoffe} alt="" />
        </NavLink>
      </span>
      <div>
        <span>
          < MapPin size={22} weight="fill"/>
          <p>Brasília, DF</p>
        </span>
        <nav>
          <NavLink to="/cart" title="Cart">
            < ShoppingCart size={22} weight="fill"/>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}