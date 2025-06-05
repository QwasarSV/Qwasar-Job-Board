
export default async function JobList() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(apiUrl);
  const jobs = await res.json();

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="border rounded-md p-4 my-2 shadow">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p>
            {job.description}
            </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>URL:</strong>{' '} <a href={job.url} target="blank">link</a>
          </p>
        </div>
      ))}
    </div>
  );
}