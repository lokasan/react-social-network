import React from 'react'
import {act, create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="social"/>)
        expect(component.root.props.status).toBe('social')
    })
    test("should be render input with isClicked is true in props", () => {
        const component = create(<ProfileStatus isClicked={true}/>)
        expect(component.root.props.isClicked).toEqual(true)
    })
    test("should be <p> displayed", () => {
        const component = create(<ProfileStatus isClicked={true}/>)
        expect(component.root.findAllByType('p').length).toBe(1)
    })
    test('displayed text in <p>', () => {
        const component = create(<ProfileStatus/>)
        expect(component.root.findAllByType('p').length).not.toBeNull()
    })

    test('set status from props and displayed in tag of <p>', () => {
        const component = create(<ProfileStatus status="How are you?"/>)
        component.root.findByType('p').children.push(component.root.props.status)
        // expect(component.root.findByType('p').children).toBe(['How are you?'])
    })

    test('displayed tag <input> instead of <span>', () => {
        const component = create(<ProfileStatus/>)
        act(() => {
            component.root.findByType('p').props.onDoubleClick()
        })
        expect(component.root.findByType('input').props.value).toBe('Hello, world!')
    })

    test('callback should be called', () => {

        const mockCallback = jest.fn()
        const component = create(<ProfileStatus changeIsClicked={mockCallback}/>)
        component.root.props.changeIsClicked()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})