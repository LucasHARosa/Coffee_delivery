import { BaseInput, ContainerFormAdress, InputLong, InputSmall, Inputblock, InputMedio } from "./styles";

import { MapPinLine } from "phosphor-react";

export function FormAdress() {
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
      <form action="">
        <div>
          <Inputblock type="text" placeholder="CEP" />
          <InputLong type="text" placeholder="Rua" />
          <div>
            <BaseInput type="text" placeholder="Número" />
            <InputLong type="text" placeholder="Complemento" />
          </div>
          <div>
            <BaseInput type="text" placeholder="Bairro" />

            <InputMedio type="text" placeholder="Cidade" />
            <InputSmall type="text" placeholder="UF" />
          </div>
        </div>
      </form>
    </ContainerFormAdress>
  );
}