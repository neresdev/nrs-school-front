import { Navigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { isJwtInvalid } from '../../utils/tokenUtils';
import { toast } from 'react-toastify';

const SESSION_EXPIRED_MESSAGE = "Sua sessão expirou. Faça login novamente.";

export default function RequireAuth({ children }) {
  const { token } = useToken();

  if (isJwtInvalid(token)) {
    if (token) {
      toast.error(SESSION_EXPIRED_MESSAGE, {
        position: "top-right",
        autoClose: 5000,
      });
    }
    return <Navigate to="/login" replace />;
  }

  return children;
}
