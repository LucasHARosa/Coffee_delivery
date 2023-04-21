import { BaseInput, ContainerFormAdress, InputLong, InputSmall, Inputblock, InputMedio, ContainerInput } from "./styles";
import { MapPinLine } from "phosphor-react";

import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from "react";

import {useForm} from 'react-hook-form'
import { CoffeContext } from "../../../contexts/CoffeContext";

const newDataFormValidationSchema = zod.object({
  cep : zod.string().min(1, 'Informe o CEP'),
  rua : zod.string().min(1, 'Informe a rua'),
  numero : zod.string().min(1, 'Informe o número'),
  complemento : zod.string().min(1, 'Informe o complemento'),
  bairro : zod.string().min(1, 'Informe o bairro'),
  cidade : zod.string().min(1, 'Informe a cidade'),
  uf : zod.string().min(1, 'Informe o UF'),
})
type NewFormData = zod.infer<typeof newDataFormValidationSchema>

export function FormAdress() {
  const {saveDataUser,dataUser} = useContext(CoffeContext)
  
  const newForm = useForm<NewFormData>({
    resolver: zodResolver(newDataFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    }
  })
  const {register, handleSubmit, formState} = newForm

  function handleForm(data: NewFormData){
    saveDataUser(data)
  }

  return (
    <ContainerFormAdress>
      <div>
        <span>
          <MapPinLine size={22} />
        </span>
        <div>
          <h4>Endereço de entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <ContainerInput id="endereco" onSubmit={handleSubmit(handleForm)}>
        <div>
          <Inputblock 
            type="text" 
            placeholder="CEP" 
            {...register('cep')} 
          />
          <InputLong 
            type="text" 
            placeholder="Rua" 
            {...register('rua')}
          />
          <div>
            <BaseInput 
              type="text" 
              placeholder="Número"
              {...register('numero')}
            />
            <InputLong 
              type="text" 
              placeholder="Complemento"
              {...register('complemento')}      
            />
          </div>
          <div>
            <BaseInput 
              type="text" 
              placeholder="Bairro"
              {...register('bairro')} 
            />
            <InputMedio 
              type="text" 
              placeholder="Cidade"
              {...register('cidade')} 
            />
            <InputSmall 
              type="text" 
              placeholder="UF"
              {...register('uf')} 
            />
          </div>
        </div>
      </ContainerInput>
    </ContainerFormAdress>
  );
}