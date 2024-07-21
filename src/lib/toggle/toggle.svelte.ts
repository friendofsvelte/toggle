class Appearance {
    dark: null | boolean = $state(null);
    constructor() {}
}

// Export an instance of the Appearance class
export const appearance = new Appearance();