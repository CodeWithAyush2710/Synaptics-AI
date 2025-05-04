/**
 * Generate a cold email based on job link and optional resume file
 * @param {string} jobLink The URL of the job posting
 * @param {File} resumeFile Optional resume file
 * @returns {Promise<string>} Promise with the generated email
 */
export const generateEmail = async (jobLink, resumeFile) => {
    // In a real implementation, you would:
    // 1. Create a FormData object
    // 2. Append the jobLink and resumeFile
    // 3. Make a POST request to your backend API
  
    // For now, we'll simulate the API response with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Dear Hiring Manager,
  
  I hope this email finds you well. I recently came across your job posting for the [Position Title] role at [Company Name] and I'm excited to apply.
  
  Based on the job description, I believe my background in [relevant skills/experience] makes me a strong candidate for this position. I have [X years] of experience in [relevant industry/field] where I've [brief accomplishment].
  
  Specifically, I have:
  - [Relevant skill/experience 1]
  - [Relevant skill/experience 2]
  - [Relevant skill/experience 3]
  
  I'm particularly drawn to [Company Name] because of [something specific about the company that interests you]. I believe I can contribute to your team by [how you can add value].
  
  I've attached my resume for your review, and I would welcome the opportunity to discuss how my background aligns with your needs. Please feel free to contact me at [your phone number] or [your email] to arrange a conversation.
  
  Thank you for considering my application. I look forward to the possibility of working with your team.
  
  Sincerely,
  [Your Name]`);
      }, 2000);
    });
  };