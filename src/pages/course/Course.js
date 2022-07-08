import "./Course.css"
import {useFetch} from "../../hooks/useFetch";
import {useParams} from "react-router-dom";

const Course = () => {
    const {id} = useParams()

     const {data: course} = useFetch(`http://localhost:3000/courses/${id}`)

    return (
        <div className="course">
            {course && <>
                <h2 style={{margin: "50px 0"}} className="title">{course.name}</h2>
                <p>Price: {course.price}</p>
                <p>Duration: {course.duration}</p>
                <p>{course.description}</p>
            </>}

        </div>
    );
};

export default Course;