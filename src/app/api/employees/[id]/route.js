import connectDB from "@/lib/connectDB";
import Employee from "@/models/Employee";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
    try {
    await connectDB();
   // const { id } = params;
   console.log("api param", params.id )
    const employee = await Employee.findById(params.id).populate('departments');
    if (employee) {
    return NextResponse.json({ employee });
    }
    return NextResponse.json({ message: `employee ${params.id} not found` }, {
    status: HttpStatusCode.NotFound });
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }
    export async function PUT(req, { params }) {
        try {
       await connectDB();
        
    const employee = await Employee.findById(params.id);
        if (employee) {
        const body= await req.json();
       // const employee=await Employee.findByIdAndUpdate(params.id,{$set:body},{new:true});
        employee.FirstName = body.FirstName;
        employee.LastName=body.LastName;
        employee.Email=body.Email;
       employee.DateOfBirth=body.DateOfBirth;
       employee.PhotoPath=body.PhotoPath;
        employee.departments=body.departments
        
        employee.save();
        return NextResponse.json({ employee });
       }
        return NextResponse.json({ message: `employee ${params.id} not found`
        }, { status: HttpStatusCode.NotFound });
        } catch (error) {
        return NextResponse.json({ message: error }, { status:
        HttpStatusCode.BadRequest });
        }
        }
        export async function DELETE(_, { params }) {
            try {
            //await connectDB();
            //const employee = await Employee.findById(params.id);
           // if (employee) {
            //await Employee.findByIdAndDelete(employee._id);
            await Employee.findByIdAndDelete(params.id)
            return NextResponse.json({ message: `employee ${params.id} has been deleted` });
           // }
            //return NextResponse.json({ message: `employee${params.id} not found` }, {
            //status: HttpStatusCode.NotFound });
            } catch (error) {
            return NextResponse.json({ message: error }, { status:
            HttpStatusCode.BadRequest });
            }
            }