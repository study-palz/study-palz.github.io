import { PrismaClient, Role, SessionStatus } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

const courses = [
  { code: 'ICS 101', title: 'Digital Tools for the Information World' },
  { code: 'ICS 101A', title: 'Digital Tools for the Information World' },
  { code: 'ICS 102', title: 'Introduction to Data Science' },
  { code: 'ICS 103', title: 'Introduction to Computer Science Principles' },
  { code: 'ICS 110 (Alpha)', title: 'Introduction to Computer Programming' },
  { code: 'ICS 111', title: 'Introduction to Computer Science I' },
  { code: 'ICS 111A', title: 'Introduction to Computer Science I' },
  { code: 'ICS 141', title: 'Discrete Mathematics for Computer Science I' },
  { code: 'ICS 210', title: 'Information Systems in Society' },
  { code: 'ICS 211', title: 'Introduction to Computer Science II' },
  { code: 'ICS 211A', title: 'Introduction to Computer Science II' },
  { code: 'ICS 212', title: 'Program Structure' },
  { code: 'ICS 215', title: 'Introduction to Scripting' },
  { code: 'ICS 222', title: 'Basic Concepts of Computer Science' },
  { code: 'ICS 235', title: 'Machine Learning Methods' },
  { code: 'ICS 241', title: 'Discrete Mathematics for Computer Science II' },
  { code: 'ICS 290', title: 'Computer Science Careers: An Exploration of the Specialties' },
  { code: 'ICS 296', title: 'Sophomore Project' },
  { code: 'ICS 311', title: 'Algorithms' },
  { code: 'ICS 312', title: 'Machine-Level and Systems Programming' },
  { code: 'ICS 313', title: 'Programming Language Theory' },
  { code: 'ICS 314', title: 'Software Engineering I' },
  { code: 'ICS 321', title: 'Database Systems I' },
  { code: 'ICS 331', title: 'Logic Design and Microprocessors' },
  { code: 'ICS 332', title: 'Operating Systems' },
  { code: 'ICS 351', title: 'Network Design and Management' },
  { code: 'ICS 355', title: 'Security and Trust I: Resource Protections' },
  { code: 'ICS 361', title: 'Introduction to Artificial Intelligence Programming' },
  { code: 'ICS 369', title: 'Computational Media Systems' },
  { code: 'ICS 390', title: 'Computing Ethics for Lab Assistants' },
  { code: 'ICS 396', title: 'Junior Project' },
  { code: 'ICS 414', title: 'Software Engineering II' },
  { code: 'ICS 415', title: 'Introduction to Programming for the Web' },
  { code: 'ICS 419', title: 'The Science, Psychology and Philosophy of Systems Design' },
  { code: 'ICS 421', title: 'Database Systems II' },
  { code: 'ICS 422', title: 'Network Science Methodology' },
  { code: 'ICS 423', title: 'Data Security and Cryptography I' },
  { code: 'ICS 424', title: 'Application Frameworks' },
  { code: 'ICS 425', title: 'Computer Security and Ethics' },
  { code: 'ICS 426', title: 'Computer System Security' },
  { code: 'ICS 427', title: 'Programming Approaches to Software Quality Assurance' },
  { code: 'ICS 428', title: 'Digital Forensics' },
  { code: 'ICS 431', title: 'Computer Architecture' },
  { code: 'ICS 432', title: 'Concurrent and High-Performance Programming' },
  { code: 'ICS 434', title: 'Data Science Fundamentals' },
  { code: 'ICS 435', title: 'Machine Learning Fundamentals' },
  { code: 'ICS 438', title: 'Big Data Analytics' },
  { code: 'ICS 441', title: 'Theory of Computation' },
  { code: 'ICS 442', title: 'Analytical Models and Methods' },
  { code: 'ICS 443', title: 'Parallel Algorithms' },
  { code: 'ICS 451', title: 'Data Networks' },
  { code: 'ICS 452', title: 'Software Design for Robotics' },
  { code: 'ICS 455', title: 'Security and Trust II: Information Assurance' },
  { code: 'ICS 461', title: 'Artificial Intelligence' },
  { code: 'ICS 462', title: 'Artificial Intelligence for Games' },
  { code: 'ICS 464', title: 'Human-Computer Interaction I' },
  { code: 'ICS 465', title: 'Introduction to Hypermedia' },
  { code: 'ICS 466', title: 'Design for Mobile Devices' },
  { code: 'ICS 469', title: 'Cognitive Science' },
  { code: 'ICS 471', title: 'Probability, Statistics, and Queuing' },
  { code: 'ICS 475', title: 'Introduction to Bioinformatics Sequences and Genomes Analysis' },
  { code: 'ICS 476', title: 'Bioinformatics Algorithms and Tool Development' },
  { code: 'ICS 481', title: 'Introduction to Computer Graphics' },
  { code: 'ICS 482', title: 'Topics in Computer Graphics' },
  { code: 'ICS 483', title: 'Computer Vision' },
  { code: 'ICS 484', title: 'Data Visualization' },
  { code: 'ICS 485', title: 'Video Game Design and Development' },
  { code: 'ICS 486', title: 'Virtual and Augmented Reality Programming' },
  { code: 'ICS 487', title: 'Digital Content Creation I' },
  { code: 'ICS 488', title: 'Digital Content Creation II' },
  { code: 'ICS 489', title: 'Software Techniques for Computer Visual Effects' },
  { code: 'ICS 491', title: 'Special Topics' },
  { code: 'ICS 495', title: 'Special Topics in Security' },
  { code: 'ICS 496', title: 'Capstone Project' },
  { code: 'ICS 499', title: 'Computer Project' },
  { code: 'ICS 606', title: 'Intelligent Autonomous Agents' },
  { code: 'ICS 611', title: 'Compiler Theory and Construction' },
  { code: 'ICS 612', title: 'Theory of Operating Systems' },
  { code: 'ICS 613', title: 'Advanced Software Engineering' },
  { code: 'ICS 614', title: 'Medical Informatics I' },
  { code: 'ICS 615', title: 'Software Quality and Maintenance' },
  { code: 'ICS 616', title: 'Information Architecture and Web Design' },
  { code: 'ICS 621', title: 'Analysis of Algorithms' },
  { code: 'ICS 622', title: 'Network Science' },
  { code: 'ICS 623', title: 'Advanced Cryptography' },
  { code: 'ICS 624', title: 'Advanced Data Management' },
  { code: 'ICS 632', title: 'Principles of High Performance Computing' },
  { code: 'ICS 635', title: 'Machine Learning' },
  { code: 'ICS 636', title: 'Information Theory in Machine Learning' },
  { code: 'ICS 637', title: 'Deep Learning with Neural Networks' },
  { code: 'ICS 639', title: 'Human-Centered Artificial Intelligence' },
  { code: 'ICS 641', title: 'Advanced Theory of Computation' },
  { code: 'ICS 643', title: 'Advanced Parallel Algorithms' },
  { code: 'ICS 651', title: 'Computer Networks' },
  { code: 'ICS 655', title: 'Security and Trust III: Cyber Security and Commerce' },
  { code: 'ICS 660', title: 'Computer Architecture I' },
  { code: 'ICS 661', title: 'Advanced Artificial Intelligence' },
  { code: 'ICS 663', title: 'Pattern Recognition' },
  { code: 'ICS 664', title: 'Human-Computer Interaction II' },
  { code: 'ICS 665', title: 'User Interfaces and Hypermedia' },
  { code: 'ICS 667', title: 'HCI Design Methods' },
  { code: 'ICS 668', title: 'Social Informatics' },
  { code: 'ICS 669', title: 'Social Computing' },
  { code: 'ICS 674', title: 'Evolutionary Computation I: Survey of Methods' },
  { code: 'ICS 675', title: 'Bioinformatics: Sequences Analysis' },
  { code: 'ICS 676', title: 'Bioinformatics: Microarrays' },
  { code: 'ICS 681', title: 'Computer Graphics' },
  { code: 'ICS 682', title: 'Numerical Computation' },
  { code: 'ICS 683', title: 'Advanced Computer Vision' },
  { code: 'ICS 684', title: 'Advanced Data Visualization' },
  { code: 'ICS 685', title: 'Virtual and Augmented Reality' },
  { code: 'ICS 686', title: 'Digital Video Information' },
  { code: 'ICS 690', title: 'Seminar in ICS' },
  { code: 'ICS 691', title: '(Alpha) Topics in Computer Science' },
  { code: 'ICS 692', title: 'Special Topics Seminar' },
  { code: 'ICS 695', title: 'Advanced Special Topics in Security' },
  { code: 'ICS 699', title: 'Directed Reading/Research' },
  { code: 'ICS 700', title: 'Thesis Research' },
  { code: 'ICS 800', title: 'Dissertation Research' },
];

