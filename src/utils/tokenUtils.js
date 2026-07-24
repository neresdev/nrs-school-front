export function isJwtInvalid(token) {
  if (!token) return true;

  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const currentTime = Math.floor(Date.now() / 1000);

    if (decodedPayload.exp) {
      return decodedPayload.exp < currentTime;
    }

    if (decodedPayload.iat) {
      const expirationTime = decodedPayload.iat + 3600;
      return expirationTime < currentTime;
    }

    return true;
  } catch (e) {
    console.error('Error when check token expiration:', e);
    return true;
  }
}
