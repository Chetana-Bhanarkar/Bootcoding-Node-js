import { studentProfile } from "./studentProfile"
import { studentAddress } from "./studentAddress"

export class Student{
    id : bigint
    name : string
    email : string
    phone : bigint
    address_id : bigint
    created_date : Date
    created_by : string
    modified_date : Date
    modified_by : string
    user_id : bigint
    working_as : string
    student_id : bigint
    studentProfile : studentProfile;
    studentAddress : studentAddress;
}

