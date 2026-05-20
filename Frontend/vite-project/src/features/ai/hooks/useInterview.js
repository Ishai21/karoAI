import { getAllInterviewReports, generateInterviewReport, getInterviewReportById, generateResumePdf } from "../services/interview.api"
import { useContext } from "react"
import { InterviewContext } from "../interview.context"

export const useInterview = () => {
    const context = useContext(InterviewContext)
    console.log("🔍 InterviewContext value:", context)
    console.log("🔍 Keys:", context && Object.keys(context))
    if (!context) throw new Error("useInterview must be used within an InterviewProvider")
        
    const {
        loading, setLoading,
        report, setReport,
        reports, setReports,
        downloadingPdf, setDownloadingPdf,
        downloadError, setDownloadError,
    } = context

    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        setLoading(true)
        try {
            const response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
            setReport(response.interviewReport)
            return response.interviewReport
        } catch (error) {
            console.error(error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        try {
            const response = await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
            return response.interviewReport
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const getReports = async () => {
        setLoading(true)
        try {
            const response = await getAllInterviewReports()
            setReports(response.interviewReports)
            return response.interviewReports
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const getResumePdf = async (interviewReportId) => {
        setDownloadingPdf(true)
        setDownloadError(null)
        try {
            const response = await generateResumePdf({ interviewReportId })
            const url = window.URL.createObjectURL(new Blob([response], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewReportId}.pdf`)
            document.body.appendChild(link)
            link.click()
            link.remove()
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error("getResumePdf error:", error)
            const status = error?.response?.status
            if (status === 503) {
                setDownloadError("Resume download failed — the AI service is at peak load. Please try again in a moment.")
            } else {
                setDownloadError("Resume download failed. Please try again.")
            }
        } finally {
            setDownloadingPdf(false)
        }
    }

    return {
        loading,
        report, reports,
        downloadingPdf, downloadError,
        generateReport, getReportById, getReports, getResumePdf,
    }
}