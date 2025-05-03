// src/app/api/courses/[code]/route.ts
// ❌ if it's empty, this breaks the build
// ✅ Fix by adding a placeholder or actual logic

export async function GET(req: Request) {
    return new Response('Course endpoint placeholder');
  }
  