import {addPost, deletePost, profileReducer} from "./profileReducer";


const store = {posts: [{id: 1, text: 'Help me!'}]}

it('new post should be added', () => {
    const action = addPost('New Body')
    const state = profileReducer(store, action)
    expect(state.posts.length).toBe(2)
})

it('new post name', () => {
    const action = addPost('New Body')
    const state = profileReducer(store, action)
    expect(state.posts[1].text).toBe('New Body')
})

it('deleting post decrement', () => {
    const action = deletePost(1)
    const state = profileReducer(store, action)

    expect(state.posts.length).toBe(0)
})