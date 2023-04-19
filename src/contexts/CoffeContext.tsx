import { ReactNode, createContext, useEffect, useState } from 'react'

export interface Coffe{
  title: string
  descricao:string
  price:number
  tags: Array<string>
  img:string
  amount: number
}


//Interface do contexto
interface CoffeContextData{
  coffeList: Coffe[]
  addCoffe: (coffe: Coffe, quantidade: number) => void
  removeCoffe: (coffe: Coffe) => void
  addQuantity: (coffe: Coffe) => void
  removeQuantity: (coffe: Coffe) => void
}

// Criando o contexto
export const CoffeContext = createContext({} as CoffeContextData)

// Meras formalidades
interface CoffeContextProviderProps{
  children: ReactNode
}

// função provider
export function CoffeContextProvider({children}: CoffeContextProviderProps){

  const [coffeList, setcoffeList] = useState<Coffe[]>([
  {
    "title":"Expresso Tradicional",
    "descricao":"O tradicional café feito com água quente e grãos moídos",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":'/coffes/Image.png',
    "amount": 0
  },
  {
    "title":"Expresso Americano",
    "descricao":"Expresso diluído, menos intenso que o tradicional",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":'/coffes/Type=Americano.png',
    "amount": 0
  },
  {
    "title":"Expresso Cremoso",
    "descricao":"Café expresso tradicional com espuma cremosa",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":'/coffes/Type=Expresso Cremoso.png',
    "amount": 0
  },
  {
    "title":"Expresso Gelado",
    "descricao":"Bebida preparada com café expresso e cubos de gelo",
    "price": 9.90,
    "tags":["Tradicional", "gelado"],
    "img":'/coffes/Type=Café Gelado.png',
    "amount": 0
  },
  {
    "title":"Café com Leite",
    "descricao":"Meio a meio de expresso tradicional com leite vaporizado",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":'/coffes/Type=Café com Leite.png',
    "amount": 0
  },
  {
    "title":"Latte",
    "descricao":"Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":'/coffes/Type=Latte.png',
    "amount": 0
  },
  {
    "title":"Capuccino",
    "descricao":"Bebida com canela feita de doses iguais de café, leite e espuma",
    "price": 9.90,
    "tags":["Tradicional","Com leite"],
    "img":'/coffes/Type=Capuccino.png',
    "amount": 0
  },
  {
    "title":"Macchiato",
    "descricao":"Café expresso misturado com um pouco de leite quente e espuma",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":'/coffes/Type=Macchiato.png',
    "amount": 0
  },
  {
    "title":"Mocaccino",
    "descricao":"Café expresso com calda de chocolate, pouco leite e espuma",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":'/coffes/Type=Mochaccino.png',
    "amount": 0
  },
  {
    "title":"Chocolate Quente",
    "descricao":"Bebida feita com chocolate dissolvido no leite quente e café",
    "price": 9.90,
    "tags":["Especial", "Com leite"],
    "img":'/coffes/Type=Chocolate Quente.png',
    "amount": 0
  },
  {
    "title":"Cubano",
    "descricao":"Drink gelado de café expresso com rum, creme de leite e hortelã",
    "price": 9.90,
    "tags":["Especial","Alcoólico", "Gelado"],
    "img":'/coffes/Type=Cubano.png',
    "amount": 0
  },
  {
    "title":"Havaiano",
    "descricao":"Bebida adocicada preparada com café e leite de coco",
    "price": 9.90,
    "tags":["Especial"],
    "img":'/coffes/Type=Havaiano.png',
    "amount": 0
  }
  ,
  {
    "title":"Irlandês",
    "descricao":"Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "price": 9.90,
    "tags":["Especial","Alcoólico"],
    "img":'/coffes/Type=Irlandês.png',
    "amount": 0
  }
  ,
  {
    "title":"Árabe",
    "descricao":"Bebida preparada com grãos de café árabe e especiarias",
    "price": 9.90,
    "tags":["Especial"],
    "img":'/coffes/Type=Árabe.png',
    "amount": 0
  }

  ])

  useEffect(() => {
    const coffeStorage = localStorage.getItem('@coffe-delivery:coffe-List-1.0.0')
    if(coffeStorage){
      setcoffeList(JSON.parse(coffeStorage))
      console.log("carregou")
    }
  }, [])

  function saveCoffe(coffe:Coffe[]){
    localStorage.setItem('@coffe-delivery:coffe-List-1.0.0', JSON.stringify(coffe))
    console.log("salvou")
  }

  function addCoffe(coffe: Coffe, quantidade: number){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        coffeUser.amount = quantidade
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  function removeCoffe(coffe: Coffe){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        coffeUser.amount = 0
        return coffeUser
      }
      else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  function addQuantity(coffe: Coffe){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        coffeUser.amount += 1
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  function removeQuantity(coffe: Coffe){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        if(coffeUser.amount > 0){
          coffeUser.amount -= 1
        }
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  return(
    <CoffeContext.Provider value={{
      coffeList,
      addCoffe,
      addQuantity,
      removeQuantity,
      removeCoffe

    }}>
      {children}
    </CoffeContext.Provider>
  )
}