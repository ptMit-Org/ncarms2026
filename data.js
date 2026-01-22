// data.js
// This file acts as your database. 
// Edit this file to update content without touching HTML or CSS.

export const conferenceData = {
    // --- GENERAL INFO ---
    conferenceName: "INNOVATION 2026",
    universityName: "Madras Institute of Technology",
    conferenceDate: "February 19 & 20, 2026",

    // --- HERO SECTION ---
    hero: {
        title: "2nd National Conference",
        subtitle: "A premier Conference on Automations, Robotics and Mechanic systems.",
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
            description: "The Second National Conference on Automation, Robotics and Mechatronics Systems (NCARMS–2026) aims to provide a premier platform for researchers, academicians, and industry professionals to exchange knowledge and innovations. The conference will focus on emerging trends in intelligent automation, advanced robotics, AI-driven systems, and sustainable mechatronic technologies."
        },
        {
            id: "about-university",
            title: "About the University",
            description: "Anna University was established on 4th September, 1978 as a unitary type of University. This University was named after Late Dr. C. N. Annadurai, former Chief Minister of Tamil Nadu. It offers higher education in Engineering, Technology, Architecture and Applied Sciences relevant to the current and projected needs of the society. Besides promoting research and disseminating knowledge gained therefrom, it fosters cooperation between the academic and industrial communities. The University was formed by bringing together and integrating four well-known technical institutions in the city of Madras (now Chennai) namely:<br>" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- College of Engineering, Guindy<br>" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- Alagappa College of Technology<br>" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- Madras Institute of Technology<br>" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- School of Architecture & Planning<br>" +
                "• AU is ranked with NAAC: A++<br>" +
                "• NIRF Ranking 2024:<br>" +
                "• State Public University Rank: 01<br>" +
                "• Overall: 20; University: 13; Engineering: 14; Research: 17<br>" +
                "• WUR – Engg. & Tech: 177; South Asia: 30<br>" +
                "• SDG: 9 among the Indian Universities"
        },
        {
            id: "about-institution",
            title: "About the Institute",
            description: "In 1949, Shri.C.Rajam, gave the Madras Institute of Technology (MIT) to the newly independent India, to establish the strong technical base it needed to take its place in the world. MIT is one of the four campuses of Anna University."
        },
        {
            id: "about-department",
            title: "About the Department",
            description: "The Department of Production Technology was the fifth department to be started in MIT by the year 1977.The department have been sponsored by AICTE, DST-FIST, UGC-DRS-SAP, NRB DRDO, DST-SERB and Tamil Nadu Innovation Initiatives (TANII). The department is a part of UGC-University with Potential for Excellence (UPE)."
        },
        {
            id: "about-ripe",
            title: "About RIPE",
            description: "The Research & Innovation in Production Engineering (RIPE) group focuses on... [Add full description here]"
        },
        {
            id: "publication-info",
            title: "Publication Info",
            description: "All accepted papers will be published in the conference proceedings and selected papers will be considered for publication in reputed journals"
        },
        {
            id: "intructions-for-participants",
            title: "Instructions for Participants",
            description: "Participants are encouraged to register early to secure their spot at the conference... [Add full description here]"
        }
    ],

    // --- THEMES (Cards with images) ---
    themes: [
        { title: "Intelligent Industrial Automation", image: "" },
        { title: "Sustainable TechAdvanced Robotics and Applications", image: "" },
        { title: "Mechatronic System Design and Integration", image: "" },
        { title: "Artificial Intelligence, Autonomous Vehicles", image: "" },
        { title: "Human-Robots", image: "" },
        { title: "Smart and Sustainable Materials for Mechatronics Systems", image: "" }
    ],

    // --- SPEAKERS (Carousel Data) ---
    speakers: [
        { name: "Prof. Somashekhar S. Hiremath", title: "Chief Ethicist", institution: "Indian Institute of Technology, Madras", topic: "Waypoint tracking and obstacle avoidance of differential drive wheeled mobile robot", image: "assets/image.png" },
        { name: "Prof. Sreekumar M", title: "Senior Architect", institution: "IIITDM Kancheepuram", topic: "The Future of Robotics and Automation", image: "assets/image.png" },
        { name: "Dr. Sarah Chen", title: "Director of Smart Cities", institution: "MIT", topic: "Urban Planning", image: "assets/image.png" },
        { name: "Julian Ross", title: "Founder", institution: "Decentralized Dev", topic: "Blockchain", image: "assets/image.png" },
        // Add more speakers here to test the carousel logic later
        // { name: "Dr. A. Kumar", title: "Professor", institution: "IIT Madras", topic: "Machine Learning", image: "assets/image.png" },
    ],

    // --- ORGANIZING COMMITTEE (Stacked Grid) ---
    organizingCommittee: [
        { name: "Dr. P. Shankar, I.A.S", title: "Chief Patron", position: "Convenor<br>Secretary to Government,<br>Higher Education Department,<br>Government of Tamil Nadu. ", image: "assets/image.png" },
        { name: "Dr. S. Visakan, I.A.S.", title: "Chief Patron", position: "Member<br>Director,<br>Directorate of Technical Education", image: "assets/image.png" },
        { name: "Dr. B.T.N. Sridhar", title: "Chief Patron", position: "Member<br>Professor,<br>Dept. of Aerospace Engineering,MIT Campus, <br>Anna University", image: "assets/image.png" },
        { name: "Dr. V. Kumaresan", title: "Patron", position: "Registrar<br>Anna University", image: "assets/image.png" },
        { name: "Dr. P. Jayashree", title: "Co-Patron", position: "Dean<br>MIT Campus, Anna University ", image: "assets/image.png" },
        { name: "Dr. J. Jancirani", title: "Chair", position: "HoD<br>Dept. of Production Technology, MIT Campus", image: "assets/image.png" },
        { name: "Dr. S. Vijayakumar", title: "Co-Ordinator", position: "Associate Professor<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/image.png" },
        { name: "Dr. V. Mugendiran", title: "Co-Ordinator ", position: "Assistant Professor (Sr. Gr.)<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/image.png" },
        { name: "Dr. P. Karthikeyan", title: "Co-Ordinator ", position: "Assistant Professor (Sr. Gr.)<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/image.png" },
        { name: "Dr. S. Sathish", title: "Co-Ordinator", position: "Assistant Professor<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/image.png" }
    ],

    // --- SUPPORT COMMITTEE (Similar style to Organizing) ---
    supportCommittee: [
        { name: "Dr. A. Siddharthan", title: "Professor", image: "assets/image.png" },
        { name: "Dr. G.B. Bhaskar", title: "Professor", image: "assets/image.png" },
        { name: "Dr. P. Ganesh", title: "Associate Professor", image: "assets/image.png" },
        { name: "Dr. C. Nandakumar", title: "Associate Professor", image: "assets/image.png" },
        { name: "Dr. N. Srirangarajalu", title: "Assistant Professor  (Sl. Gr.)", image: "assets/image.png" },
        { name: "Dr. G. Kumaresan", title: "Assistant Professor", image: "assets/image.png" },
        { name: "Dr. M. Manoj", title: "Teaching Fellow", image: "assets/image.png" },
        { name: "Mr. P. Rethinam", title: "Teaching Fellow", image: "assets/image.png" },
        { name: "Mr. P. Mani", title: "Teaching Fellow", image: "assets/image.png" },
        { name: "Mr. K. Tamilarasan", title: "Teaching Fellow", image: "assets/image.png" },
        { name: "Mr. K. Muthukumaran", title: "Teaching Fellow", image: "assets/image.png" }
        // { name: "head",  title: "Teaching Fellow", image: "assets/image.png" },
        // { name: "head",  title: "Teaching Fellow", image: "assets/image.png" },
        // { name: "head",  title: "Teaching Fellow", image: "assets/image.png" },
        // { name: "head",  title: "Teaching Fellow", image: "assets/image.png" }
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
            category: "Full Time Research Scholars / Students",
            priceINR: "₹1000/-",
            priceUSD: "",
            note: "(inclusive of GST)"
        },
        {
            category: "Industry / Govt./ Academic / Research Institutions",
            priceINR: "₹2000/-",
            priceUSD: "",
            note: "(inclusive of GST)"
        }
        // {
        //     category: "Research Scholars (Full)",
        //     priceINR: "₹2,000",
        //     priceUSD: "$250",
        //     note: "With Conference Kit"
        // },
        // {
        //     category: "Industry / Academic Institutions",
        //     priceINR: "₹3,500",
        //     priceUSD: "$350",
        //     note: "With Conference Kit"
        // }
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
        { description: "Paper Submission Deadline", date: "05/02/2026" },
        { description: "Notification of Acceptance", date: "07/02/2026" },
        // { description: "Camera Ready Paper", date: "28/02/2026" },
        { description: "Registration Deadline", date: "10/02/2026" },
        { description: "Conference Dates", date: "19/10/2026 & 20/10/2026" }
    ],

    // --- FOOTER & CONTACT ---
    contact: {
        address: "Madras Institute of Technology, Chromepet, Chennai",
        email1: "ncarms2016@gmail.com",
        phone1: "",
        email2: "pkarthikeyan@mitindia.edu",
        phone2: "+91 99434 19270",
        email3: "mugendiran.v@mitindia.edu",
        phone3: "+91 94438 15315",
        email4: "vijayakumar@mitindia.edu",
        phone4: "+91 95855 45235",
        email5: "sathishs@mitindia.edu",
        phone5: "+91 97509 81133",
    }
};