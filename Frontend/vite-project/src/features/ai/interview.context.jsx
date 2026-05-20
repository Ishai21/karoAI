
import { createContext,useState } from "react";


export const InterviewContext = createContext()

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [report, setReport] = useState(null)
    const [reports, setReports] = useState([])
    const [downloadingPdf, setDownloadingPdf] = useState(false)
    const [downloadError, setDownloadError] = useState(null)

    return (
        <InterviewContext.Provider value={{ loading, setLoading, report, setReport, reports, setReports, downloadingPdf, setDownloadingPdf,
        downloadError, setDownloadError, }}>
            {children}
        </InterviewContext.Provider>
    )
}