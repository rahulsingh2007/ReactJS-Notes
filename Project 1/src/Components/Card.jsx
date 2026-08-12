import { Bookmark } from 'lucide-react';

const Card = (props) => {
    return (
        <div className="card">

            <div>
                <div className="top">
                    <img src={props.logoUrl} alt="Amazon" />
                    <button><Bookmark size={11} /> Save</button>
                </div>

                <div className="center">
                    <h3>{props.company} <span>{props.postedTime}</span></h3>
                    <h2>{props.jobTitle}</h2>
                    <div className='tag'>
                        <h4>{props.tags[0]}</h4>
                        <h4>{props.tags[1]}</h4>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
    )
}

export default Card
