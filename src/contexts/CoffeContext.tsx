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

  return(
    <CoffeContext.Provider value={{
      coffeSelected,
      addCoffe

    }}>
      {children}
    </CoffeContext.Provider>
  )
}