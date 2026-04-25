import "./App.css"
import Cards from "./components/Cards"

const App = () => {

const data = [
  {
    "id": 1,
    "company": "Amazon",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "role": "Senior UI/UX Designer",
    "job_type": "Full Time",
    "level": "Senior",
    "location": "San Francisco, USA",
    "stipend": "$120/hr",
    "posted": "5 days ago",
    "apply_link": "https://www.amazon.jobs/"
  },
  {
    "id": 2,
    "company": "Google",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "role": "Product Designer",
    "job_type": "Full Time",
    "level": "Mid Level",
    "location": "California, USA",
    "stipend": "$110/hr",
    "posted": "2 days ago",
    "apply_link": "https://careers.google.com/"
  },
  {
    "id": 3,
    "company": "Microsoft",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "role": "Frontend Developer",
    "job_type": "Full Time",
    "level": "Junior",
    "location": "Seattle, USA",
    "stipend": "$95/hr",
    "posted": "1 week ago",
    "apply_link": "https://careers.microsoft.com/"
  },
  {
    "id": 4,
    "company": "Meta",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    "role": "UI Engineer",
    "job_type": "Full Time",
    "level": "Senior",
    "location": "Menlo Park, USA",
    "stipend": "$130/hr",
    "posted": "3 days ago",
    "apply_link": "https://www.metacareers.com/"
  },
  {
    "id": 5,
    "company": "Netflix",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "role": "UX Researcher",
    "job_type": "Part Time",
    "level": "Mid Level",
    "location": "Los Angeles, USA",
    "stipend": "$105/hr",
    "posted": "6 days ago",
    "apply_link": "https://jobs.netflix.com/"
  },
  {
    "id": 6,
    "company": "Apple",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "role": "iOS Developer",
    "job_type": "Full Time",
    "level": "Senior",
    "location": "Cupertino, USA",
    "stipend": "$140/hr",
    "posted": "4 days ago",
    "apply_link": "https://jobs.apple.com/"
  },
  {
    "id": 7,
    "company": "Adobe",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    "role": "UI Designer",
    "job_type": "Part Time",
    "level": "Junior",
    "location": "Remote",
    "stipend": "$80/hr",
    "posted": "2 weeks ago",
    "apply_link": "https://careers.adobe.com/"
  },
  {
    "id": 8,
    "company": "Spotify",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    "role": "Product Designer",
    "job_type": "Full Time",
    "level": "Mid Level",
    "location": "Stockholm, Sweden",
    "stipend": "$100/hr",
    "posted": "3 days ago",
    "apply_link": "https://www.spotifyjobs.com/"
  },
  {
    "id": 9,
    "company": "Uber",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    "role": "Frontend Engineer",
    "job_type": "Full Time",
    "level": "Mid Level",
    "location": "New York, USA",
    "stipend": "$115/hr",
    "posted": "1 day ago",
    "apply_link": "https://www.uber.com/careers/"
  },
  {
    "id": 10,
    "company": "Airbnb",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    "role": "UX Designer",
    "job_type": "Contract",
    "level": "Senior",
    "location": "Remote",
    "stipend": "$125/hr",
    "posted": "4 days ago",
    "apply_link": "https://careers.airbnb.com/"
  }
];

  return (
    <>
    <div className="body">
      <div className="cards">
        {data.map(function(elem){
          return <Cards apply={elem.apply_link} company={elem.company} link={elem.logo} job={elem.role} post={elem.level} stipend={elem.stipend} duration={elem.posted}  country={elem.location} mode={elem.job_type}/>
        })}
      </div>
    </div>
    </>
  )
}

export default App