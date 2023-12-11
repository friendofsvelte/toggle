import {sequence} from "@sveltejs/kit/hooks";
import {handleAppearance} from "$lib";

export const handle = sequence(
    handleAppearance
);