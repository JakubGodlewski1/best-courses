import "./CourseList.css"
import {useFetch} from "../../hooks/useFetch";
import {Link} from "react-router-dom";

const CourseList = () => {
    const {data, isPending, error} = useFetch("http://localhost:3000/courses")


    return (
        <div className="course-list">
            <div>
                {isPending && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && data.map((course)=> (
                        <Link to={`/course/${course.id}`} className="card" key={course.id}>
                            <h2 className="title">{course.name}</h2>
                            <h3>Price: {course.price}</h3>
                            <h3>Duration: {course.duration}</h3>
                            <p>{course.description.slice(0,50)}</p>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default CourseList;