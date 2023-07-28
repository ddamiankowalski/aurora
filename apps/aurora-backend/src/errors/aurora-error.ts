abstract class AuroraError extends Error {
  constructor(message: string) {
    super(message);
  }

  abstract errorType: string;
  abstract errorCode: number;
}

export default AuroraError;
