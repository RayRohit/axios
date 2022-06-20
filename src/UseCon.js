import React, { createContext } from 'react'
import C1 from './C1';

export const Fname = createContext();

export default function UseCon() {
  return (
    <div>
    <Fname.Provider value={"hello mate!!"}>
        <C1 />
    </Fname.Provider>

    </div>
  )
}
