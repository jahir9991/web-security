import { subtle } from "uncrypto";

const getNewOtpWithHash = async (
  phone: string,
  secretKey: string,
  ttl: number = 5 * 60 * 1000 //timestamp to 5 minutes in the future as default
) => {
  const encoder = new TextEncoder();
  const secretKeyData = encoder.encode(secretKey);

  const otp = (Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1);
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`; // phone.otp.expiry_timestamp

  const key = await subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const mac = await subtle.sign("HMAC", key, encoder.encode(data));

  const hash = btoa(String.fromCharCode(...new Uint8Array(mac)));
  const fullHash = `${hash}.${expires}`;
  return { hash: fullHash, otp, exp: ttl };
};

const verifyOTP = async (phone, fullHash, otp, secretKey) => {
  const encoder = new TextEncoder();
  const secretKeyData = encoder.encode(secretKey);

  let [hash, expires] = fullHash.split(".");
  let now = Date.now();

  if (now > parseInt(expires)) return false;

  const key = await subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );

  let data = `${phone}.${otp}.${expires}`;

  const byteStringToUint8Array = (byteString: any) => {
    const ui = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; ++i) {
      ui[i] = byteString.charCodeAt(i);
    }
    return ui;
  };

  const receivedMac = byteStringToUint8Array(atob(hash));
  const verified = await subtle.verify(
    "HMAC",
    key,
    receivedMac,
    encoder.encode(data)
  );

  return verified;
};

export const otpManager = {
  getNewOtpWithHash,
  verifyOTP,
};
