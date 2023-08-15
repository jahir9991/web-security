import { Context, Handler } from "hono";
import { otpManager } from "../../../../libs/otpManager";
import { HTTPException } from "hono/http-exception";

const demoSecretTime = Date.now();
const demoSecret = "mysecret1234567890";

const create: Handler = async (context: Context) => {
  const phone: string = context.req.query("phone");
  let secret: string = context.req.query("secret");

  if (!secret) secret = demoSecret;

  const { hash, otp ,exp} = await otpManager.getNewOtpWithHash(
    phone,
    secret,
    5 * 60 * 1000
  );

  return context.json({
    phone,
    hash,
    otp,
    exp
  });
};

const verify: Handler = async (context: Context) => {
  const phone: string = context.req.query("phone");
  const otp: string = context.req.query("otp");
  const hash: string = context.req.query("hash");
  let secret: string = context.req.query("secret");

  if (!phone || !otp || !hash) {
    throw new HTTPException(402, {
      message: "phone,otp,hash query not provided",
    });
  }

  if (!secret) secret = demoSecret;

  const isVarified = await otpManager.verifyOTP(phone, hash, otp, secret);

  return context.json({
    phone,
    otp,
    isVarified,
  });
};

const getSecret: Handler = async (context: Context) => {
  return context.json({
    secret: demoSecret,
    demoSecretTime: new Date(demoSecretTime),
  });
};

export const otpController = {
  create,
  verify,
  getSecret,
};
