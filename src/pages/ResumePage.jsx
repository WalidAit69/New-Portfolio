import React, { useEffect } from 'react'
import useHeaderStore from '../store/headerStore';

function ResumePage() {
    const { setisResume } = useHeaderStore();

    useEffect(() => {
        setisResume(true)

    }, [])

    return (
        <iframe src="/src/assets/resume.pdf" className='resume-page'></iframe>
    )
}

export default ResumePage