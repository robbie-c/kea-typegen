// Auto-generated with kea-typegen. DO NOT EDIT!

export interface githubImportLogicType<Repository> {
    key: any;
    actionCreators: {};
    actionKeys: {};
    actionTypes: {};
    actions: {};
    cache: Record<string, any>;
    connections: any;
    constants: any;
    defaults: any;
    events: any;
    path: ["samples", "githubImportLogic"];
    pathString: "samples.githubImportLogic";
    propTypes: any;
    props: Record<string, any>;
    reducer: (state: any, action: () => any, fullState: any) => {
        repositoryReducerCopy: Repository[];
    };
    reducerOptions: any;
    reducers: {
        repositoryReducerCopy: (state: Repository[], action: any, fullState: any) => Repository[];
    };
    selector: (state: any) => {
        repositoryReducerCopy: Repository[];
    };
    selectors: {
        repositoryReducerCopy: (state: any, props: any) => Repository[];
        repositorySelectorCopy: (state: any, props: any) => Repository[];
    };
    values: {
        repositoryReducerCopy: Repository[];
        repositorySelectorCopy: Repository[];
    };
    _isKea: true;
    __keaTypeGenInternalSelectorTypes: {
        repositorySelectorCopy: (arg1: Repository[]) => Repository[];
    };
    __keaTypeGenInternalReducerActions: {
        "set repositories (samples.githubLogic)": (repositories: Repository[]) => ({
            type: "set repositories (samples.githubLogic)";
            payload: {
                repositories: Repository[];
            };
        });
    };
}