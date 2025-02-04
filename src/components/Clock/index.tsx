import React, { useRef, useState } from 'react'

const ClockCountdown: React.FC = () => {
  const inputElement = useRef(null)

  // Initialize state variables for timer and timeInterval
  const [seconds, setSeconds] = useState<number>(0)
  const [timeInterval, setTimeInterval] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null) // Giữ `intervalId` bằng `useRef`

  const startTimer = () => {
    if (!timeInterval) {
      setTimeInterval(true)
      intervalRef.current = setInterval(() => {
        setSeconds((prevCount) => prevCount + 1)
      }, 1000)
    }
  }

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null // Xóa `intervalId`
    }
    setTimeInterval(false)
  }
  const resetTimer = () => {
    setTimeInterval(false)
    setSeconds(0) // Đặt lại bộ đếm về 0
  }

  /*useEffect(()=>{
        let timer: NodeJS.Timeout; // Khai báo kiểu của timer

        // Nếu `timeLeft` là 0, dừng đồng hồ
        if(timeInterval) {
            timer =  setInterval(()=> {
                setSeconds((prevCount)=> prevCount + 1)
            },1000)
        };


        // Cleanup interval khi component bị hủy hoặc khi `timeLeft` thay đổi  
        return () => clearInterval(timer);
    },[timeInterval]);*/

  return (
    <div className="p-5">
      <h1 className="mb-3">Timer: {seconds} </h1>
      <button
        onClick={startTimer}
        className="start-button mr-2 rounded bg-primary px-4 py-2 text-white"
      >
        Start
      </button>

      <button
        onClick={pauseTimer}
        className="stop-button mr-2 rounded bg-red-500 px-4 py-2 text-white"
      >
        Pause
      </button>
      <button
        onClick={resetTimer}
        className="start-button mr-2 rounded bg-primary px-4 py-2 text-white"
      >
        Reset
      </button>
    </div>
  )
}

export default ClockCountdown
