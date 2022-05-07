// Generated by kea-typegen on Sun, 03 Apr 2022 21:48:43 GMT. DO NOT EDIT THIS FILE MANUALLY.

import { Logic } from 'kea'

import { Repository } from './types'

export interface builderLogicType extends Logic {
    actionCreators: {
        setUsername: (username: string) => {
            type: 'set username (builderLogic)'
            payload: {
                username: string
            }
        }
        setRepositories: (repositories: Repository[]) => {
            type: 'set repositories (builderLogic)'
            payload: {
                repositories: Repository[]
            }
        }
        setFetchError: (error: string) => {
            type: 'set fetch error (builderLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set username (builderLogic)': 'setUsername'
        'set repositories (builderLogic)': 'setRepositories'
        'set fetch error (builderLogic)': 'setFetchError'
    }
    actionTypes: {
        setUsername: 'set username (builderLogic)'
        setRepositories: 'set repositories (builderLogic)'
        setFetchError: 'set fetch error (builderLogic)'
    }
    actions: {
        setUsername: (username: string) => void
        setRepositories: (repositories: Repository[]) => void
        setFetchError: (error: string) => void
    }
    defaults: {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        setUsername: ((
            action: {
                type: 'set username (builderLogic)'
                payload: {
                    username: string
                }
            },
            previousState: any,
        ) => void | Promise<void>)[]
    }
    path: ['builderLogic']
    pathString: 'builderLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any,
    ) => {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
    }
    reducers: {
        username: (state: string, action: any, fullState: any) => string
        repositories: (state: Repository[], action: any, fullState: any) => Repository[]
        isLoading: (state: boolean, action: any, fullState: any) => boolean
        error: (state: string | null, action: any, fullState: any) => string | null
    }
    selector: (state: any) => {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
    }
    selectors: {
        username: (state: any, props?: any) => string
        repositories: (state: any, props?: any) => Repository[]
        isLoading: (state: any, props?: any) => boolean
        error: (state: any, props?: any) => string | null
        sortedRepositories: (state: any, props?: any) => Repository[]
    }
    sharedListeners: {}
    values: {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
        sortedRepositories: Repository[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        sortedRepositories: (repositories: Repository[]) => Repository[]
    }
}