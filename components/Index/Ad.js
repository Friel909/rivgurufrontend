import React from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'

const Ad = () => {

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className="video-area">
            <div className="container">
                <div className="video-box mt-0">
                    <div className="image">
                        <img src="/images/video-img2.jpg" className="shadow" alt="image" />
                    </div>
                    <Link href="#">
                        <a
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="video-btn popup-youtube"
                        > 
                            <i className="flaticon-play"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <ModalVideo 
            channel='youtube' 
            isOpen={!isOpen} 
            videoId='bk7McNUjWgw' 
            onClose={() => setIsOpen(!isOpen)} 
        />
        </>
    )
}

export default Ad
