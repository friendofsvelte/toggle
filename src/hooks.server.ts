import {sequence} from "@sveltejs/kit/hooks";
import {handleAppearance} from "$lib/toggle/server.js";

export const handle = sequence(
    handleAppearance
);