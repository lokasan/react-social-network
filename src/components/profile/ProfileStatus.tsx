import React, {useState} from 'react'

export const ProfileStatus = (props: any) => {

    const [status, setStatus] = useState("Hello, world!")

    const [isClicked, setIsClicked] = useState(false)

    const changeStatusHandler = (e: any) => {
        setStatus(e.target.value)
    }

    const changeIsClicked = () => {
        setIsClicked(!isClicked)
    }


    return (
        <div>
            {
                !isClicked
                    ? <p onDoubleClick={changeIsClicked}>{status}</p>
                    : <input
                        autoFocus={true}
                        type="text"
                        value={status}
                        onChange={changeStatusHandler}
                        onBlur={changeIsClicked}
                    />
            }
        </div>
    )
}
