export async function GET() {
    return new Response(JSON.stringify({ message: 'Courses endpoint active' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }