import { ReactNode, createContext, useState } from 'react'
import { Coffe } from '../pages/Home'

interface CoffeUser{
  coffe: Coffe
  quantidade: number
}

//Interface do contexto
interface CoffeContextData{
  coffeSelected: CoffeUser[]
  addCoffe: (coffe: Coffe, quantidade: number) => void
}

// Criando o contexto
export const CoffeContext = createContext({} as CoffeContextData)

// Meras formalidades
interface CoffeContextProviderProps{
  children: ReactNode
}

// função provider
export function CoffeContextProvider({children}: CoffeContextProviderProps){

  const [coffeSelected, setCoffeSelected] = useState<CoffeUser[]>([])

  function addCoffe(coffe: Coffe, quantidade: number){
    let achou = 0;
    const newCoffeList = coffeSelected.filter(coffeUser => {
      if(coffeUser.coffe.title === coffe.title){
        coffeUser.quantidade = quantidade
        achou = 1
        return coffeUser
      }else{
        return coffeUser
      }

    })
    if(achou === 0){
      const coffeUser = {
        coffe,
        quantidade
      }
      setCoffeSelected([...coffeSelected, coffeUser])
    }else{
      setCoffeSelected(newCoffeList)
    }
    console.log(achou)
  }

  function removeCoffe(coffe: Coffe){
    const newCoffeList = coffeSelected.filter(coffeUser => {
      if(coffeUser.coffe.title !== coffe.title){
        return coffeUser
      }
    })
    setCoffeSelected(newCoffeList)
  }

  function addQuantidade(coffe: Coffe){
    const newCoffeList = coffeSelected.filter(coffeUser => {
      if(coffeUser.coffe.title === coffe.title){
        coffeUser.quantidade += 1
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setCoffeSelected(newCoffeList)
  }

  function removeQuantidade(coffe: Coffe){
    const newCoffeList = coffeSelected.filter(coffeUser => {
      if(coffeUser.coffe.title === coffe.title){
        if(coffeUser.quantidade > 0){
          coffeUser.quantidade -= 1
        }
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setCoffeSelected(newCoffeList)
  }

  return(
    <CoffeContext.Provider value={{
      coffeSelected,
      addCoffe

    }}>
      {children}
    </CoffeContext.Provider>
  )
}