import { Student } from "./student"
import { coursePackage } from "./coursePackage"

export class courseEnrollment{
    id : bigint
    enrollment_date : Date
    enrollment_no : bigint
    created_date : Date
    created_by : string
    modified_date : Date
    modified_by : string
}