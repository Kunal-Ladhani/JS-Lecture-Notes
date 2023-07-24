import { createHmac } from 'crypto';
  
  const secretKey = 'a37f08e4e3ff7c93c74a945e39bd554b0ad1f2a966b3fd449758d45db2029a77';
  
  export const encryptData = (str: any) => {
    const sha256Hasher = createHmac("sha256", secretKey);
    const hashResult = sha256Hasher.update(str).digest("hex");
    return hashResult;
  };
  
