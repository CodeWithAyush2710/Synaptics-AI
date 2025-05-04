import { useState, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'highlight.js/styles/github-dark.css'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import axios from 'axios'
import { motion } from 'framer-motion'

const CodeReviewerPage = () => {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)
  const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/api/review', { code })
      setReview(response.data)
    } catch (err) {
      console.error('Error reviewing code', err)
    }
  }

  return (
    <main className="flex flex-col md:flex-row h-screen bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-4">
      
      {/* Left Code Editor */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-4 overflow-auto">
        <h2 className="text-xl font-bold mb-2">Code Editor</h2>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            minHeight: '400px',
          }}
          className="border border-gray-300 rounded-md"
        />
        <button
          onClick={reviewCode}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Review
        </button>
      </div>

      {/* Right Review Output */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-4 overflow-auto">
        <h2 className="text-xl font-bold mb-2">AI Code Review</h2>
        <div className="prose prose-sm max-w-none">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </div>
    </main>
  )
}

export default CodeReviewerPage
