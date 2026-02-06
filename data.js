// data.js
// This file acts as your database. 
// Edit this file to update content without touching HTML or CSS.

export const conferenceData = {
    // --- GENERAL INFO ---
    conferenceName: "NATIONAL CONFERENCE ON",
    universityName: "Anna University",
    conferenceDate: "February 19 & 20, 2026",

    // --- HERO SECTION ---
    hero: {
        title: "AUTOMATION, ROBOTICS & MECHATRONIC SYSTEMS  2026",
        subtitle: "",
        location: "University Main Hall",
        // These images will act as the carousel on the right side of the hero
        carouselImages: [
            "assets/img1.JPG",
            "assets/img2.JPG",
            "assets/img3.JPG",
            "assets/img4.JPG",
            "assets/img5.JPG",
            "assets/img6.JPG",
            "assets/img7.JPG",
            "assets/img8.JPG",

        ]
    },

    // --- ABOUT BLOCKS (Can be reused for various sections) ---
    // You can add as many generic text blocks as you want here
    aboutSections: [
        {
            id: "about-conference",
            title: "About NCARMS - 2026",
            description: "The National Conference on Automation, Robotics and Mechatronics Systems (NCARMS–2026) aims to provide a premier platform for researchers, academicians, and industry professionals to exchange knowledge and innovations. The conference will focus on emerging trends in intelligent automation, advanced robotics, AI-driven systems, and sustainable mechatronic technologies."
        },
        {
            id: "about-university",
            title: `<a href="https://www.annauniv.edu/">About the University </a>`,
            description: `Anna University was established on 4th September, 1978 as a unitary type of University. This University was named after Late Dr. C. N. Annadurai, former Chief Minister of Tamil Nadu. It offers higher education in Engineering, Technology, Architecture and Applied Sciences relevant to the current and projected needs of the society. Besides promoting research and disseminating knowledge gained therefrom, it fosters cooperation between the academic and industrial communities. The University was formed by bringing together and integrating four well-known technical institutions in the city of Madras (now Chennai) namely:<br>` +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- College of Engineering, Guindy<br>" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- Alagappa College of Technology<br>" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- Madras Institute of Technology<br>" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- School of Architecture & Planning<br>" +
                "• AU is ranked with NAAC: A++<br>" +
                "• NIRF Ranking 2025: 2nd among State Public Universities<br>" +
                "• Overall: 29; University: 20; Engineering: 20; Research: 26<br>" +
                "• WUR – Engg. & Tech: 177; South Asia: 30<br>" +
                "• SDG: 9 among the Indian Universities"
        },
        {
            id: "about-institution",
            title: `<a href="https://www.mitindia.edu/">About MIT </a>`,
            description: "In 1949, Shri.C.Rajam, gave the Madras Institute of Technology (MIT) to the newly independent India, to establish the strong technical base it needed to take its place in the world. MIT is one of the four campuses of Anna University."
        },
        {
            id: "about-department",
            title: `<a href="https://www.auegov.ac.in/Department/prod/">About the Department`,
            description: "The Department of Production Technology was the fifth department established at MIT in 1977.The department have been sponsored and supported by AICTE, DST-FIST, UGC-DRS-SAP, NRB DRDO, DST-SERB, CMRG and Tamil Nadu Innovation Initiatives (TANII). The department is a part of UGC-University with Potential for Excellence (UPE). Accredited by NBA."
        }
        // {
        //     id: "about-ripe",
        //     title: "About RIPE",
        //     description: "The Research & Innovation in Production Engineering (RIPE) group focuses on... [Add full description here]"
        // },
        // {
        //     id: "publication-info",
        //     title: "Publication Info",
        //     description: "All accepted and presented papers will be published in the conference proceedings with an ISBN number."
        // },
        // {
        //     id: "intructions-for-participants",
        //     title: "Accommodation",
        //     description: "Accommodation will be provided to the participants on prior request in the hostels on a payment basis."
        // }
    ],

    // --- THEMES (Cards with images) ---
    themes: [
        { title: "Industry 4.0 and Digital Twin", image: "" },
        { title: "Indusrtial Robotics, Mobile Robotics and Applications", image: "" },
        { title: "Mechatronic Systems, Modelling and Simulation", image: "" },
        { title: "Vehicle Mechatronics and Autonomous Vehicles", image: "" },
        { title: "Signal, Image Processing and Control Technologies", image: "" },
        { title: "Artificial Intelligence and Deep Learning.", image: "" },
        { title: "Materials and Manufacturing", image: "" },
        { title: "Electric & Hybrid Vehicles", image: "" },
        { title: "Smart and Sustainable", image: "" }
    ],

    // --- SPEAKERS (Carousel Data) ---
    speakers: [
        { name: "Prof. Somashekhar S. Hiremath", title: "", institution: "Indian Institute of Technology, Madras", topic: "Waypoint tracking and obstacle avoidance of differential drive wheeled mobile robot", image: "assets/organizing/somasekar.jpeg" },
        { name: "Prof. Sreekumar M", title: "", institution: "IIITDM Kancheepuram", topic: "The Future of Robotics and Automation", image: "assets/organizing/sreekumar.png" },
        { name: "Dr. S. Joseph Winston", title: "", institution: "Scientist-H, Indiara Gandhi Centre for Atomic Research", topic: "Remote calibration of robotic inspection system", image: "assets/organizing/joseph-winston.png" },
        // { name: "Julian Ross", title: "Founder", institution: "Decentralized Dev", topic: "Blockchain", image: "assets/image.png" },
        // Add more speakers here to test the carousel logic later
        // { name: "Dr. A. Kumar", title: "Professor", institution: "IIT Madras", topic: "Machine Learning", image: "assets/image.png" },
    ],

    // --- ORGANIZING COMMITTEE (Stacked Grid) ---
    organizingCommittee: [
        { name: "Dr. P. Shankar, I.A.S", title: "Chief Patron", position: "Convenor<br>Secretary to Government,<br>Higher Education Department,<br>Government of Tamil Nadu. ", image: "assets/organizing/sankar-ias.png" },
        { name: "Dr. S. Visakan, I.A.S.", title: "Chief Patron", position: "Member<br>Director,<br>Directorate of Technical Education,<br>Government of Tamil Nadu.", image: "assets/organizing/visakan.png" },
        { name: "Dr. B.T.N. Sridhar", title: "Chief Patron", position: "Member<br>Professor,<br>Dept. of Aerospace Engineering,MIT Campus, <br>Anna University, Chennai", image: "assets/organizing/btn-sridhar.png" },
        { name: "Dr. V. Kumaresan", title: "Patron", position: "Registrar (i/c)<br>Anna University, Chennai", image: "assets/organizing/v-kumaresan.png" },
        { name: "Dr. P. Jayashree", title: "Co-Patron", position: "Professor & Dean<br>MIT Campus, Anna University, Chennai ", image: "assets/organizing/dr-jayasree.png" },
        { name: "Dr. J. Jancirani", title: "Chair", position: "Professor & Head<br>Dept. of Production Technology, MIT Campus,<br>Anna University, Chennai", image: "assets/organizing/JanciRani-Hod.png" },
        { name: "Dr. S. Vijayakumar", title: "Co-Ordinator", position: "Associate Professor<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/organizing/vijayakumar.png" },
        { name: "Dr. V. Mugendiran", title: "Co-Ordinator ", position: "Assistant Professor (Sl. Gr.)<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/organizing/mugendiran.png" },
        { name: "Dr. P. Karthikeyan", title: "Co-Ordinator ", position: "Assistant Professor (Sl. Gr.)<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/organizing/karthikeyan.png" },
        { name: "Dr. S. Sathish", title: "Co-Ordinator", position: "Assistant Professor<br>Dept. of Production Technology,<br>MIT Campus", image: "assets/organizing/sathish.png" }
    ],

    // --- SUPPORT COMMITTEE (Similar style to Organizing) ---
    supportCommittee: [
        { name: "Dr. A. Siddharthan", title: "Professor", image: "assets/organizing/siddharthan.png" },
        { name: "Dr. G.B. Bhaskar", title: "Professor", image: "assets/organizing/g-bhaskar.png" },
        { name: "Dr. P. Ganesh", title: "Associate Professor", image: "assets/organizing/ganesh.png" },
        { name: "Dr. C. Nandakumar", title: "Associate Professor", image: "assets/organizing/nandakumar.png" },
        { name: "Dr. N. Srirangarajalu", title: "Assistant Professor  (Sl. Gr.)", image: "assets/organizing/srirangarajalu.png" },
        { name: "Dr. G. Kumaresan", title: "Assistant Professor", image: "assets/organizing/g-kumaresan.png" },
        { name: "Dr. E. Pavithra", title: "Assistant Professor", image: "assets/organizing/pavithra.png" },
        { name: "Dr. C. Arun Prakash", title: "Assistant Professor", image: "assets/organizing/arun-prakash.png" },
        { name: "Dr. M. Manoj", title: "Teaching Fellow", image: "assets/organizing/manoj.png" },
        { name: "Mr. P. Rethinam", title: "Teaching Fellow", image: "assets/organizing/rethinam.png" },
        { name: "Mr. P. Mani", title: "Teaching Fellow", image: "assets/organizing/mani.png" },
        { name: "Mr. K. Tamilarasan", title: "Teaching Fellow", image: "assets/organizing/tamilarasan.png" },
        { name: "Mr. K. Muthukumaran", title: "Teaching Fellow", image: "assets/organizing/muthukumaran.png" }
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
        // { name: "Dr. V. Anandakrishnan", title: "NIT Trichy" },
        // { name: "Dr. S. Aravindhan", title: "IIT Delhi" },
        // { name: "Dr. B. Arivazhagan", title: "IGCAR" },
        // { name: "Dr. M. Arivanandhan", title: "Anna University" },
        // { name: "Dr. N. Arunachalam", title: "IIT Madras" },
        // { name: "Dr. P. Asokan", title: "NIT Trichy" },
        // { name: "Dr. A.S.S. Balan", title: "NIT Surathkal" },
        // { name: "Dr. V. Dillibabu", title: "GTRE, DRDO" },
        // { name: "Dr. G. Dineshsingh Thakur", title: "DIAT, Pune" },
        // { name: "Dr. K. Jeyapal", title: "IIITDM Kanchipuram" },
        // { name: "Dr. R. Jeyavel", title: "Anna University" },
        // { name: "Dr. J. John Rozario", title: "DRDL Hyderabad" },
        // { name: "Dr. M. Kamaraj", title: "IIT Madras" },
        // { name: "Dr. S. Kanmani Subbu", title: "IIT Palakkad" },
        // { name: "Dr. V. Krishnaraj", title: "PSG Tech" },
        // { name: "Dr. A. Manjunath", title: "GTRE, DRDO" },
        // { name: "Dr. I.A. Palani", title: "IIT Indore" },
        // { name: "Dr. J. Ramkumar", title: "IIT Kanpur" },
        // { name: "Dr. P. Ramkumar", title: "IIT Madras" },
        // { name: "Dr. S. Sathyan", title: "IIT Madras" },
        // { name: "Dr. K. Srinivasa Rao", title: "Andhra University" },
        // { name: "Dr. M. Omkumar", title: "Anna University" },
        // { name: "Dr. S. Balasivanandha Prabhu", title: "Anna University" },
        // { name: "Dr. T. Paul Robert", title: "Anna University" },
        // { name: "Dr. V. Karthikeyan", title: "Chairman, IE(I) TNSC" },
        // { name: "Er. D. Gokul", title: "Honorary Secretary, IE(I) TNSC" },
        // { name: "Er. C. Prabhu", title: "Committee Member, PR, IE(I) TNSC" },
        // { name: "Dr. S. Ramesh", title: "Chairman, PRDB, IE(I)" }
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
            category: "Participants From Industry / Govt./ Academic / Research Institutions",
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
        accountName: "DIRECTOR, CSRC",
        accountNumber: "30061247489",
        bankName: "State Bank of India (SBI)",
        branch: "Anna University, Chennai",
        ifsc: "SBIN0006463",
        micr: "600002039"
    },

    // --- IMPORTANT DATES (List View) ---
    importantDates: [
        { description: "Paper Submission Deadline", date: "13/02/2026" },
        { description: "Notification of Acceptance", date: "14/02/2026" },
        // { description: "Camera Ready Paper", date: "28/02/2026" },
        { description: "Registration Deadline", date: "16/02/2026" },
        { description: "Conference Dates", date: "19/02/2026 & 20/02/2026" }
    ],

    // --- FOOTER & CONTACT ---
    contact: {
        address: "Madras Institute of Technology, Chromepet, Chennai",
        email: "ncarms2016@gmail.com",
        phone: "95855 45235 / 99434 19270 / 94438 15315 / 97509 81133"
    }
};