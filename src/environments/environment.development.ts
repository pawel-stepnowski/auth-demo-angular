import * as Auth from '@liquescens/auth-js';

export const environment = 
{
    authentication:
    {
        host: 'https://127.0.0.1:8080',
        redirect_uri: 'https://127.0.0.1:8080/auth',
        providers:
        [
            new Auth.OAuth2.Google({ client_id: '1011928235427-2qva1pc8n3ndo2karcj8fmcj9co9oqgq.apps.googleusercontent.com' }),
            new Auth.OAuth2.Microsoft({ client_id: 'c695c89f-4436-4632-b3fe-618c267fdab1' }),
            new Auth.OAuth2.GitHub({ client_id: 'Ov23liGiNn3DINufXENW' }),
        ]
    }
};
