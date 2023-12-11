import {sequence} from "@sveltejs/kit/hooks";
import handleAppearance from "$lib/toggle/handleAppearance.js";

export const handle = sequence(
    handleAppearance
);