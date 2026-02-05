function credentialsUSER_Response(response){
    const data = jwt_decode(response.credential);
    console.log(data);
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
            logo_alignment: 'left'
        }
    );
}
