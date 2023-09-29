import { Viewer, Worker } from '@react-pdf-viewer/core';
import teluguPdf from '../../assets/Firstlook_Kannada.pdf'
import '@react-pdf-viewer/core/lib/styles/index.css';

const KannadaAd = () => {
  return (
    <>
            <div className='sm:mt-20'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className='h-full w-[700px] sm:h-[900px] mx-auto border border-black'
                    >
                        <Viewer fileUrl={teluguPdf} />
                    </div>
                </Worker>
            </div>
            <p className='font-bold mt-16 text-3xl ml-5 sm:ml-0 flex justify-center'>
                Download Firstlook App Now
            </p>
            <div className='flex justify-center w-full ml-36 sm:ml-0'>
                <a
                    href="https://play.google.com/store/apps/details?id=com.firstlookmatrimony.first_look&hl=en-IN"
                    className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                >
                    <img
                        src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                        alt="App Store"
                        className="w-80 sm:w-80 xl:w-72"
                        width="209"
                        height="60"
                    />
                </a>
            </div>
        </>
  )
}

export default KannadaAd