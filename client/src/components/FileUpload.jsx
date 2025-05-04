import React, { useState, useRef } from 'react';
import { Upload, File as FileIcon, CheckCircle, X } from 'lucide-react';

function FileUpload({ onFileChange }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const isValidFileType = (file) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validTypes.includes(file.type);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile && !isValidFileType(selectedFile)) {
      alert('Please upload a PDF or DOC file');
      return;
    }
    setFile(selectedFile);
    onFileChange(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && !isValidFileType(droppedFile)) {
      alert('Please upload a PDF or DOC file');
      return;
    }
    
    setFile(droppedFile);
    onFileChange(droppedFile);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    onFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        className="hidden"
      />
      
      <div
        className={`${isDragging ? 'drop-zone drop-zone-active' : 'drop-zone'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {!file ? (
          <div className="space-y-2">
            <Upload size={32} className="mx-auto text-gray-400" />
            <p className="text-sm text-gray-600">
              Drag & drop your resume here, or <span className="text-blue-600 font-medium">browse</span>
            </p>
            <p className="text-xs text-gray-500">
              Upload your resume in PDF, DOC, or DOCX format
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon size={24} className="text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900 text-left">{file.name}</p>
                <p className="text-xs text-gray-500 text-left">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <CheckCircle size={18} className="text-green-500 mr-2" />
              <button 
                type="button"
                onClick={removeFile}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>
          </div>
        )}
      </div>
      
      <p className="text-xs text-gray-500 mt-2">
        PDF, DOC, or DOCX format. Maximum size: 5MB
      </p>
    </div>
  );
}

export default FileUpload;