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
            authenticatorAttachment: "cross-platform",
        },
        timeout: 60000,
        attestation: "none"
    };
    
    const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions
    });

    console.log(credential);
    
}

if (credential === 'lvtEMttziB28TVipHdmL1wjXfHJN9GSVLYREaf10bvo') {
    window.location.replace("https://www.apple.com/");
}
