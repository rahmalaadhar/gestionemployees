import mongoose from "mongoose";
import Department from "./Department";
const employeeSchema = mongoose.Schema({
    
    FirstName:String,
    LastName:String,
    Email:String,
    DateOfBirth:Date,
    PhotoPath:String,
   
    departments:{type:mongoose.Schema.Types.ObjectId,
        ref:Department
    }

},
{
    timestamps: true
    }
    );
    const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);
export default Employee