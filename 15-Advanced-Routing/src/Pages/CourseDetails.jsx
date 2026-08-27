import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const params = useParams()
    console.log(params);

    return (
        <div>
            <h4>{params.id} CourseDetails</h4>
        </div>
    )
}

export default CourseDetails