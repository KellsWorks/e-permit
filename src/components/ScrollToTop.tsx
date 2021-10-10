import { ArrowUpIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-3 mb-20 rounded-sm shadow-sm text-white bg-green-600 transition-opacity hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
        )}
      >
        <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}