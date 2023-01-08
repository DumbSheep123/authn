async function doWebAuthnCreate() {
    const publicKeyCredentialCreationOptions = {
        challenge: Uint8Array.from(
            "hi", c => c.charCodeAt(0)),
        rp: {
            name: "AuthSheild™",
            id: "webauthn.madebyesmel.com",
        },
        user: {
            id: Uint8Array.from(
                "UZSL85T9AFC", c => c.charCodeAt(0)),
            name: "0001",
            displayName: "Andrew Frykman",
        },
        pubKeyCredParams: [{alg: -7, type: "public-key"}],
        authenticatorSelection: {
            authenticatorAttachment: "platform",
        },
        timeout: 60000,
        attestation: "none"
    };
    
    const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
    });

    console.log(credential);
    
}

if (credential === 'CernQ1sGOOO-9WlNoUFy7FRPpOdb87JtUf4gE4lEw7c') {
    window.location.replace("https://www.apple.com/");
}
