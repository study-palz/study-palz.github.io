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

[Community Feedback](#community-feedback-)


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

[![ci-badge](https://github.com/study-palz/study-palz.github.io/workflows/ci-study-palz.github.io/badge.svg)](https://github.com/study-palz/study-palz.github.io/actions/workflows/ci.yml)

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

Clicking on the About link will direct you to a page that provides an overview of Study-Palz

![](/public/images/about-guide.png)

### Contact 

Clicking on the Contact link will take you to a page where you can find ways to reach out to the Study-Palz team

![](/public/images/contact-guide.png)

### Sign in 

Clicking on the Sign In link brings you to a secure login page where returning users can enter their email and password to access their personalized Study-Palz dashboard.

![](/public/images/signin-guide.png)

### Sign up

Clicking on the Sign Up link takes you to a registration page where new users can create an account by entering their name, email, password, and major—setting up their profile to start using Study-Palz.

![](/public/images/signup-guide.png)

### Change password

Clicking on the Change Password allows you to update your StudyPalz account password for enhanced security. By changing your password, you can ensure your account remains protected and that only you have access to it.

![](/public/images/change-password-guide.png)

### Profile

Clicking on the Profile link brings you to your personal dashboard. Here, you can input your first name and last name, upload a url image, and choose courses you're taking or can help with.

![](/public/images/profile1-guide.png)


### Leaderboard

Clicking on the Leaderboard link takes you to a page showing the top-performing users on Study Palz.

![](/public/images/leaderboard-guide.png)


### Calender

The Calendar page shows all scheduled study sessions. You can view upcoming sessions, join one that fits your schedule.

![](/public/images/calender-guide.png)


### Homepage Browser
The browser lets you browse through different ICS courses which are linked to their respective course pages.

![](/public/images/HOMEPAGE%20BROWSE.png)

![](/public/images/ICS%20COURSES.png)


### Course Page
On the course page, you can view upcoming sessions or choose to create a new one.

![](/public/images/CoursePage.png)


### Session
After creating a session, you’ll be directed to a confirmation page displaying the session details and current attendees. Below the confirmation, an attendance sheet must be completed to earn points. This helps prevent point farming and ensures participation is verified.

![](/public/images/STUDYSESSIONCREATION.png)

![](/public/images/Confirmation.png)

![](/public/images/Attendees.png)

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

### 6. Start the Development Server

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

## Community Feedback 💬

We asked Five ICS students to test our program. Here were their feedbacks.

| Names       | Comments |
|-------------|----------|
| **Jaira Pader** | - During sign‑in, the “credential sign” error needs a space in between<br>- When my photo was empty, the placeholder sat left, after adding a picture it centered<br>- Course page could be enhanced by adding buttons next to the courses<br>- “Change password” should be inside profile, not the navbar<br>- "I like the authorization API you guys implemented" |
| **Marcus Prudencio** | "I think the "About" and "Contact" page should be included in the home/landing page. I don't think it makes much sense to have 2 separate pages dedicated for things that don't serve much purpose." <br> "You could place the contact stuff in the footer, and the "about" section somewhere in the home page."|
| **Kyle Mones** | "The formatting on mobile could be a bit better, idk if it’s supposed to be viewed on a phone but that’s all I got." |
| **Jiawen Chen** | - when logging in, if given the wrong password, it'll show "CredentialsSignin" instead of a clear error message<br> - Searchbar needs to read in the space in between ICS and the course number, it should ignore all spaces when given the query information from the searchbar. <br> - It would be nice to see other people's profiles so you can see what courses they have taken and get a better idea of how they can help you <br> - It isn't really clear how you earn points and get on the leaderboard, and the attendance submission system isn't that well thought out, as anyone can go in and change the results <br> - When viewing a study session, the course name blends in with the background because of the color of the text, and the description seems to still use some test7 text. <br> - When clicking the checkbox for attendance, you can't unclick the checkbox, and you can't mark yourself present, idk if that's intended. <br> - The submit attendance button also seems to not do anything. <br> -  It would be good to separate the list of all ICS courses into two or even three columns instead of just one, so users don't have to scroll all the way to the bottom, and it makes it so that you have way less white-space. |
| **Jerome Demesillo** | - Phone Ui is a bit weird <br> - I couldn't figure out how to create a session|




 

