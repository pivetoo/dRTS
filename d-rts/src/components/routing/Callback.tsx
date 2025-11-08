import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../contexts';

export interface CallbackProps {
  redirectTo?: string;
  identityProviderUrl?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const Callback: React.FC<CallbackProps> = ({
  redirectTo = '/',
  identityProviderUrl,
  onSuccess,
  onError
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    const processCallback = async () => {
      try {
        const accessToken = searchParams.get('accessToken');
        const refreshToken = searchParams.get('refreshToken');

        if (!accessToken || !refreshToken) {
          throw new Error('Tokens não encontrados na URL');
        }

        const loginData = {
          accessToken,
          refreshToken,
          user: {
            id: 0,
            username: '',
            email: '',
            name: ''
          },
          contract: {
            contractId: 0,
            clientId: '',
            applicationName: '',
            companyName: '',
            companyDocument: '',
            urlBase: '',
            redirectUris: [],
            maxUsers: 0,
            isIdentityProvider: false
          }
        };

        login(loginData);

        if (onSuccess) {
          onSuccess();
        }

        navigate(redirectTo, { replace: true });
      } catch (error) {
        console.error('Erro no callback de autenticação:', error);

        if (onError) {
          onError(error as Error);
        }

        const idpUrl = identityProviderUrl || import.meta.env.VITE_IDENTITY_PROVIDER_URL;
        if (idpUrl) {
          window.location.href = idpUrl;
        } else {
          console.error('URL do Identity Provider não configurada');
        }
      }
    };

    processCallback();
  }, [searchParams, login, navigate, redirectTo, identityProviderUrl, onSuccess, onError]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background gap-6">
      <div className="w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin" />
    </div>
  );
};
