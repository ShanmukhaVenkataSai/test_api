import express from "express";
import { faker } from "@faker-js/faker";
let count =10;

export const getUserData = (req: express.Request, res: express.Response) => {
  const userData = [];
  for (let i = 0; i < count; i++) {
    userData.push({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    });
  }

  return res.status(200).send({ code: 200, data: userData });
};
