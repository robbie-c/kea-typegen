// Generated by kea-typegen on Wed, 16 Jun 2021 22:42:57 GMT. DO NOT EDIT THIS FILE MANUALLY.

import { Logic } from 'kea'

import { Repository } from './types'

export interface githubLogicType extends Logic {
    actionCreators: {
        setUsername: (
            username: string,
        ) => {
            type: 'set username (githubLogic)'
            payload: {
                username: string
            }
        }
        setRepositories: (
            repositories: Repository[],
        ) => {
            type: 'set repositories (githubLogic)'
            payload: {
                repositories: Repository[]
            }
        }
        setFetchError: (
            error: string,
        ) => {
            type: 'set fetch error (githubLogic)'
            payload: {
                error: string
            }
        }
    }
    actionKeys: {
        'set username (githubLogic)': 'setUsername'
        'set repositories (githubLogic)': 'setRepositories'
        'set fetch error (githubLogic)': 'setFetchError'
    }
    actionTypes: {
        setUsername: 'set username (githubLogic)'
        setRepositories: 'set repositories (githubLogic)'
        setFetchError: 'set fetch error (githubLogic)'
    }
    actions: {
        setUsername: (username: string) => void
        setRepositories: (repositories: Repository[]) => void
        setFetchError: (error: string) => void
    }
    constants: {}
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
                type: 'set username (githubLogic)'
                payload: {
                    username: string
                }
            },
            previousState: any,
        ) => void | Promise<void>)[]
    }
    path: ['githubLogic']
    pathString: 'githubLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: () => any,
        fullState: any,
    ) => {
        username: string
        repositories: Repository[]
        isLoading: boolean
        error: string | null
    }
    reducerOptions: {}
    reducers: {
        username: (state: string, action: any, fullState: any) => string
        repositories: (state: Repository[], action: any, fullState: any) => Repository[]
        isLoading: (state: boolean, action: any, fullState: any) => boolean
        error: (state: string | null, action: any, fullState: any) => string | null
    }
    selector: (
        state: any,
    ) => {
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
