'use client'
import React from 'react'

/* show list products
1. table -> pagination = 1, limit = 5 ()
2. infinite scroll -> load more when user scroll (10 -> 20 -> 30 -> 40 -> 50 )
3. load more -> user click -> load items (10 -> 20 -> 30 -> 40 -> 50 )

call api
load parrallel -> load song song (5 api)
- các api ko phụ thuộc
- 1mins
Promise.all([p1, p2, p3, p4, p5])
Promise.allSettled([p1, p2, p3, p4, p5])

load sequence -> load tuần tự (5 api) -> 5mins
- các api nó phụ thuộc lẫn nhau 
- api A -> return data A -> api B -> return data B -> api C
*/

// Get job stories: https://hacker-news.firebaseio.com/v0/jobstories.json
// Get job: https://hacker-news.firebaseio.com/v0/item/38667654.json

const LIMIT = 6
function JobBoard() {
  const [isFetching, setIsFetching] = React.useState(false)
  const [jobs, setJobs] = React.useState([])
  const [jobIds, setJobIds] = React.useState(null)
  const [page, setPage] = React.useState(0)

  React.useEffect(() => {
    fetchJobs(page)
  }, [page])

  // TODO: fetch jobs stories -> get ids
  async function fetchJobIds(currentPage) {
    let jobs = jobIds
    if (!jobs) {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
      jobs = await res.json()
      setJobIds(jobs)
    }

    // TODO slice
    const start = currentPage * LIMIT // page 1 -> start = 1 * 6 = 6
    const end = start + LIMIT // end = 6 + 6 = 12
    return jobs.slice(start, end) // data.slice(6, 12)
  }

  // TODO: fetch job by id
  async function fetchJobs(currentPage) {
    const jobIdsForPage = await fetchJobIds(currentPage)

    setIsFetching(true)

    const promiseJobs = []
    jobIdsForPage.forEach((jobId) => {
      promiseJobs.push(
        fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then((res) => res.json()),
      )
    })

    const jobsForPage = await Promise.all(promiseJobs)
    setJobs((prevState) => [...prevState, ...jobsForPage])

    setIsFetching(false)
  }

  function loadMore() {
    setPage((prevState) => prevState + 1)
  }

  console.log('jobs: ', jobs)

  return (
    <div>
      <h1>JobBoard</h1>

      <div className="jobs">
        {jobs.map((job) => (
          <div key={job.id} className="post">
            <h2 className="post__title">{job.title}</h2>
            <p className="post__metadata">
              By {job.by} · {new Date(job.time * 1000).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <button className="load-more-button" onClick={loadMore}>
        Load more jobs
      </button>
    </div>
  )
}

export default JobBoard
