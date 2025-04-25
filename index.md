# Welcome to Study-Palz 👋

**A face-to-face study group platform for all students at UH Mānoa**

---

## Table of Contents

[Overview](#overview)

[GitHub, Team & Live App](#github-team--live-app)

[Mockup Pages](mockup.md)

[Milestones](#milestones)

[User Guide](#user-guide-)

[Developer Guide](#developer-guide-)

---

## Overview

UH students often struggle to complete homework efficiently or understand material deeply—mainly because they study alone. Study Palz helps fix that by making it easy for students to self-organize real-time, face-to-face study groups on campus.

---

## 🎯 Goals

- Encourage students to study together in person.
- Leaderboard to challenge students and encourage them to study more.

---

## GitHub, Team & Live App

- 🔗 **GitHub Repository**: [Study Palz on GitHub](https://github.com/orgs/study-palz/repositories)  

- 👥 **Team Members & Contact Info**: [Meet the Team](team-contract.md)  

- 🚀 **Live App on Vercel**: [Launch Study Palz](https://study-palz.vercel.app/)


## Milestones

- [Project Milestone 1](https://github.com/orgs/study-palz/projects/3)

- [Project Milestone 2](https://github.com/orgs/study-palz/projects/7)

- [Project Milestone 3](https://github.com/orgs/study-palz/projects/8/views/1)


---

## User Interface Walkthrough 🔧

### Landing page

When you arrive at the app, the landing page welcomes you with a simple and inviting message.

![](public/images/home-guide.png)

### About

Clicking on the About link will direct you to a page that provides an overview of Study-Palz, including its mission, key features, and the team behind the platform.

![](/public/image/about-guide.png)

### Contact 

Clicking on the Contact link will take you to a page where you can find ways to reach out to the Study-Palz team

![](/public/images/contact-guide.png)

![Home Guide](images/signup-guide.png)



1. **Login & Set Up Your Profile**  
   - When creating your account, your major is asked to group you with students in that major.
   - Mark current courses you need help with.
   - Upload a headshot so others can recognize you.

2. **View Courses & Members**  
   - See a list of UH courses.
   - View "Senseis" (students offering help) and "Grasshoppers" (students seeking help) per course.

3. **Create Study Sessions**  
   - Propose a study session at a set time or choose **“Right Now!”** if you need instant help.
   - Get notified when others join your session.

4. **Join Sessions & Help Others**  
   - Use the calendar to view all active and upcoming sessions.

---

## Developer Guide 🔧

### 1. Clone the Repository

First, clone the repository by clicking [**here**](https://github.com/study-palz/study-palz.github.io) to view the repository and then run the following command in your terminal:

<pre> <code>```git clone https://github.com/study-palz/study-palz.github.io.git ```</code> </pre>
<pre> <code>```cd study-palz.github.io```</code> </pre>

### 2. Set Up PostgreSQL Database

Create a new PostgreSQL database called study_palz. Make sure PostgreSQL is installed and running:
<pre> <code>```createdb study_palz```</code> </pre>

### 3. Set Up the Environment Variables

Copy the example environment file and configure your database connection:
<pre> <code>```cp .env.example .env```</code> </pre>
Then, open .env and set your PostgreSQL credentials:
<pre> <code>```DATABASE_URL="postgresql://username:password@localhost:5432/study_palz"
```</code> </pre>

### 4. Install Dependencies

Use npm to install the required packages:
<pre> <code>```npm install```</code> </pre>

### 5. Set Up the Database

Run the following Prisma command to apply migrations and set up the database schema:
<pre> <code>```npx prisma migrate dev```</code> </pre>

### 5. Start the Development Server

Finally, start the development server locally:
<pre> <code>```npm run dev```</code> </pre>
Then open your browser and go to
<pre> <code>```[npm run dev](http://localhost:3000)```</code> </pre>
This will load the app on your local machine for development.

---

## 🏆 Game Mechanics

- Earn points and levels by participating in sessions.
- Top Senseis and Grasshoppers may earn real-world rewards (e.g., gift cards).
- Designed to prevent abuse and promote real participation.

---

## 🛡️ Safety & Admin Support

- All meetings happen on the UH Campus for student safety.
- Admins can monitor activity and step in if issues arise.

---