async function main() {
  console.log('🌱 Seeding the database...');

  const defaultPassword = await hash('changeme', 10);

  for (const account of config.defaultAccounts) {
    const role = (account.role as Role) || Role.USER;
    console.log(`👤 Upserting user: ${account.email} (${role})`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password: defaultPassword,
        role,
        name: account.name ?? null,
        profilePicture: account.profilePicture ?? null,
      },
    });
  }

  console.log(`📚 Upserting ${courses.length} courses...`);
  for (const course of courses) {
    await prisma.course.upsert({
      where: { code: course.code },
      update: {},
      create: {
        code: course.code,
        title: course.title,
      },
    });
    console.log(`   → ${course.code}`);
  }

  const hostUser = await prisma.user.findFirst();
  const course101 = await prisma.course.findUnique({ where: { code: 'ICS 101' } });
  if (hostUser && course101) {
    console.log('🕒 Creating sample study session');
    const session = await prisma.studySession.create({
      data: {
        topic: 'Pointers and Memory',
        description: 'Cram session before midterm',
        ownerId: hostUser.id,
        courseId: course101.id,
        status: SessionStatus.ACTIVE,
        startTime: new Date(Date.now() + 60 * 60 * 1000),
        endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
        attendees: { connect: [{ id: hostUser.id }] },
      },
    });

    await prisma.pointHistory.create({
      data: {
        userId: hostUser.id,
        points: 10,
        description: 'Hosted a study session',
      },
    });

    console.log(`   → Created session ID ${session.id}`);
  }

  console.log('✅ Seeding complete.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
