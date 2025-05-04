/**
 * Validates if a string is a valid URL
 * @param {string} url The URL string to validate
 * @returns {boolean} Boolean indicating if the URL is valid
 */
export const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  /**
   * Validates if a file is a valid document type (PDF, DOC, DOCX)
   * @param {File} file The file to validate
   * @returns {boolean} Boolean indicating if the file is a valid document
   */
  export const isValidDocumentFile = (file) => {
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    return validTypes.includes(file.type) || 
           file.name.endsWith('.pdf') || 
           file.name.endsWith('.doc') || 
           file.name.endsWith('.docx');
  };
  
  /**
   * Validates if a file size is within the limit
   * @param {File} file The file to validate
   * @param {number} maxSizeMB Maximum size in MB
   * @returns {boolean} Boolean indicating if the file size is valid
   */
  export const isValidFileSize = (file, maxSizeMB) => {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    return file.size <= maxSizeBytes;
  };