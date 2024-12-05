import mongoose from "mongoose";
const departmentSchema= mongoose.Schema({

    Name:String

},
{
    timestamps:true
}
);
const Department=mongoose.models.Department||mongoose.model("Department",departmentSchema);
export default Department