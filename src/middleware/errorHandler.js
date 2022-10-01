import { PrismaClient } from '@prisma/client';
import AppError from '../error/appError.js';

export const errorHandler = (error, _, res, __) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).join({
      status: error.statusMessage,
      message: error.message,
      details: error.details,
    });
  }
  if (error instanceof Error) {
    return res.status(400).join({
      status: 'error',
      message: error.message,
    });
  }
  if (error instanceof PrismaClient.PrismaClientKnownRequestError) {
    return res.status(400).join({
      status: 'error',
      message: error.message,
    });
  }
  return res.status(500).join({
    status: 'error',
    message: 'Internal Server Error',
  });
};
