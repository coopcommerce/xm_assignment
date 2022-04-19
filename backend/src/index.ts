import cors from "cors";
import express, { Request, Response } from 'express';
import { registrationFormFieldsResponseExample, userResponse } from "../data/registrationResponse";
import { RegistrationField, RegistrationRequest } from "../interfaces/registration.model";


const PORT = 3080;

const app = express();
app.use(cors());
app.use(express.json());


// ROUTERS
export const findRegisterForm = async (): Promise<RegistrationField[]> => Object.values(registrationFormFieldsResponseExample);

app.get('/api/register', async (req: Request, res: Response) => {
  try {
    const registerFormItems = await findRegisterForm();
    res.status(200).send(registerFormItems);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post('/api/register', async (req: Request, res: Response) => {
  const {password, ...data } = req.body
  res.status(200).send(data);
});

// SERVER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


export default app