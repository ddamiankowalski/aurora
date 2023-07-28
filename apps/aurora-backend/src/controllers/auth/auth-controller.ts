export class AuthenticateController {
  private static _controller: AuthenticateController | null = null;

  public static getInstance(): AuthenticateController {
    if (!this._controller) {
      this._controller = new AuthenticateController();
    }

    return this._controller;
  }
}
