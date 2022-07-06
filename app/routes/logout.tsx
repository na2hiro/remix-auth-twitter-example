import {authenticator} from "~/services/auth.server";
import {ActionFunction} from "@remix-run/server-runtime";

export let action: ActionFunction = async ({ request }) => {
    await authenticator.logout(request, { redirectTo: "/" });
};