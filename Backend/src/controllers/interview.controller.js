
const {generateInterviewReport} = require('../services/ai.service');

const pdfParse = require('pdf-parse');
const interviewReportModel = require('../models/interviewReport.model');

async function generateInterviewReportController(req, res) {

    try{
        const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        const { selfDescription, jobDescription } = req.body

        const interViewReportByAi = await generateInterviewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription
        })

        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
            ...interViewReportByAi
        })

        res.status(201).json({
            message: "Interview report generated successfully.",
            interviewReport
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Something went wrong", error: err.message })
    }

}

module.exports = {generateInterviewReportController};
