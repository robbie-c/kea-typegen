// Generated by kea-typegen on Sun, 03 Apr 2022 21:00:56 GMT. DO NOT EDIT THIS FILE MANUALLY.

import { Logic } from 'kea'

import { Repository } from './types'

export interface githubImportLogicType extends Logic {
    actionCreators: {}
    actionKeys: {}
    actionTypes: {}
    actions: {}
    defaults: {
        repositoryReducerCopy: Repository[]
    }
    events: {}
    key: undefined
    listeners: {
        'set username (githubLogic)': ((
            action: {
                type: 'set username (githubLogic)'
                payload: {
                    username: string
                }
            },
            previousState: any,
        ) => void | Promise<void>)[]
    }
    path: ['githubImportLogic']
    pathString: 'githubImportLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any,
    ) => {
        repositoryReducerCopy: Repository[]
    }
    reducers: {
        repositoryReducerCopy: (state: Repository[], action: any, fullState: any) => Repository[]
    }
    selector: (state: any) => {
        repositoryReducerCopy: Repository[]
    }
    selectors: {
        repositoryReducerCopy: (state: any, props?: any) => Repository[]
        repositorySelectorCopy: (state: any, props?: any) => Repository[]
    }
    sharedListeners: {}
    values: {
        repositoryReducerCopy: Repository[]
        repositorySelectorCopy: Repository[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        repositorySelectorCopy: (repositories: Repository[]) => Repository[]
    }
    __keaTypeGenInternalReducerActions: {
        'set repositories (githubLogic)': (repositories: Repository[]) => {
            type: 'set repositories (githubLogic)'
            payload: {
                repositories: Repository[]
            }
        }
        'set username (githubLogic)': (username: string) => {
            type: 'set username (githubLogic)'
            payload: {
                username: string
            }
        }
    }
}
