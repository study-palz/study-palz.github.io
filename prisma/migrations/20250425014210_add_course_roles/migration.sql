ALTER TABLE "Course"
  ADD COLUMN "code" TEXT,
  ADD COLUMN "title" TEXT;

UPDATE "Course"
SET
  "code"  = "name",
  "title" = "name";

ALTER TABLE "Course"
  ALTER COLUMN "code"  SET NOT NULL,
  ALTER COLUMN "title" SET NOT NULL;
ALTER TABLE "Course"
  DROP COLUMN "name";

DROP TABLE IF EXISTS "_UserCourses";

CREATE UNIQUE INDEX "Course_code_key" ON "Course"("code");


CREATE TABLE "CourseRole" (
  "id"        SERIAL     PRIMARY KEY,
  "userId"    INTEGER    NOT NULL,
  "courseId"  INTEGER    NOT NULL,
  "isSensei"  BOOLEAN    NOT NULL
);

CREATE UNIQUE INDEX "CourseRole_userId_courseId_isSensei_key"
  ON "CourseRole"("userId", "courseId", "isSensei");

ALTER TABLE "CourseRole"
  ADD CONSTRAINT "CourseRole_userId_fkey"
    FOREIGN KEY ("userId")   REFERENCES "User"("id")   ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT "CourseRole_courseId_fkey"
    FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
