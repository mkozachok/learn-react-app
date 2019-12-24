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

export const post = (url: string, payload: any) => (
  fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)}
    )
    .then(res => handleError(res))
    .then(res => res.data)
)

export const put = (url: string, payload: any) => (
  fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)}
    )
    .then(res => handleError(res))
    .then(res => res.data)
)

export const remove = (url: string) => (
  fetch(url, {
    method: 'DELETE'
  })
    .then(res => handleError(res))
    .then(res => res.data)
)
