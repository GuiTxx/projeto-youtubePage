let tokenClient;
let tokenCallback;

export function credentials_of_User(response) {
    const data = jwt_decode(response.credential);
    console.log(data);

    if (data.email_verified) {
        if (!tokenClient) {
            if (typeof tokenCallback !== 'function') {
                console.error('OAuth token client not initialized. Call init_OAuth_token first.');
                return;
            }
            init_OAuth_token(tokenCallback);
        }
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
        document.querySelectorAll('.userLogin').forEach((container) => {
            google.accounts.id.renderButton(container, {
                theme: 'filled_black',
                size: 'large',
                text: 'signin',
                shape: 'pill',
                type: 'standard',
                logo_alignment: 'left',
                width: "100",
            });
        });
    }
}

// Inicializa o cliente OAuth 2.0, pegando o token de acesso
export function init_OAuth_token(onsuccess) {
    tokenCallback = onsuccess;
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: '1081628126061-h5pa6ehoer6emk7pq6qm1ctbsnntrsim.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
        callback: (response) => {
            if (response.error) {
                console.error('Error fetching access token: ' + response.error);
                return;
            }
            const expiresAt = Date.now()+ response.expires_in * 1000;
            localStorage.setItem('ytb_access_token', response.access_token);
            localStorage.setItem('access_expires_at', expiresAt);
            onsuccess(response.access_token);
        },
    });
}

export function getStoredToken() {
    const token = localStorage.getItem('ytb_access_token');
    const expiresAt = localStorage.getItem('access_expires_at');

    if (!token || !expiresAt) return null;

    if (Date.now() > Number(expiresAt)) {
        localStorage.removeItem('ytb_access_token');
        localStorage.removeItem('access_expires_at');
        return null;
    }

    return token;
}