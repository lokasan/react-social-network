import React from 'react'
import {createRoot} from 'react-dom/client'
import {render} from 'react-dom'
import SocialNetwork from "./SocialNetwork";

it('Should be render SocialNetwork.tsx', () => {
    let div = document.createElement('div')
    const root = createRoot(div)
    root.render(<SocialNetwork/>)
    root.unmount()
})