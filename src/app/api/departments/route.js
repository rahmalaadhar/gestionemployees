import connectDB from "@/lib/connectDB";
import Department from "@/models/Department";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
    await connectDB();
    const body = await req.json();
    const department = await Department.create(body);
    return NextResponse.json(
    { department, message: 'Your department has been created' },
    { status: HttpStatusCode.Created },
    );
    } catch (error) {
    return NextResponse.json({ message: error }, { status:HttpStatusCode.BadRequest
    });
    }
    }
    export async function GET() {
        try {
        await connectDB();
        const departments = await Department.find();
        return NextResponse.json({ departments });
        } catch (error) {
        return NextResponse.json({ error });
        }
        }