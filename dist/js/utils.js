const key = "i9r8RSYSlIHjPv5EX+LTZ4b8XMvr1FMgjZYlI0uDzvg="
const iv = "9iebtE3ryRW8CrVCI08psA=="

// 加密
function encrypt(keyBase64, ivBase64, data) {
    var key = forge.util.decode64(keyBase64);
    var iv = forge.util.decode64(ivBase64);
    var cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({iv: iv});
    cipher.update(forge.util.createBuffer(data));
    cipher.finish();
    var encrypted = cipher.output;
    return forge.util.encode64(encrypted.getBytes());
}

// 解密
function decrypt(keyBase64, ivBase64, encryptedData) {
    var key = forge.util.decode64(keyBase64);
    var iv = forge.util.decode64(ivBase64);
    var decipher = forge.cipher.createDecipher('AES-CBC', key);
    decipher.start({iv: iv});
    decipher.update(forge.util.createBuffer(forge.util.decode64(encryptedData)));
    decipher.finish();
    return decipher.output.data;
}