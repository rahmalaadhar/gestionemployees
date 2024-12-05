import connectDB from "@/lib/connectDB";
import Department from "@/models/Department";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
    try {
    await connectDB();
    
    const department = await Department.findByIdparams(id);
    if (department) {
    return NextResponse.json({ department });
    }
    return NextResponse.json({ message: `Department ${params.id} not found` }, {
    status: HttpStatusCode.NotFound });
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }
    export async function PUT(req, { params }) {
        try {
        await connectDB();
        
        const department = await Department.findById(params.id);
        if (department) {
        const body= await req.json();
        department.Name = body.Name;
        
        department.save();
        return NextResponse.json({ department });
        }
        return NextResponse.json({ message: `department ${params.id} not found`
        }, { status: HttpStatusCode.NotFound });
        } catch (error) {
        return NextResponse.json({ message: error }, { status:
        HttpStatusCode.BadRequest });
        }
        }
        export async function DELETE(_, { params }) {
            try {
            await connectDB();
            const department = await Department.findById(params.id);
            if (department) {
            await Department.findByIdAndDelete(department._id);
            return NextResponse.json({ message: `Department ${params.id} has been
            deleted` });
            }
            return NextResponse.json({ message: `Department${params.id} not found` }, {
            status: HttpStatusCode.NotFound });
            } catch (error) {
            return NextResponse.json({ message: error }, { status:
            HttpStatusCode.BadRequest });
            }
            }
            
        