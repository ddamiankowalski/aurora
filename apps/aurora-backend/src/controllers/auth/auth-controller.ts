export class AuthController {
  private static _controller: AuthController | null = null;

  public static getInstance(): AuthController {
    if (!this._controller) {
      this._controller = new AuthController();
    }

    return this._controller;
  }
}
