import React from 'react'

type CreateProviderReturn<TContextValue> = [
  React.FunctionComponent<React.PropsWithChildren<TContextValue>>,
  () => TContextValue
]

type CreateProviderOptions<TContextValue> = {
  defaultValue?: TContextValue
  undefinedAction?: 'warn' | 'suppress'
}

export function createProvider<TContextValue>(
  name: string,
  options?: CreateProviderOptions<TContextValue>
): CreateProviderReturn<TContextValue> {
  const Context = React.createContext<TContextValue | undefined>(options?.defaultValue)

  function useContext() {
    const context = React.useContext(Context)

    if (context === undefined) {
      if (!options?.undefinedAction) {
        throw new Error(`${name} context hook requires a provider.`)
      } else if (options?.undefinedAction === 'warn') {
        console.warn(`${name} context hook requires a provider.`)
      }
      return {} as TContextValue
    }

    return context
  }

  const ContextProvider = ({ children, ...contextValue }: React.PropsWithChildren<TContextValue>) => {
    return <Context.Provider value={contextValue as TContextValue}>{children}</Context.Provider>
  }

  return [ContextProvider, useContext]
}
