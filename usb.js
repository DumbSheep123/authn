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
            name: "Andrew Frykman",
            displayName: "Andrew Frykman",
        },
        pubKeyCredParams: [{ alg: -7, type: "public-key" }],
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

    const input = document.getElementById("passkey-input").value;
    const crypto = window.crypto || window.msCrypto;
    const hash = crypto.subtle.digest("SHA-256", new TextEncoder().encode(credential));

    const hashArray = new Uint8Array(hash);
    let hashedInput = '';
    hashArray.forEach(b => hashedInput += b.toString(16).padStart(2, '0'));

    const storedPasskey = localStorage.getItem("hashedPasskey");

    if (hashedInput === storedPasskey) {
        alert('Authenticated');
    } else {
        document.location.href = "https://apple.com";
    }


}

// if (credential === 'lvtEMttziB28TVipHdmL1wjXfHJN9GSVLYREaf10bvo') {
//     window.location.replace("https://www.apple.com/");
// }

