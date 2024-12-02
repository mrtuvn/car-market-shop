interface AlertProps {
  message?: string
  className?: string
}

const Alert: React.FC<AlertProps> = ({ message, className }) => {
  return (
    <div
      className={`text-13px border-brand-danger/40 flex w-full items-center justify-center rounded border bg-red-100 px-5 py-4 font-semibold md:text-sm ${className}`}
    >
      {message}
    </div>
  )
}

export default Alert
