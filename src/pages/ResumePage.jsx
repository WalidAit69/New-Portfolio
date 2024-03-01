import React, { useEffect } from 'react'
import useHeaderStore from '../store/headerStore';

function ResumePage() {
    const { setisResume } = useHeaderStore();

    useEffect(() => {
        setisResume(true)
        document.title = "Walid Ait Harma: Resume"

    }, [])

    return (
        <iframe src="/resume.pdf" className='resume-page'></iframe>
    )
}

export default ResumePage