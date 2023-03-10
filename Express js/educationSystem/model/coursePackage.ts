import { courseEnrollment } from "./courseEnrollment"
import { course } from "./course"

export class coursePackage{
    id : bigint
    package_name : string
    category_id : bigint
    course_id : bigint
    package_duration : Date
    created_date : Date
    created_by : string
    modified_date : Date
    modified_by : string
    courseEnrollment : courseEnrollment
    course : course
}