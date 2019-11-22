const handleError = (res: any) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res.json();
}

export const get = (url: string) => (
  fetch(url)
    .then(res => handleError(res))
    .then(res => res.data)
)
