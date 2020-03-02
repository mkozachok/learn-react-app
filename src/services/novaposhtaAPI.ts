import novaposhta_api from '../configs/novaposhta_api';
import api from '../configs/api';
import {post} from './http';
import { IProduct } from '../types/product';

const novaposhtaURL = `${api.novaposhta}`;

export const novaposhtaAPI = {
  getSettlements: (city: string) => post(novaposhtaURL, novaposhta_api('AddressGeneral', 'searchSettlements', {"CityName": city})),
  getWarehouses: (ref: string) => post(novaposhtaURL, novaposhta_api('AddressGeneral', 'getWarehouses', {"CityRef": ref})),
}

export default novaposhtaAPI;
