import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import {TwitterStrategy} from "remix-auth-twitter";

export type User = {
  id: number;
  screen_name: string;
  name: string;
  profile_image_url: string;
};

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

const clientID = TWITTER_CONSUMER_KEY;
const clientSecret = TWITTER_CONSUMER_SECRET;
if (!clientID || !clientSecret) {
  throw new Error("TWITTER_CONSUMER_KEY and TWITTER_CONSUMER_SECRET must be provided");
}

authenticator.use(
    new TwitterStrategy(
        {
          clientID,
          clientSecret,
          callbackURL: "/login/callback",
        },
        // Define what to do when the user is authenticated
        async ({ accessToken, accessTokenSecret, profile }) => {
          // profile contains all the info from `account/verify_credentials`
          // https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials

          // Return a user object to store in sessionStorage.
          // You can also throw Error to reject the login

          // Here we let everyone login, and filter fields to store in session
          return {
            id: profile.id,
            screen_name: profile.screen_name,
            name: profile.name,
            profile_image_url: profile.profile_image_url,
          };
        }
    ),
    // each strategy has a name and can be changed to use another one
    // same strategy multiple times, especially useful for the OAuth2 strategy.
    "twitter"
);
