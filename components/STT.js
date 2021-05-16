import React, {useState, useEffect} from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/outline'

export default function STT() {
    const [showSTT, setShowSTT] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) setShowSTT(true);
        else setShowSTT(false);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        console.log(showSTT);
    }, [showSTT]);
    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    

    return (
        <div className="bottom-10">
        {showSTT && (
            <button className="flex items-center justify-center fixed bottom-10 right-10 ease-in" onClick={() => scrollToTop()} id="js-top">
                <div className="flex items-center justify-center h-12 w-12 rounded-3xl bg-blue-900 text-white p-2">
                    <ChevronDoubleUpIcon className="h-6 w-6 round" aria-hidden="true" />
                </div>
            </button>
        )}
        </div>
    )
}
