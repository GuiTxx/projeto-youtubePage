let tokenClient;


function credentialsUSER_Response(response){
    const data = jwt_decode(response.credential);
    console.log(data);
    tokenClient.requestAccessToken({prompt: 'consent'});
    // Aqui você pode enviar os dados do usuário para o servidor ou armazená-los localmente
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: '1081628126061-h5pa6ehoer6emk7pq6qm1ctbsnntrsim.apps.googleusercontent.com',
        callback: credentialsUSER_Response
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

    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: '1081628126061-h5pa6ehoer6emk7pq6qm1ctbsnntrsim.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
        callback: (response) => {
            if (response.error) {
                error('Error fetching access token: ' + response.error);
                return;
            }
            console.log('Access token:', response.access_token);
        },
    });
}