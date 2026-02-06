let tokenClient;

export function credentials_of_User(response) {
    const data = jwt_decode(response.credential);
    console.log(data);

    if (data.email_verified) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        alert('Verifique o seu Email e tente novamente!')
    }
}

export function init_Google() {
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: '1081628126061-h5pa6ehoer6emk7pq6qm1ctbsnntrsim.apps.googleusercontent.com',
            callback: credentials_of_User
        });

        // Renderiza o botão do Google (funciona em HTTP local)
        google.accounts.id.renderButton(
            document.getElementById('buttonGoogle'),
            {
                theme: 'filled_black',
                size: 'large',
                text: 'signin',
                shape: 'pill',
                type: 'standard',
                logo_alignment: 'left',
                width: "100",
            }
        );
    }
}

// Inicializa o cliente OAuth 2.0, pegando o token de acesso
export function init_OAuth_token(onsuccess) {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: '1081628126061-h5pa6ehoer6emk7pq6qm1ctbsnntrsim.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
        callback: (response) => {
            if (response.error) {
                console.error('Error fetching access token: ' + response.error);
                return;
            }
            onsuccess(response.access_token);
        },
    });
}