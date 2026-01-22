// data.js
// This file acts as your database. 
// Edit this file to update content without touching HTML or CSS.

export const conferenceData = {
    // --- GENERAL INFO ---
    conferenceName: "INNOVATION 2024",
    universityName: "Madras Institute of Technology",
    conferenceDate: "Oct 15-17, 2026",
    
    // --- HERO SECTION ---
    hero: {
        title: "Future of Innovation 2024",
        subtitle: "A premier gathering of visionaries, academics, and industry leaders.",
        location: "University Main Hall",
        // These images will act as the carousel on the right side of the hero
        carouselImages: [
            "assets/image.png",
            "assets/image.png",
            "assets/image.png"
        ]
    },

    // --- ABOUT BLOCKS (Can be reused for various sections) ---
    // You can add as many generic text blocks as you want here
    aboutSections: [
        {
            id: "about-conference", 
            title: "About the Conference",
            description: "Innovation 2024 is more than just a series of talks. It is a catalyst for interdisciplinary collaboration. We bring together the finest minds from computer science, ethics, and environmental engineering to chart a course for the next decade of development."
        },
        {
            id: "about-university",
            title: "About the University",
            description: "Madras Institute of Technology is one of the premier institutions... [Add full description here]"
        },
        {
            id: "about-department",
            title: "About the Department",
            description: "The Department of Production Engineering... [Add full description here]"
        },
        {
            id: "about-ripe",
            title: "About RIPE",
            description: "The Research & Innovation in Production Engineering (RIPE) group focuses on... [Add full description here]"
        },
        {
            id:"publication-info",
            title: "Publication Info",
            description: "All accepted papers will be published in the conference proceedings and selected papers will be considered for publication in reputed journals... [Add full description here]"
        },
        {
            id:"intructions-for-participants",
            title: "Instructions for Participants",
            description: "Participants are encouraged to register early to secure their spot at the conference... [Add full description here]"
        }
    ],

    // --- THEMES (Cards with images) ---
    themes: [
        { title: "AI Research", image: "assets/image.png" },
        { title: "Sustainable Tech", image: "assets/image.png" },
        { title: "Ethical Frameworks", image: "assets/image.png" },
        { title: "Robotics & Automation", image: "assets/image.png" }
    ],

    // --- SPEAKERS (Carousel Data) ---
    speakers: [
        { name: "Dr. Elena Vance", title: "Chief Ethicist", institution: "NeuroCore", topic: "AI Ethics", image: "assets/image.png" },
        { name: "Marcus Sterling", title: "Senior Architect", institution: "IBM Quantum", topic: "Quantum Computing", image: "assets/image.png" },
        { name: "Dr. Sarah Chen", title: "Director of Smart Cities", institution: "MIT", topic: "Urban Planning", image: "assets/image.png" },
        { name: "Julian Ross", title: "Founder", institution: "Decentralized Dev", topic: "Blockchain", image: "assets/image.png" },
        // Add more speakers here to test the carousel logic later
        // { name: "Dr. A. Kumar", title: "Professor", institution: "IIT Madras", topic: "Machine Learning", image: "assets/image.png" },
    ],

    // --- ORGANIZING COMMITTEE (Stacked Grid) ---
   organizingCommittee: [
        { name: "Dr. P. Shankar, I.A.S", title: "Chief Patron", position: "Dean", image: "assets/image.png" },
        { name: "Dr. S. Visakan, I.A.S.", title: "Chief Patron", position: "Dean", image: "assets/image.png" },
        { name: "Dr. B.T.N. Sridhar", title: "Chief Patron", position: "Dean", image: "assets/image.png" },
        { name: "Dr. V. Kumaresan", title: "Patron", position: "Dean", image: "assets/image.png" },
        { name: "Dr. P. Jayashree", title: "Co-Patron", position: "Dean", image: "assets/image.png" },
        { name: "Dr. J. Jancirani", title: "Chair", position: "HOD", image: "assets/image.png" }
    ],

    // --- SUPPORT COMMITTEE (Similar style to Organizing) ---
    supportCommittee: [
        { name: "Dr. J. Jancirani", title: "", image: "assets/image.png" },
        { name: "Dr. P. Ganesh", title: "", image: "assets/image.png" },
        { name: "Dr. C. Nandakumar", title: "", image: "assets/image.png" },
        { name: "Dr. N. Srirangarajalu", title: "", image: "assets/image.png" },
        { name: "Dr. P. Karthikeyan", title: "", image: "assets/image.png" },
        { name: "Dr. V. Mugendiran", title: "", image: "assets/image.png" },
        { name: "Dr. G. Kumaresan", title: "", image: "assets/image.png" },
        { name: "Dr. E. Pavithra", title: "", image: "assets/image.png" },
        { name: "Dr. C. Arun Prakash", title: "", image: "assets/image.png" },
        { name: "Mr. R. Mathiyazhagan", title: "", image: "assets/image.png" },
        { name: "Dr. M. Manoj", title: "", image: "assets/image.png" },
        { name: "Mr. A. Visagan", title: "", image: "assets/image.png" },
        { name: "Mr. P. Rethinam", title: "", image: "assets/image.png" },
        { name: "Mr. P. Mani", title: "", image: "assets/image.png" },
        { name: "Mr. K. Tamilarasan", title: "", image: "assets/image.png" },
        { name: "Mr. N. Arunagiri", title: "", image: "assets/image.png" },
        { name: "Mrs. U. Vishnuja", title: "", image: "assets/image.png" },
        { name: "Mr. K. Muthukumaran", title: "", image: "assets/image.png" },
        { name: "Mr. S. Mohamed Shazuli", title: "", image: "assets/image.png" }
    ],
    internationalAdvisory: [
    // { name: "Prof. Ajayan Vinu", title: "The University of New Castle, Australia" },
    // { name: "Prof. Angelos Markopoulos", title: "National Technical University of Athens, Greece" },
    // { name: "Prof. Balu Balachandran", title: "Argonne National Laboratory, USA" },
    // { name: "Prof. Chao-Ming Huang", title: "Kun Shan University, Taiwan" },
    // { name: "Prof. Hiroya Ikeda", title: "Shizuoka University, Japan" },
    // { name: "Prof. Ioannis E. Sarris", title: "University of West Attica, Greece" },
    // { name: "Prof. Jovana Radulovic", title: "University of Portsmouth, England" },
    // { name: "Prof. Kozo Fujiwara", title: "Tohoku University, Japan" },
    // { name: "Prof. Luisa F. Cabeza", title: "University of Lleida, Spain" },
    // { name: "Prof. Manoj Gupta", title: "National University of Singapore, Singapore" },
    // { name: "Prof. Marc A. Rosen", title: "Ontario Tech University, Canada" },
    // { name: "Prof. Mohd Fadzli Bin Abdollah", title: "Universiti Teknikal Malaysia Melaka, Malaysia" },
    // { name: "Prof. Yasuhiro Hayakawa", title: "Shizuoka University, Japan" },
    // { name: "Dr. Nishanth Pushparaj", title: "The University of Nottingham, Nottingham" }
],


    // --- ADVISORY BOARDS (Text Only) ---
    nationalAdvisory: [
    { name: "Dr. V. Anandakrishnan", title: "NIT Trichy" },
    { name: "Dr. S. Aravindhan", title: "IIT Delhi" },
    { name: "Dr. B. Arivazhagan", title: "IGCAR" },
    { name: "Dr. M. Arivanandhan", title: "Anna University" },
    { name: "Dr. N. Arunachalam", title: "IIT Madras" },
    { name: "Dr. P. Asokan", title: "NIT Trichy" },
    { name: "Dr. A.S.S. Balan", title: "NIT Surathkal" },
    { name: "Dr. V. Dillibabu", title: "GTRE, DRDO" },
    { name: "Dr. G. Dineshsingh Thakur", title: "DIAT, Pune" },
    { name: "Dr. K. Jeyapal", title: "IIITDM Kanchipuram" },
    { name: "Dr. R. Jeyavel", title: "Anna University" },
    { name: "Dr. J. John Rozario", title: "DRDL Hyderabad" },
    { name: "Dr. M. Kamaraj", title: "IIT Madras" },
    { name: "Dr. S. Kanmani Subbu", title: "IIT Palakkad" },
    { name: "Dr. V. Krishnaraj", title: "PSG Tech" },
    { name: "Dr. A. Manjunath", title: "GTRE, DRDO" },
    { name: "Dr. I.A. Palani", title: "IIT Indore" },
    { name: "Dr. J. Ramkumar", title: "IIT Kanpur" },
    { name: "Dr. P. Ramkumar", title: "IIT Madras" },
    { name: "Dr. S. Sathyan", title: "IIT Madras" },
    { name: "Dr. K. Srinivasa Rao", title: "Andhra University" },
    { name: "Dr. M. Omkumar", title: "Anna University" },
    { name: "Dr. S. Balasivanandha Prabhu", title: "Anna University" },
    { name: "Dr. T. Paul Robert", title: "Anna University" },
    { name: "Dr. V. Karthikeyan", title: "Chairman, IE(I) TNSC" },
    { name: "Er. D. Gokul", title: "Honorary Secretary, IE(I) TNSC" },
    { name: "Er. C. Prabhu", title: "Committee Member, PR, IE(I) TNSC" },
    { name: "Dr. S. Ramesh", title: "Chairman, PRDB, IE(I)" }
],

    
    // --- REGISTRATION FEES (From your image) ---
    fees: [
        {
            category: "UG/PG Students",
            priceINR: "₹750",
            priceUSD: "$100",
            note: "Without Conference Kit"
        },
        {
            category: "Research Scholars / Attendees",
            priceINR: "₹750",
            priceUSD: "$100",
            note: "Without Conference Kit"
        },
        {
            category: "Research Scholars (Full)",
            priceINR: "₹2,000",
            priceUSD: "$250",
            note: "With Conference Kit"
        },
        {
            category: "Industry / Academic Institutions",
            priceINR: "₹3,500",
            priceUSD: "$350",
            note: "With Conference Kit"
        }
    ],

    // --- BANK ACCOUNT DETAILS (From your image) ---
    bankDetails: {
        accountName: "RIPE 2024",
        accountNumber: "00000042534039982",
        bankName: "State Bank of India (SBI)",
        branch: "Chromepet",
        ifsc: "SBIN0013383",
        micr: "600002186"
    },

    // --- IMPORTANT DATES (List View) ---
    importantDates: [
        { description: "Paper Submission Deadline", date: "20/01/2026" },
        { description: "Notification of Acceptance", date: "15/02/2026" },
        { description: "Camera Ready Paper", date: "28/02/2026" },
        { description: "Registration Deadline", date: "10/03/2026" },
        { description: "Conference Dates", date: "15/10/2026" }
    ],

    // --- FOOTER & CONTACT ---
    contact: {
        address: "Madras Institute of Technology, Chromepet, Chennai",
        email: "conf2024@mitindia.edu",
        phone: "+91 98765 43210",
        mapLink: "https://www.google.com/maps/place/Madras+Institute+of+Technology,+Anna+University/@12.9483806,80.1370879,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525fac595c29ff:0xb76082ae18b51418!8m2!3d12.9483754!4d80.1396682!16zL20vMDFjczgx?hl=en&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
    }
};