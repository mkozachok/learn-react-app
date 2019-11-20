const handleError = (res: any) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res.json();
}

export const productAPI = {
  getProductByID: (product_id: string) => (
    fetch(`https://reqres.in/api/users/${product_id}`)
      .then(res => handleError(res))
      .then(res => res.data)
  )
}

export default productAPI;
