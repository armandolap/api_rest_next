export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className='border-t-4 p-4'>
      <p className="text-center text-gray-500 text-xs">
        &copy;{year} Armand Corp. All rights reserved.
      </p>
    </footer>
  )
}

