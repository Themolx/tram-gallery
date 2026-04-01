import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { OpenCallPDF } from "@/lib/open-call-pdf";

export async function GET() {
  const buffer = await renderToBuffer(<OpenCallPDF />);

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="tram-gallery-open-call.pdf"',
    },
  });
}
