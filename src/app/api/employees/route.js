import connectDB from "@/lib/connectDB";
import Employee from "@/models/Employee";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
    await connectDB();
    const body = await req.json();
    const employee = await Employee.create(body);
    return NextResponse.json(
    { employee, message: 'Your employee has been created' },
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
       //populate pour la jointure avec la classe department 
        const employees = await Employee.find().populate('departments');
        return NextResponse.json({ employees });
        } catch (error) {
        return NextResponse.json({ error });
        }
        }