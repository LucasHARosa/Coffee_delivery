import { Intro } from './Intro'

import { CardCoffe } from './CardCoffe'
import { ListaCoffe , Tituloh1} from './styles'

export interface Coffe{
  title: string
  descricao:string
  valor:number
  tags: Array<string>
  img:string
  quantidade:number
}
const CoffeList:Array<Coffe> = [{
  "title":"Expresso Tradicional",
  "descricao":"O tradicional café feito com água quente e grãos moídos",
  "valor": 9.90,
  "tags":["Tradicional"],
  "img":'/coffes/Image.png',
  "quantidade":0
},
{
  "title":"Expresso Americano",
  "descricao":"Expresso diluído, menos intenso que o tradicional",
  "valor": 9.90,
  "tags":["Tradicional"],
  "img":'/coffes/Type=Americano.png',
  "quantidade":0
},
{
  "title":"Expresso Cremoso",
  "descricao":"Café expresso tradicional com espuma cremosa",
  "valor": 9.90,
  "tags":["Tradicional"],
  "img":'/coffes/Type=Expresso Cremoso.png',
  "quantidade":0
},
{
  "title":"Expresso Gelado",
  "descricao":"Bebida preparada com café expresso e cubos de gelo",
  "valor": 9.90,
  "tags":["Tradicional", "gelado"],
  "img":'/coffes/Type=Café Gelado.png',
  "quantidade":0
},
{
  "title":"Café com Leite",
  "descricao":"Meio a meio de expresso tradicional com leite vaporizado",
  "valor": 9.90,
  "tags":["Tradicional", "Com leite"],
  "img":'/coffes/Type=Café com Leite.png',
  "quantidade":0
},
{
  "title":"Latte",
  "descricao":"Uma dose de café expresso com o dobro de leite e espuma cremosa",
  "valor": 9.90,
  "tags":["Tradicional", "Com leite"],
  "img":'/coffes/Type=Latte.png',
  "quantidade":0
},
{
  "title":"Capuccino",
  "descricao":"Bebida com canela feita de doses iguais de café, leite e espuma",
  "valor": 9.90,
  "tags":["Tradicional","Com leite"],
  "img":'/coffes/Type=Capuccino.png',
  "quantidade":0
},
{
  "title":"Macchiato",
  "descricao":"Café expresso misturado com um pouco de leite quente e espuma",
  "valor": 9.90,
  "tags":["Tradicional", "Com leite"],
  "img":'/coffes/Type=Macchiato.png',
  "quantidade":0
},
{
  "title":"Mocaccino",
  "descricao":"Café expresso com calda de chocolate, pouco leite e espuma",
  "valor": 9.90,
  "tags":["Tradicional", "Com leite"],
  "img":'/coffes/Type=Mochaccino.png',
  "quantidade":0
},
{
  "title":"Chocolate Quente",
  "descricao":"Bebida feita com chocolate dissolvido no leite quente e café",
  "valor": 9.90,
  "tags":["Especial", "Com leite"],
  "img":'/coffes/Type=Chocolate Quente.png',
  "quantidade":0
},
{
  "title":"Cubano",
  "descricao":"Drink gelado de café expresso com rum, creme de leite e hortelã",
  "valor": 9.90,
  "tags":["Especial","Alcoólico", "Gelado"],
  "img":'/coffes/Type=Cubano.png',
  "quantidade":0
},
{
  "title":"Havaiano",
  "descricao":"Bebida adocicada preparada com café e leite de coco",
  "valor": 9.90,
  "tags":["Especial"],
  "img":'/coffes/Type=Havaiano.png',
  "quantidade":0
}
,
{
  "title":"Irlandês",
  "descricao":"Bebida a base de café, uísque irlandês, açúcar e chantilly",
  "valor": 9.90,
  "tags":["Especial","Alcoólico"],
  "img":'/coffes/Type=Irlandês.png',
  "quantidade":0
}
,
{
  "title":"Árabe",
  "descricao":"Bebida preparada com grãos de café árabe e especiarias",
  "valor": 9.90,
  "tags":["Especial"],
  "img":'/coffes/Type=Árabe.png',
  "quantidade":0
}]


export function Home(){
  
  return (
    <div>
      <Intro/>
      <Tituloh1>Nossos Cafés</Tituloh1>
      <ListaCoffe>
        
        {CoffeList.map((coffe,indice)=>{
          return(
            <CardCoffe 
              key={indice}
              coffe={coffe}
            />
          )
        })}
      </ListaCoffe>
    </div>
    
  )
}