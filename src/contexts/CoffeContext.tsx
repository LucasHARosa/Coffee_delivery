import { ReactNode, createContext, useEffect, useState } from 'react'
import Image from '../assets/coffes/Image.png'
import Type_Americano from '../assets/coffes/Type_Americano.png'
import Type_Árabe from '../assets/coffes/Type_Árabe.png'
import Type_Cafe_com_Leite from '../assets/coffes/Type_Cafe_com_Leite.png'
import Type_Cafe_Gelado from '../assets/coffes/Type_Cafe_Gelado.png'
import Type_Capuccino from '../assets/coffes/Type_Capuccino.png'
import Type_Chocolate_Quente from '../assets/coffes/Type_Chocolate_Quente.png'
import Type_Cubano from '../assets/coffes/Type_Cubano.png'
import Type_Expresso_Cremoso from '../assets/coffes/Type_Expresso_Cremoso.png'
import Type_Havaiano from '../assets/coffes/Type_Havaiano.png'
import Type_Irlandês from '../assets/coffes/Type_Irlandês.png'
import Type_Latte from '../assets/coffes/Type_Latte.png'
import Type_Macchiato from '../assets/coffes/Type_Macchiato.png'
import Type_Mochaccino from '../assets/coffes/Type_Mochaccino.png'


export interface Coffe{
  title: string
  descricao:string
  price:number
  tags: Array<string>
  img:string
  amount: number
}

interface DataUser{
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  payment ?: string
}

//Interface do contexto
interface CoffeContextData{
  coffeList: Coffe[]
  addCoffe: (coffe: Coffe, quantidade: number) => void
  removeCoffe: (coffe: Coffe) => void
  addQuantity: (coffe: Coffe) => void
  removeQuantity: (coffe: Coffe) => void
  saveDataUser: (data: DataUser) => void
  dataUser: DataUser
  savePayment: (payment: string) => void
}

// Criando o contexto
export const CoffeContext = createContext({} as CoffeContextData)

// Meras formalidades
interface CoffeContextProviderProps{
  children: ReactNode
}

// função provider
export function CoffeContextProvider({children}: CoffeContextProviderProps){
  const [dataUser, setDataUser] = useState<DataUser>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    payment: ''
  } as DataUser)
  const [coffeList, setcoffeList] = useState<Coffe[]>([
  {
    "title":"Expresso Tradicional",
    "descricao":"O tradicional café feito com água quente e grãos moídos",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":Image,
    "amount": 0
  },
  {
    "title":"Expresso Americano",
    "descricao":"Expresso diluído, menos intenso que o tradicional",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":Type_Americano,
    "amount": 0
  },
  {
    "title":"Expresso Cremoso",
    "descricao":"Café expresso tradicional com espuma cremosa",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":Type_Expresso_Cremoso,
    "amount": 0
  },
  {
    "title":"Expresso Gelado",
    "descricao":"Bebida preparada com café expresso e cubos de gelo",
    "price": 9.90,
    "tags":["Tradicional", "gelado"],
    "img":Type_Cafe_Gelado,
    "amount": 0
  },
  {
    "title":"Café com Leite",
    "descricao":"Meio a meio de expresso tradicional com leite vaporizado",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Cafe_com_Leite,
    "amount": 0
  },
  {
    "title":"Latte",
    "descricao":"Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Latte,
    "amount": 0
  },
  {
    "title":"Capuccino",
    "descricao":"Bebida com canela feita de doses iguais de café, leite e espuma",
    "price": 9.90,
    "tags":["Tradicional","Com leite"],
    "img":Type_Capuccino,
    "amount": 0
  },
  {
    "title":"Macchiato",
    "descricao":"Café expresso misturado com um pouco de leite quente e espuma",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Macchiato,
    "amount": 0
  },
  {
    "title":"Mocaccino",
    "descricao":"Café expresso com calda de chocolate, pouco leite e espuma",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Mochaccino,
    "amount": 0
  },
  {
    "title":"Chocolate Quente",
    "descricao":"Bebida feita com chocolate dissolvido no leite quente e café",
    "price": 9.90,
    "tags":["Especial", "Com leite"],
    "img":Type_Chocolate_Quente,
    "amount": 0
  },
  {
    "title":"Cubano",
    "descricao":"Drink gelado de café expresso com rum, creme de leite e hortelã",
    "price": 9.90,
    "tags":["Especial","Alcoólico", "Gelado"],
    "img":Type_Cubano,
    "amount": 0
  },
  {
    "title":"Havaiano",
    "descricao":"Bebida adocicada preparada com café e leite de coco",
    "price": 9.90,
    "tags":["Especial"],
    "img":Type_Havaiano,
    "amount": 0
  }
  ,
  {
    "title":"Irlandês",
    "descricao":"Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "price": 9.90,
    "tags":["Especial","Alcoólico"],
    "img":Type_Irlandês,
    "amount": 0
  }
  ,
  {
    "title":"Árabe",
    "descricao":"Bebida preparada com grãos de café árabe e especiarias",
    "price": 9.90,
    "tags":["Especial"],
    "img":Type_Árabe,
    "amount": 0
  }

  ])

  function saveDataUser(dataNew: DataUser){
    dataNew.payment = dataUser.payment
    setDataUser(dataNew)
  }

  function savePayment(payment: string){
    setDataUser({...dataUser, payment})
  }

  useEffect(() => {
    const coffeStorage = localStorage.getItem('@coffe-delivery:coffe-List-1.0.0')
    if(coffeStorage){
      setcoffeList(JSON.parse(coffeStorage))
    }
  }, [])

  function saveCoffe(coffe:Coffe[]){
    localStorage.setItem('@coffe-delivery:coffe-List-1.0.0', JSON.stringify(coffe))
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
      removeCoffe,
      saveDataUser,
      dataUser,
      savePayment
    }}>
      {children}
    </CoffeContext.Provider>
  )
}