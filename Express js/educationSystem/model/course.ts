import { coursePackage } from "./coursePackage"
import { courseContent } from "./courseContent"

export class course{
    id : bigint
    course_name : string
    course_content_id : bigint
    course_package_id : bigint
    created_date : Date
    created_by : string
    modified_date : Date
    modified_by : string
}