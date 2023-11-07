/* eslint-disable react-refresh/only-export-components */
import {FC, ReactElement, ReactNode} from 'react'
// import {I18nProvider} from '@lingui/react'
// import {i18n} from '@lingui/core'
import {cleanup, render} from '@testing-library/react'
import {afterEach, beforeEach} from 'vitest'
import {userEvent} from '@testing-library/user-event'

// Typescript issues with dynamic imports of non ts files
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const { messages: en } = await import(`../locales/en.po`)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const { messages: de } = await import(`../locales/de.po`)
// i18n.load('en', en)
// i18n.load('de', de)
// i18n.activate('en')

beforeEach(() => {
    // i18n.activate('en')
    localStorage.clear()
})
afterEach(() => {
    cleanup()
})

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        // <I18nProvider i18n={i18n}>
            <>{ children }</>
        // </I18nProvider>
    )
}

function customRender(ui: ReactElement, options = {}) {
    return {
        user: userEvent.setup(),
        ...render(ui, {
            wrapper: Providers,
            ...options,
        }),
    }
}

export * from '@testing-library/react'
export { customRender as render }
export { afterEach, beforeEach, expect, test, describe } from 'vitest'
