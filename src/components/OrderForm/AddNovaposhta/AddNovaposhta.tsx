import React, {useState} from "react";
import AsyncSelect from "react-select/async";
import novaposhtaAPI from "../../../services/novaposhtaAPI";
import { StyledSelect } from "./StyledSelect";
import { AddWarehouses } from "../AddWarehouses/AddWarehouses";


export const AddNovaposhta = () => {
  const [cityRef, setCityRef] = useState(null);
  const loadOptions = (name: string) => {
    return novaposhtaAPI.getSettlements(name).then(data => data[0].Addresses);
  }

  return (
    <div>
      <StyledSelect>
        <AsyncSelect
          cacheOptions
          isClearable
          getOptionValue={option => option.DeliveryCity}
          getOptionLabel={option => option.Present}
          loadOptions={loadOptions}
          onChange={value => value && setCityRef(value as any)}
        />
      </StyledSelect>
      <AddWarehouses cityRef={cityRef}/>
    </div>
  );
};
