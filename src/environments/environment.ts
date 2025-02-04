import * as AuthenticationProviders from '@liquescens/auth-js';

export const environment = 
{
    authentication:
    {
        id: 'b0897f7e-c42c-40e0-afda-0394ad72d668',
        host: 'https://auth-demo-express-1011928235427.us-central1.run.app',
        redirect_uri: 'https://auth-demo-express-1011928235427.us-central1.run.app/auth',
        providers:
        [
            new AuthenticationProviders.Google({ client_id: '1011928235427-2qva1pc8n3ndo2karcj8fmcj9co9oqgq.apps.googleusercontent.com' }),
            new AuthenticationProviders.Microsoft({ client_id: 'c695c89f-4436-4632-b3fe-618c267fdab1' }),
            new AuthenticationProviders.GitHub({ client_id: 'Ov23liGiNn3DINufXENW' }),
        ]
    }
};