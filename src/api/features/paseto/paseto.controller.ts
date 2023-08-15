import { Context, Handler } from "hono";
import { otpManager } from "../../../libs/otpManager";
import { HTTPException } from "hono/http-exception";
import { generateKeys, sign, verify } from "paseto-ts/v4";

const demoKeys = {
  secretKey:
    "k4.secret.Z-4-THnJAKpC-6JCPq2C6lEVezY0ApY-Z_ST-uLFYt9mzw_FcOanF0vzCrC_16Qgn5_EE51wedISj5UnSFW2ng",
  publicKey: "k4.public.Zs8PxXDmpxdL8wqwv9ekIJ-fxBOdcHnSEo-VJ0hVtp4",
};

const createToken: Handler = async (context: Context) => {
  let payload: string = context.req.query("payload");
  const footer: string = context.req.query("footer");
  let secretkey: string = context.req.query("secretkey");

  if (!payload) {
    throw new HTTPException(402, {
      message: "payload query not provided",
    });
  }

  try {
    payload = JSON.parse(payload);
  } catch (error) {
    throw new HTTPException(402, {
      message: "payload is not a json",
    });
  }

  if (!secretkey) secretkey = demoKeys.secretKey;

  const token = await sign(secretkey, payload);

  return context.json({
    token,
  });
};

const verifyToken: Handler = async (context: Context) => {
  const token: string = context.req.query("token");
  let publicKey: string = context.req.query("publicKey");

  if (!token) {
    throw new HTTPException(402, {
      message: "token query not provided",
    });
  }

  if (!publicKey) publicKey = demoKeys.publicKey;
  try {
    const isVarified = await verify(publicKey, token);

    return context.json({
      isVarified,
    });
  } catch (error) {
    throw new HTTPException(402, {
      message: error,
    });
  }
};

const keyGen: Handler = async (context: Context) => {
  const keys = await generateKeys("public");

  return context.json({
    keys,
    generateTime: new Date(Date.now()),
  });
};

const getDemoKeys: Handler = async (context: Context) => {
  return context.json(demoKeys);
};

export const pasetoController = {
  keyGen,
  getDemoKeys,
  createToken,
  verifyToken,
};
