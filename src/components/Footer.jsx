function Footer({ fullName, courseCode, section }) {
  return (
    <footer className="mt-8 border-t border-gray-200 bg-gray-900 px-4 py-5 text-center text-sm text-gray-300">
      <p>{fullName} - {courseCode} - {section}</p>
    </footer>
  )
}

export default Footer