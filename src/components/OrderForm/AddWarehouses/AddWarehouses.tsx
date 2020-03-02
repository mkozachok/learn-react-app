import React, {useState, useEffect} from "react";
import Select from "react-select";
import novaposhtaAPI from "../../../services/novaposhtaAPI";
import { StyledSelect } from "../AddNovaposhta/StyledSelect";

export interface IAddWarehouses {
  cityRef: any;
}


export const AddWarehouses = ({cityRef}:IAddWarehouses) => {
  const [options, setOptions] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    if(cityRef){
      novaposhtaAPI.getWarehouses(cityRef.DeliveryCity).then(data => {
        setOptions(
        data.map((item: any) => {
          const newItem = {
            value: item.Ref,
            label: item.Description
          };
          console.log(newItem);
          return newItem;
        }));
      });
    }
  },[cityRef])

  return options ? (
        <StyledSelect>
        <Select
        value={selected}
        onChange={value => setSelected(value)}
        options={options}
        />
      </StyledSelect>
  ) : null;
};
