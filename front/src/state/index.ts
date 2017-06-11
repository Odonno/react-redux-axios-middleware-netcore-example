export type Root = {
    readonly app: App
};

export type App = {
    readonly values: { name: string, value: number }[]
};