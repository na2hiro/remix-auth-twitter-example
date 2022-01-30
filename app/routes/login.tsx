import {ActionFunction} from "remix";
import {authenticator} from "~/services/auth.server";

// Normally this will redirect user to twitter auth page
export let action: ActionFunction = async ({request}) => {
    await authenticator.authenticate("twitter", request, {
        successRedirect: "/", // Destination in case the user is already logged in
    });
};