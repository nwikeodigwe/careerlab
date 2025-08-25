import { OAUTH_SCOPES } from "@/constants";

class Auth {
  private linkedinUrl =
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=";
  private googleUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=";

  constructor() {
    this.linkedinUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
      import.meta.env.VITE_LINKEDIN_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_BASE_URI
    }/auth/callback&state=${this.generateState()}&scope=${OAUTH_SCOPES.linkedin.join(
      "%20"
    )}`;
    this.googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
      import.meta.env.VITE_GOOGLE_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_BASE_URI
    }/auth/callback&response_type=code&scope=${OAUTH_SCOPES.google.join(
      "%20"
    )}`;
  }

  generateState() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  signInWithGoogle = () => {
    window.location.href = auth.googleUrl;
  };

  signInWithLinkedIn = () => {
    window.location.href = auth.linkedinUrl;
  };
}

export const auth = new Auth();
export default Auth;
