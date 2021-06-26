// Generated by kea-typegen on Sat, 26 Jun 2021 22:10:59 GMT. DO NOT EDIT THIS FILE MANUALLY.

import { Logic } from 'kea'

import { A1, A2, A3, A4, A5, A7, D1, D3, D6, EventIndex, ExportedApi, R1, R6, S6, S7 } from './autoImportTypes'
import { KeaPlugin } from '../node_modules/kea/lib/index.d'
import { HTMLElement } from '../../node_modules/@types/react/global.d'
import { NodeJS, Timeout } from '../node_modules/@types/node/globals.d'
import { Dashboard, Repository } from './types'

export interface autoImportLogicType<L1, L2> extends Logic {
    actionCreators: {
        actionA1: (
            local1: L1,
            local2: L2,
            param1: A1,
            param2: A2,
            param3: A3,
            param4: A4,
            param5: Partial<A5>,
            keaPlugin: KeaPlugin,
            stringType: string,
        ) => {
            type: 'action a1 (autoImportLogic)'
            payload: {
                local1: 'haha'
                local2: L2
                param1: A1
                param2: 'A2'
                param3: A3
                param4: A4
                param5: Partial<A5>
                keaPlugin: KeaPlugin
                stringType: string
            }
        }
        complexAction: (
            element: HTMLElement,
            timeout: NodeJS.Timeout,
        ) => {
            type: 'complex action (autoImportLogic)'
            payload: {
                element: HTMLElement
                timeout: Timeout
            }
        }
        combinedA6Action: (filter: A5) => {
            type: 'combined a6 action (autoImportLogic)'
            payload: {
                a6: Partial<Record<string, A7>>
                bla: string
            }
        }
        valueAction: () => {
            type: 'value action (autoImportLogic)'
            payload: {
                value: A7
            }
        }
        setRepositories: (repositories: Repository[]) => {
            type: 'set repositories (autoImportLogic)'
            payload: {
                repositories: Repository[]
            }
        }
    }
    actionKeys: {
        'action a1 (autoImportLogic)': 'actionA1'
        'complex action (autoImportLogic)': 'complexAction'
        'combined a6 action (autoImportLogic)': 'combinedA6Action'
        'value action (autoImportLogic)': 'valueAction'
        'set repositories (autoImportLogic)': 'setRepositories'
    }
    actionTypes: {
        actionA1: 'action a1 (autoImportLogic)'
        complexAction: 'complex action (autoImportLogic)'
        combinedA6Action: 'combined a6 action (autoImportLogic)'
        valueAction: 'value action (autoImportLogic)'
        setRepositories: 'set repositories (autoImportLogic)'
    }
    actions: {
        actionA1: (
            local1: L1,
            local2: L2,
            param1: A1,
            param2: A2,
            param3: A3,
            param4: A4,
            param5: Partial<A5>,
            keaPlugin: KeaPlugin,
            stringType: string,
        ) => void
        complexAction: (element: HTMLElement, timeout: NodeJS.Timeout) => void
        combinedA6Action: (filter: A5) => void
        valueAction: () => void
        setRepositories: (repositories: Repository[]) => void
    }
    constants: {}
    defaults: {
        bla: D1
        asd: D6
        rbla: R1
        rasd: R6
        then: null | ExportedApi.RandomThing
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['autoImportLogic']
    pathString: 'autoImportLogic'
    props: {
        asd: D3
    }
    reducer: (
        state: any,
        action: () => any,
        fullState: any,
    ) => {
        bla: D1
        asd: D6
        rbla: R1
        rasd: R6
        then: null | ExportedApi.RandomThing
    }
    reducerOptions: {}
    reducers: {
        bla: (state: D1, action: any, fullState: any) => D1
        asd: (state: D6, action: any, fullState: any) => D6
        rbla: (state: R1, action: any, fullState: any) => R1
        rasd: (state: R6, action: any, fullState: any) => R6
        then: (state: null | ExportedApi.RandomThing, action: any, fullState: any) => null | ExportedApi.RandomThing
    }
    selector: (state: any) => {
        bla: D1
        asd: D6
        rbla: R1
        rasd: R6
        then: null | ExportedApi.RandomThing
    }
    selectors: {
        bla: (state: any, props?: any) => D1
        asd: (state: any, props?: any) => D6
        rbla: (state: any, props?: any) => R1
        rasd: (state: any, props?: any) => R6
        then: (state: any, props?: any) => null | ExportedApi.RandomThing
        dashboard: (state: any, props?: any) => Dashboard | null
        sbla: (state: any, props?: any) => Partial<Record<string, S7>>
        eventIndex: (state: any, props?: any) => EventIndex
    }
    sharedListeners: {}
    values: {
        bla: D1
        asd: D6
        rbla: R1
        rasd: R6
        then: null | ExportedApi.RandomThing
        dashboard: Dashboard | null
        sbla: Partial<Record<string, S7>>
        eventIndex: EventIndex
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        sbla: (arg: S6) => Partial<Record<string, S7>>
    }
}
