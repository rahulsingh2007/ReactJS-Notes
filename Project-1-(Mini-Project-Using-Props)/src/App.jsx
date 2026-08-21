import Card from './Components/Card'

const App = () => {
  const jobListings = [
    {
      logoUrl: "https://cdn.vectorstock.com/i/500p/01/10/amazon-logo-vector-46860110.jpg",
      companyName: "Amazon",
      postedTime: "5 days ago",
      jobTitle: "Senior UI/UX Designer",
      tags: ["Part Time", "Senior Level"],
      salary: "$120/hr",
      location: "Mumbai, India"
    },
    {
      logoUrl: "https://images.seeklogo.com/logo-png/27/2/google-logo-png_seeklogo-273191.png",
      companyName: "Google",
      postedTime: "1 day ago",
      jobTitle: "Lead Product Designer",
      tags: ["Full Time", "Expert"],
      salary: "$150/hr",
      location: "Bangalore, India"
    },
    {
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qzoOYyoMbyjiQeA9szOgQKtgL5uzEenneZFF4jVKvnkInfgKKPzZKJaS&s=10",
      companyName: "Microsoft",
      postedTime: "2 weeks ago",
      jobTitle: "Interaction Designer",
      tags: ["Full Time", "Mid Level"],
      salary: "$95/hr",
      location: "Hyderabad, India"
    },
    {
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzY8xvrWvoFDILL5wZHabsYFNT2Ty_wkqrwSVhb39Sya7JTzFnZ27AFpKu&s=10",
      companyName: "Netflix",
      postedTime: "Just now",
      jobTitle: "Visual UX Designer",
      tags: ["Remote", "Senior Level"],
      salary: "$135/hr",
      location: "Delhi, India"
    },
    {
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4ZFsQZqoTJLEEUpiGAfSU3L71ulPUIiXPKPFsu4LXqHevWTGbmV9aQw&s=10",
      companyName: "Meta",
      postedTime: "3 days ago",
      jobTitle: "Product Design Manager",
      tags: ["Full Time", "Director"],
      salary: "$180/hr",
      location: "Remote, India"
    },
    {
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSNHkeNc0diVXPGsKYnJy1i30NWu4iiYQsJiXhvlpNbR7g8Yn5YixaHo&s=10",
      companyName: "Apple",
      postedTime: "1 week ago",
      jobTitle: "Human Interface Designer",
      tags: ["Full Time", "Senior Level"],
      salary: "$160/hr",
      location: "Pune, India"
    },
    {
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Adobe_logo.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      companyName: "Adobe",
      postedTime: "4 days ago",
      jobTitle: "UX Researcher",
      tags: ["Contract", "Mid Level"],
      salary: "$85/hr",
      location: "Noida, India"
    },
    {
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/3840px-Spotify_logo_without_text.svg.png",
      companyName: "Spotify",
      postedTime: "6 days ago",
      jobTitle: "UI Engineer",
      tags: ["Part Time", "Junior Level"],
      salary: "$60/hr",
      location: "Remote, India"
    },
    {
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrX2wIZqRo7_Op5oV47ki14869Hg_KFg9DxhTVOW_IePEgZrj1bAWatmQ&s=10",
      companyName: "Uber",
      postedTime: "Yesterday",
      jobTitle: "Senior Motion Designer",
      tags: ["Full Time", "Senior Level"],
      salary: "$115/hr",
      location: "Gurugram, India"
    },
    {
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJWtZX7MZiQmngajlg7_2lgGTbs1aLubohqMjQXnJFYHmzsC00jramKs&s=10",
      companyName: "Stripe",
      postedTime: "12 days ago",
      jobTitle: "Staff Product Designer",
      tags: ["Full Time", "Expert"],
      salary: "$200/hr",
      location: "Chennai, India"
    }
  ];

  return (
    <>
      <div className='parent'>
        {jobListings.map(function (arr, index) {
          return <div key={index}>
            <Card logoUrl={arr.logoUrl} company={arr.companyName} jobTitle={arr.jobTitle} postedTime={arr.postedTime} tags={arr.tags} salary={arr.salary} location={arr.location} />
          </div>
        })}
      </div>
    </>
  )
}

export default App
