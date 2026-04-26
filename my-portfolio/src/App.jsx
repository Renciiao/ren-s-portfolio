import { useState, useEffect, useRef, useCallback } from "react";
import { FaJava, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

/* ═══════════════════════ BREAKPOINT HOOK ════════════════════════════ */
function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    if (w < 640) return "mobile";
    if (w < 1024) return "tablet";
    return "desktop";
  });
  useEffect(() => {
    const handle = () => {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return { bp, isMobile: bp === "mobile", isTablet: bp === "tablet", isDesktop: bp === "desktop", isSmall: bp !== "desktop" };
}

/* ═══════════════════════════════ DATA ═══════════════════════════════ */
const WORKS = [
  {
    part: "SEATWORKS", slug: "SW",
    items: [
      { id:"SW·01", title:"Java Increment Operators", year:"2026", noDoc: true,
        desc:"This activity was a deep dive into the nuances of Java's increment operators. It highlighted the critical difference between pre-increment and post-increment, especially in complex expressions. I found it fascinating how the position of the increment operator can lead to different outcomes, reinforcing the importance of understanding operator precedence and evaluation order in Java programming.",
        tags:["Increment","Operators","Expressions"],
        code:`public class IncrementDemo {\n  public static void main(String[] args) {\n    int a = 5;\n    System.out.println(a++);\n    System.out.println(++a);\n    System.out.println(a);\n  }\n}` },
      { id:"SW·02", title:"Scholarship Switch Case", year:"2026", noDoc: true,
        desc:"Implementing a switch-case structure for a scholarship evaluation system was an insightful exercise in control flow. It allowed me to practice handling multiple conditions in a clean and organized way. The activity reinforced the importance of break statements to prevent fall-through and highlighted how switch-case can enhance readability when dealing with discrete values, making it a valuable tool in my Java programming toolkit.",
        tags:["Switch","Loops","Control Flow"],
        code:`import java.util.Scanner;\n\npublic class ScholarshipSystem {\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        int rank = input.nextInt();\n        String benefit;\n        switch (rank) {\n            case 1: benefit = "FULL SCHOLAR"; break;\n            case 2: benefit = "PARTIAL SCHOLAR"; break;\n            case 3: benefit = "SUPPORTED"; break;\n            case 4: benefit = "ACADEMIC AID"; break;\n            default: benefit = "No scholarship assigned."; break;\n        }\n        System.out.println("Status: " + benefit);\n        input.close();\n    }\n}` },
      { id:"SW·03", title:"Student Age Analyzer", year:"2026", pdfName: "2N_Camacho_Rene_Jr_StudentAgeAnalyzer.pdf",
        desc:"In this activity, I implemented a modular approach to age classification. Separating logic into distinct methods practiced code reusability and readability.",
        tags:["Methods","Conditionals","User-defined"],
        code:`package Mid_Act_3;\nimport java.util.Scanner;\n\npublic class StudentAgeAnalyzer {\n\n    public static String determineCategory(int age) {\n        if (age <= 12) return "Child";\n        else if (age <= 19) return "Teenager";\n        else if (age <= 59) return "Adult";\n        else return "Senior Citizen";\n    }\n\n    public static void main(String[] args) {\n        Scanner input = new Scanner(System.in);\n        System.out.print("Enter Student Name: ");\n        String studentName = input.nextLine();\n        System.out.print("Enter Age: ");\n        int age = input.nextInt();\n        if (age < 0 || age > 100) { System.out.println("Invalid age"); return; }\n        String ageCategory = determineCategory(age);\n        System.out.println("Student: " + studentName);\n        System.out.println("Category: " + ageCategory);\n    }\n}` }
    ]
  },
  {
    part: "QUIZZES", slug: "QZ",
    items: [
      { id:"Q-01", title:"Midterm Quiz 1", year:"2026",
        desc:"I learned about the background of Java, its structure and the operators. Although I was not satisfied by my score, there is still room for improvement.",
        tags:["Intro to Java","Program Structure","Operators"],
        code:`public class LoopQuiz {\n  public static void main(String[] args) {\n    for(int i=1; i<=3; i++) {\n      for(int j=1; j<=i; j++) System.out.print("*");\n      System.out.println();\n    }\n  }\n}` },
      { id:"Q02", title:"Midterm Quiz 2", year:"2026",
        desc:"This examination was a comprehensive test of my ability to integrate Java's logic flow. While it confirmed my proficiency in basic syntax, it also revealed a need for more rigorous study of the interplay between Control Structures and Array manipulation. I found that while I understand the concepts individually, misinterpreting technical terms in complex problem sets occasionally led to logic errors. I am currently focused on mastering these intersections to ensure more efficient and bug-free code in my future BSIT projects",
        tags:["Operators","Control Structures","Methods & Arrays"],
        code:`class Car {\n  String brand; int year;\n  Car(String brand, int year) { this.brand = brand; this.year = year; }\n  void showInfo() { System.out.println(brand + " (" + year + ")"); }\n}\n\npublic class Quiz2 {\n  public static void main(String[] args) {\n    Car myCar = new Car("Toyota", 2024);\n    myCar.showInfo();\n  }\n}` },
    ]
  },
  {
    part: "MIDTERMS ACTIVITIES", slug: "MT",
    items: [
      { id:"MT·01", title:"Variables", year:"2026", pdfName: "2-2N_Camacho_Rene Jr._CodeAnalysisActivity1.pdf",
        desc:"In this activity, I deepened my understanding of how Java manages memory through variable declaration and initialization. I focused on selecting the most efficient data types for each scenario, ensuring that I am not just storing data, but optimizing for performance. This exercise reinforced my ability to handle various data states, which I now realize is the first step toward managing complex object properties in OOP.",
        tags:["Classes","Objects","Constructors"],
        code:`public class Student {\n    static String school = "PUP Quezon City";\n    String name;\n    int grade;\n\n    public void display() {\n        double gwa = 1.75;\n        System.out.println(name + " " + grade + " " + gwa + " " + school);\n    }\n\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        Student s2 = new Student();\n        s1.name = "Ana"; s1.grade = 90;\n        s2 = s1;\n        s2.name = "Mark";\n        school = "PUP-STA. MESA";\n        s1 = null;\n        s2.display();\n    }\n}` },
      { id:"MT·02", title:"Operators", year:"2026", pdfName: "2_2N-Camacho_ReneJr_OperatorsActivity2.pdf",
        desc:"In this activity, I performed a comparative analysis of how Java handles operators compared to my previous experience with C. I was particularly observant of the nuances in increment and decrement operations, noting how prefix and postfix evaluations can alter the outcome of an expression. By mastering these foundational symbols, I am better equipped to handle complex logical conditions and mathematical computations as I advance toward Object-Oriented Programming.",
        tags:["Operators","Increment","Expressions"],
        code:`package camacho;\n\npublic class CombinedOperators {\n    public static void main(String[] args) {\n        int a = 12, b = 13;\n        System.out.println("Logical &: " + ((a == b) & (a < b)));\n        System.out.println("Bitwise |: " + (a | 0));\n        int x = 10, y = 15;\n        System.out.println("x > y ? " + (x > y));\n        int add = 80; add += 6;\n        System.out.println("Addition: " + add);\n        int num1 = 10, num4 = 67, num5 = 11;\n        System.out.println("Relational: " + (num4 > num1));\n        System.out.println("Pre-dec: " + (--num5 == num1));\n    }\n}` },
      { id:"MT·03", title:"ATM Transaction", year:"2026", pdfName: "2N_Camacho_Rene_Jr_Midterm Activity 3.pdf",
        desc:"In this activity, I implemented a secure transaction simulation to master nested control structures in Java. I focused on building a multi-layered validation system—checking for correct PIN entry before allowing access to withdrawal and deposit logic. This project sharpened my ability to manage 'edge cases,' such as preventing withdrawals that exceed the current balance. I now see how these logical safeguards are the first step toward building the robust, secure applications required in professional software developmentS",
        tags:["OOP Design","Conditionals","Input"],
        code:`import java.util.Scanner;\n\npublic class Act3 {\n\tpublic static void main(String[] args) {\n\t\tScanner scanner = new Scanner(System.in);\n\t\tdouble bal = 7000; int choice;\n\t\tdo {\n\t\t\tSystem.out.println("====== MENU ======");\n\t\t\tSystem.out.println("1: Check Balance");\n\t\t\tSystem.out.println("2: Deposit");\n\t\t\tSystem.out.println("3: Withdraw");\n\t\t\tSystem.out.println("4: Transfer");\n\t\t\tSystem.out.println("5: Exit");\n\t\t\tchoice = scanner.nextInt();\n\t\t\tswitch(choice) {\n\t\t\t\tcase 1: System.out.println("Balance: Php" + bal); break;\n\t\t\t\tcase 2: double dep = scanner.nextDouble(); if(dep>0) bal+=dep; break;\n\t\t\t\tcase 3: double wd = scanner.nextDouble(); if(wd>0&&wd<=bal) bal-=wd; break;\n\t\t\t\tcase 5: System.out.println("Thank you!"); break;\n\t\t\t}\n\t\t} while(choice != 5);\n\t\tscanner.close();\n\t}\n}` },
      { id:"MT·04", title:"Scholarship Evaluation", year:"2026", pdfName: "2N_Camacho_Rene_Jr_Midterm Activity 4.pdf",
        desc:"I implemented a switch-case structure to categorize academic performance and automate benefit distribution. By mapping specific GPA ranks to scholarship tiers, I practiced writing clean, non-redundant conditional logic. This exercise demonstrated my ability to translate institutional policies into efficient, scalable code.",
        tags:["Switch Cases","Input","Operations"],
        code:`import java.util.Scanner;\n\npublic class Act4 {\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\tSystem.out.print("Student Name: "); String studName = input.nextLine();\n\t\tSystem.out.print("GWA: "); double gwa = input.nextDouble();\n\t\tSystem.out.print("Entrance Exam: "); double entExam = input.nextDouble();\n\t\tSystem.out.print("Interview: "); double interview = input.nextDouble();\n\t\tinput.nextLine();\n\t\tSystem.out.print("Verification: "); String ver = input.nextLine();\n\t\tdouble score = (entExam * 0.50) + (interview * 0.50);\n\t\tString result = ver.equals("Verified") ? (score>=90?"Full Scholarship":score>=80?"Partial Scholarship":score>=70?"Book Allowance":"Not Qualified") : "Not Qualified";\n\t\tint gwaType = gwa<=1.50?1:gwa<=2.00?2:gwa<=2.50?3:0;\n\t\tString category;\n\t\tswitch(gwaType) { case 1: category="Academic Excellence"; break; case 2: category="Merit Scholarship"; break; case 3: category="Financial Assistance"; break; default: category="No Scholarship"; }\n\t\tSystem.out.println("Result: " + result + " | Category: " + category);\n\t}\n}` },
      { id:"MT·05", title:"Personal Expense Tracker", year:"2026", pdfName: "2N_Camacho_Rene_Jr_ExpenseTrackerCamacho_Rene.pdf",
        desc:"This activity was a practical application of Java's static methods to create a personal expense tracker. I focused on organizing expenses into categories and calculating totals while comparing them against a user-defined budget. This project reinforced my understanding of method design and the importance of clear, modular code for real-world applications.",
        tags:["Input","Output","Logic"],
        code:`import java.util.Scanner;\n\npublic class ExpenseTrackerCamacho_Rene {\n\n    public static double computeTotal(double food, double transport, double others) {\n        return food + transport + others;\n    }\n\n    public static String checkBudget(double total, double budget) {\n        if (total > budget) return "OVER BUDGET by PHP " + String.format("%.2f", total - budget);\n        return "WITHIN BUDGET! Remaining: PHP " + String.format("%.2f", budget - total);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("Enter name: "); String name = sc.nextLine();\n        System.out.print("Food: "); double food = sc.nextDouble();\n        System.out.print("Transport: "); double transport = sc.nextDouble();\n        System.out.print("Others: "); double others = sc.nextDouble();\n        System.out.print("Budget: "); double budget = sc.nextDouble();\n        double total = computeTotal(food, transport, others);\n        System.out.println("STATUS: " + checkBudget(total, budget));\n        sc.close();\n    }\n}` }
    ]
  },
  {
    part: "MIDTERMS", slug: "MT",
    items: [
      { id:"EXAM·MT", title:"Midterm Practical Exam", year:"2026", pdfName: "renmid.jpg",
        desc:"Due to unfortunate events, I was unable to attend the scheduled midterm examination. I did study the topics and found them quite overwhelming, but despite that I learned many things. Hopefully my wish to take the exam will be granted. For now, I will study harder to pass this course with flying colors.",
        tags:["Intro to Java","Program Structure","Variables","Operators","Control Flow","Methods","OOP Concepts","I/O Handling"],
        code:`import java.util.Scanner;\nimport java.io.*;\n\nclass Student {\n    String name; int id; double grade;\n\n    Student(String name, int id, double grade) {\n        this.name = name; this.id = id; this.grade = grade;\n    }\n\n    void displayStatus() {\n        String result = (grade >= 75) ? "PASSED" : "FAILED";\n        System.out.printf("Student: %s | ID: %d | Grade: %.2f | Status: %s%n",\n            name, id, grade, result);\n    }\n}` },
    ]
  },
  {
    part: "FINALS", slug: "FN",
    items: [
      { id:"FN·01", title:"Simple Wallet System", year:"2025",
        desc:"Encapsulation in practice — private fields, public methods. Responsibility separation made the code feel professional.",
        tags:["Encapsulation","Private","Methods"],
        code:`public class Wallet {\n  private double balance;\n\n  public Wallet(double initial) { this.balance = initial; }\n\n  public void deposit(double amount) { if (amount > 0) balance += amount; }\n\n  public boolean withdraw(double amount) {\n    if (amount > balance) return false;\n    balance -= amount; return true;\n  }\n\n  public double getBalance() { return balance; }\n\n  @Override\n  public String toString() { return "Wallet[₱" + balance + "]"; }\n}` },
      { id:"FN·02", title:"Personal Expense Tracker OOP", year:"2025",
        desc:"The most practical activity yet — tracking real data across categories and computing meaningful totals with static methods.",
        tags:["Data Org","Static","OOP Design"],
        code:`public class ExpenseTracker {\n  static double food, transport, other;\n\n  public static double total() { return food + transport + other; }\n\n  public static String status(double budget) {\n    double t = total();\n    return String.format("Spent: ₱%.2f / Budget: ₱%.2f → %s",\n      t, budget, t > budget ? "OVER" : "OK");\n  }\n\n  public static void main(String[] args) {\n    food = 450; transport = 120; other = 80;\n    System.out.println(status(600.00));\n  }\n}` },
    ]
  }
];

/* ═══════════════ OVERALL REFLECTION DATA ════════════════════════════ */
const REFLECTIONS = [
  { phase:"01", label:"Foundations", title:"Learning the Language", period:"Early Semester", icon:"☕", color:"#f89820",
    body:"Starting with Java felt like learning to think differently. The strict type system and verbose syntax were challenging at first, but I quickly appreciated how they forced precision. Seatworks on increment operators and switch-case structures built my confidence step by step." },
  { phase:"02", label:"Control & Logic", title:"Thinking in Algorithms", period:"Midterms Period", icon:"⚙", color:"#f89820",
    body:"The midterm activities were the real turning point. Building the ATM Transaction system and Scholarship Evaluator taught me how to translate real-world rules into code. I learned that good software isn't just about making it work — it's about handling every edge case." },
  { phase:"03", label:"OOP Concepts", title:"Midterms", period:"Finals Period", icon:"🧩", color:"#f89820",
    body:"The Deptals season has been tough for me, especially with the added pressure of midterms and serving as a student leader in the council. Despite these challenges, I remain a dedicated student; I will continue to fight and learn to secure my future in the tech field." },
  { phase:"04", label:"Looking Forward", title:"Ad Astra Abysosque.", period:"Finals", icon:"✦", color:"#f89820",
    body:"There is still so much to learn, and I am excited to dive into more complex OOP concepts like inheritance and polymorphism. My goal is to build projects that are not only functional but also well-designed and maintainable. I want to be the kind of developer who can take a messy problem and turn it into elegant code." },
];

const CONTACTS = [
  { platform:"Facebook", handle:"Ren Camacho", href:"https://www.facebook.com/renren.camacho.1", color:"#1877F2",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { platform:"LinkedIn", handle:"ren-camacho-8a023b31b", href:"https://www.linkedin.com/in/ren-camacho-8a023b31b/", color:"#0A66C2",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0z"/></svg> },
  { platform:"GitHub", handle:"Renciiao", href:"https://github.com/Renciiao", color:"#6e40c9",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
];

const LANGS = [
  { name:"Java", icon:<FaJava />, level:50, color:"#f89820" },
  { name:"React", icon:<FaReact />, level:55, color:"#61dafb" },
  { name:"Tailwind CSS", icon:<SiTailwindcss />, level:50, color:"#38bdf8" },
];

const CODE_LINES = [
  "public class Portfolio {",
  "  String author  = \"Ren Camacho\";",
  "  String school  = \"PUP Sta. Mesa\";",
  "  String section = \"BSIT 2-2N\";",
  "  String subject = \"OOP · 2nd Sem\";",
  "",
  "  public String greet() {",
  "    return \"Ad Astra Abysosque.\";",
  "  }",
  "}"
];


/* ═══════════════════════════════ THEME ══════════════════════════════ */
const LT = {
  bg: "#E0F7FA",        // Lightest Cyan-White (Silk highlight)
  panel: "#F0FDFF",     // Softest Mint
  panelAlt: "#B2EBF2", 
  text: "#002F35",      // Deepest Teal (High readability)
  sub: "#004D40",       // Muted Forest Teal
  muted: "#546E7A", 
  accent: "#00B8D4",    // Shimmering Cyan (The highlight)
  accentDark: "#00838F", 
  accentText: "#FFFFFF",
  border: "rgba(0, 47, 53, 0.1)",
  termBg: "#002F35",    // Deepest Teal-Black
  heroBlob1: "rgba(0, 184, 212, 0.15)",
  tag: "rgba(0, 184, 212, 0.1)",
  tagBorder: "rgba(0, 184, 212, 0.25)",
  tagText: "#006064",
  footBg: "#002F35",
  footText: "#80DEEA", // Light Cyan
};

const DK = {
  bg: "#001015",        // Deepest Obsidian-Blue (Shadow area)
  panel: "#00151A",     // Dark Teal Panel
  panelAlt: "#000D10",
  text: "#B2EBF2",      // Shimmering Silver-Cyan (Readable & Silk-like)
  sub: "#4DD0E1",       // Muted Cyan
  muted: "#006064",     // Darkest Teal
  accent: "#1DE9B6",    // Electric Teal-Green (The high peak sheen)
  accentDark: "#00BFA5",
  accentText: "#001015",
  border: "rgba(29, 233, 182, 0.15)",
  termBg: "#00080B",
  heroBlob1: "rgba(29, 233, 182, 0.12)",
  tag: "rgba(29, 233, 182, 0.15)",
  tagBorder: "rgba(29, 233, 182, 0.3)",
  tagText: "#1DE9B6",
  footBg: "#1DE9B6",
  footText: "#001015",
};


/* ═════════════════════════════ SPLASH ══════════════════════════════ */
/* ═════════════════════════════ SPLASH ══════════════════════════════ */
function Splash({ done, onDone }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Start the text entrance
    const t1 = setTimeout(() => setPhase(1), 400);
    
    // 2. Animate the loading bar progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30);

    // 3. Start the exit phase once loading is high
    const t2 = setTimeout(() => setPhase(2), 2400);
    
    // 4. Finalize
    const t3 = setTimeout(onDone, 3200);

    return () => {
      [t1, t2, t3].forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [onDone]);

  if (done) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      /* UPDATED: Electric Satin Gradient */
      background: "linear-gradient(145deg, #001015 0%, #002F35 60%, #004D40 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 24,
      transition: "opacity 0.8s ease",
      opacity: phase === 2 ? 0 : 1,
      pointerEvents: phase === 2 ? "none" : "all",
      padding: "0 24px"
    }}>
      {/* Main Text */}
      <div style={{
        overflow: "hidden",
        transform: phase >= 1 ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.8s cubic-bezier(.16,1,.3,1)"
      }}>
        <p style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "clamp(26px,7vw,80px)",
          color: "#B2EBF2", // Shimmering Cyan
          letterSpacing: "-2px", lineHeight: 1, fontStyle: "italic", textAlign: "center"
        }}>
          all roads lead to me
        </p>
      </div>

      {/* Loading Container */}
      <div style={{ 
        width: "200px", height: "2px", background: "rgba(29, 233, 182, 0.1)", 
        borderRadius: 99, position: "relative", overflow: "hidden",
        opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.5s 0.3s"
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, height: "100%",
          width: `${progress}%`,
          background: "#1DE9B6", // Electric Sheen
          boxShadow: "0 0 10px #1DE9B6",
          transition: "width 0.1s linear"
        }} />
      </div>

      {/* Subtext */}
      <div style={{
        overflow: "hidden",
        transform: phase >= 1 ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.8s 0.2s cubic-bezier(.16,1,.3,1)"
      }}>
        <p style={{
          fontFamily: "'Space Mono',monospace", fontSize: 10,
          color: "rgba(178, 235, 242, 0.4)",
          letterSpacing: ".12em", textTransform: "uppercase", textAlign: "center"
        }}>
          Initializing Portfolio · {progress}%
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════ TYPEWRITER ════════════════════════════ */
function Typewriter({ lines, started }) {
  const [rows, setRows] = useState([]);
  const li = useRef(0), ci = useRef(0);
  useEffect(() => {
    if (!started) return;
    let raf, last = 0, pause = 0;
    const tick = (now) => {
      if (now < pause) { raf = requestAnimationFrame(tick); return; }
      const i = li.current;
      if (i >= lines.length) return;
      const line = lines[i], c = ci.current;
      if (c === 0) setRows(p => [...p.slice(0,i), ""]);
      if (now - last < 34) { raf = requestAnimationFrame(tick); return; }
      last = now;
      if (c < line.length) { setRows(p => { const n=[...p]; n[i]=line.slice(0,c+1); return n; }); ci.current++; }
      else { li.current++; ci.current=0; pause=now+220; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, lines]);

  const paint = (txt) => {
    if (txt === "") return <span>&nbsp;</span>;
    const kw = ["public","class","static","void","private","return","new","if","else","while","switch","case","break","boolean","double","int","String","true","false","this","@Override"];
    return txt.split(/(\s+|[{}().,;=+\-*/<>!&|@])/).map((p,i) => {
      if (kw.includes(p)) return <span key={i} style={{color:"#79b8ff"}}>{p}</span>;
      if (/^".*"$/.test(p)) return <span key={i} style={{color:"#f0a878"}}>{p}</span>;
      if (/^\d+(\.\d+)?$/.test(p)) return <span key={i} style={{color:"#c8a0e8"}}>{p}</span>;
      if (["{","}","(",")"].includes(p)) return <span key={i} style={{color:"#C8F53C"}}>{p}</span>;
      return <span key={i} style={{color:"#a8c878"}}>{p}</span>;
    });
  };

  return (
    <div style={{display:"flex",flexDirection:"column",gap:2}}>
      {rows.map((txt,i) => (
        <div key={i} style={{fontFamily:"'Space Mono',monospace",fontSize:11,lineHeight:1.8,paddingLeft:(txt.match(/^ +/)?.[0]?.length??0)*5.5}}>
          {paint(txt.trimStart())}
          {i===rows.length-1&&<span style={{display:"inline-block",width:7,height:13,background:"#C8F53C",marginLeft:2,verticalAlign:"middle",animation:"blink 1s step-end infinite"}}/>}
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════ CODE BLOCK ═══════════════════════════════ */
function CodeBlock({ code, filename }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code).then(() => { setCopied(true); setTimeout(()=>setCopied(false),1800); }); };
  const lines = code.split("\n");
  const kw = ["public","class","static","void","private","return","new","if","else","while","switch","case","break","boolean","double","int","String","true","false","this","@Override"];
  const paint = (txt) => txt.split(/(\s+|[{}().,;=+\-*/<>!&|@])/).map((p,i) => {
    if (kw.includes(p)) return <span key={i} style={{color:"#79b8ff"}}>{p}</span>;
    if (/^".*"$/.test(p)) return <span key={i} style={{color:"#f0a878"}}>{p}</span>;
    if (/^\d+(\.\d+)?$/.test(p)) return <span key={i} style={{color:"#c8a0e8"}}>{p}</span>;
    if (["{","}","(",")"].includes(p)) return <span key={i} style={{color:"#C8F53C"}}>{p}</span>;
    return <span key={i} style={{color:"#9ab870"}}>{p}</span>;
  });
  return (
    <div style={{borderRadius:12,overflow:"hidden",background:"#080A06",boxShadow:"0 6px 30px rgba(0,0,0,0.5)",marginTop:16}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 14px",background:"#0f110c",borderBottom:"1px solid rgba(200,245,60,0.07)"}}>
        <div style={{display:"flex",gap:6}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:"rgba(200,245,60,0.3)"}}>{filename||"Main.java"}</span>
        <button onClick={copy} style={{background:"transparent",border:`1px solid ${copied?"#C8F53C":"rgba(200,245,60,0.15)"}`,borderRadius:6,color:copied?"#C8F53C":"rgba(200,245,60,0.35)",padding:"3px 10px",fontSize:9,cursor:"pointer",fontFamily:"'Space Mono',monospace",transition:"all .2s"}}>
          {copied?"✓ copied":"copy"}
        </button>
      </div>
      <div style={{overflowX:"auto",padding:"12px 0",maxHeight:250,overflowY:"auto"}}>
        <table style={{borderCollapse:"collapse",width:"100%"}}>
          <tbody>{lines.map((ln,i)=>(
            <tr key={i}>
              <td style={{width:34,textAlign:"right",padding:"0 10px",color:"rgba(200,245,60,0.15)",fontFamily:"'Space Mono',monospace",fontSize:9.5,userSelect:"none",verticalAlign:"top",lineHeight:1.8}}>{i+1}</td>
              <td style={{paddingRight:14,fontFamily:"'Space Mono',monospace",fontSize:10.5,lineHeight:1.8,whiteSpace:"pre",verticalAlign:"top"}}>{paint(ln)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

/* ════════════════════ NO-DOC TERMINAL ══════════════════════════════ */
function NoDocTerminal({ item, tk }) {
  const [lines, setLines] = useState([]);
  const sequence = [
    { text:`$ java -jar doc_viewer.jar --module "${item.id}"`, delay:0, color:"#C8F53C" },
    { text:`> Initializing document retrieval...`, delay:600, color:"rgba(200,245,60,0.55)" },
    { text:`> Scanning /OOP_Activities/ for ${item.id.replace("·","_")}.pdf`, delay:1100, color:"rgba(200,245,60,0.55)" },
    { text:``, delay:1700, color:"transparent" },
    { text:`[ERROR 404] MODULE_NOT_FOUND`, delay:2000, color:"#ff5f56" },
    { text:`> File: "${item.title}" — documentation not yet available.`, delay:2400, color:"#ffbd2e" },
    { text:`> STATUS: Pending upload. Please check back later.`, delay:2900, color:"#ffbd2e" },
    { text:``, delay:3400, color:"transparent" },
    { text:`$ _`, delay:3700, color:"#C8F53C" },
  ];
  useEffect(() => {
    const timers = sequence.map(s=>setTimeout(()=>setLines(prev=>[...prev,{text:s.text,color:s.color}]),s.delay));
    return ()=>timers.forEach(clearTimeout);
  }, []);
  return (
    <div style={{height:260,borderRadius:12,overflow:"hidden",border:`1px solid ${tk.border}`,marginTop:16,background:"#080A06",display:"flex",flexDirection:"column"}}>
      <div style={{background:"#0f110c",padding:"8px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(200,245,60,0.07)",flexShrink:0}}>
        <div style={{display:"flex",gap:6}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:"rgba(200,245,60,0.25)"}}>doc_viewer — bash</span>
        <div style={{width:46}}/>
      </div>
      <div style={{flex:1,padding:"14px 16px",fontFamily:"'Space Mono',monospace",fontSize:11,lineHeight:1.9,overflowY:"auto"}}>
        {lines.map((ln,i)=>(
          <div key={i} style={{color:ln.color,minHeight:"1.5em",wordBreak:"break-all"}}>
            {ln.text}
            {i===lines.length-1&&ln.text.endsWith("_")&&<span style={{display:"inline-block",width:7,height:13,background:"#C8F53C",marginLeft:2,verticalAlign:"middle",animation:"blink 1s step-end infinite"}}/>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════ FINALS TERMINAL ══════════════════════════════ */
function FinalsTerminal({ tk }) {
  const [text, setText] = useState("");
  const fullText = `>> System.out.println("Status: Not yet initialized. Please wait for further updates...");`;
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => { setText(fullText.slice(0,i)); i++; if(i>fullText.length) clearInterval(interval); }, 40);
    return ()=>clearInterval(interval);
  }, []);
  return (
    <div style={{background:"#0d0d0d",borderRadius:12,padding:"18px 20px",fontFamily:"'Space Mono',monospace",border:`1px solid ${tk.border}`,minHeight:110,marginTop:16}}>
      <div style={{display:"flex",gap:7,marginBottom:12}}>
        {["#ff5f56","#ffbd2e","#27c93f"].map(c=><div key={c} style={{width:10,height:10,borderRadius:"50%",background:c}}/>)}
      </div>
      <div style={{color:"#c8f53c",fontSize:11.5,lineHeight:1.6,display:"flex",alignItems:"center",flexWrap:"wrap"}}>
        {text}
        <span style={{display:"inline-block",width:7,height:14,background:"#c8f53c",marginLeft:4,animation:"blink 1s infinite"}}/>
      </div>
    </div>
  );
}

/* ═══════════════════════ WORK ACCORDION ════════════════════════════ */
function WorkItem({ item, idx, tk, isMobile }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("code");

  return (
    <div style={{borderBottom:`1px solid ${tk.border}`,background:open?tk.cardHover:"transparent",transition:"background .3s"}}>
      <div onClick={()=>setOpen(o=>!o)} style={{
        display:"grid",
        gridTemplateColumns: isMobile ? "1fr 34px" : "44px 1fr auto 34px",
        alignItems:"center", gap: isMobile ? 10 : 16,
        padding: isMobile ? "16px 16px" : "20px 24px",
        cursor:"pointer",
      }}>
        {!isMobile && <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:open?tk.accent:tk.muted,letterSpacing:".1em",transition:"color .2s"}}>{String(idx+1).padStart(2,"0")}</span>}
        <div>
          <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?16:19,color:tk.text,fontStyle:"italic",marginBottom:4}}>{item.title}</h4>
          
          {/* ══════════════ UPDATED PILL TAGS ══════════════ */}
          <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
            {item.tags.slice(0,isMobile?3:999).map(t=>(
              <span key={t} style={{
                background: tk.tag, 
                color: tk.tagText, 
                border: `1px solid ${tk.tagBorder}`, 
                borderRadius: "999px",
                padding: "2px 8px",
                fontSize: "10px",
                lineHeight: "1",
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "'Space Mono',monospace",
                textTransform: "uppercase",
                letterSpacing: "0.02em"
              }}>
                {t}
              </span>
            ))}
          </div>
          {/* ═══════════════════════════════════════════════ */}
          
        </div>
        {!isMobile && <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted}}>{item.year}</span>}
        <div style={{width:28,height:28,borderRadius:"50%",border:`1.5px solid ${open?tk.accent:tk.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:open?tk.accent:tk.muted,fontSize:13,transform:open?"rotate(45deg)":"none",transition:"all .25s",flexShrink:0}}>+</div>
      </div>

      <div style={{maxHeight:open?1000:0,overflow:"hidden",transition:"max-height 0.45s cubic-bezier(.16,1,.3,1)"}}>
        <div style={{padding:isMobile?"0 16px 22px":"0 24px 26px"}}>
          <p style={{fontSize:13.5,color:tk.sub,lineHeight:1.8,marginBottom:14}}>{item.desc}</p>
          <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
            {["code","pdf"].map(v=>(
              <button key={v} onClick={()=>setView(v)} style={{background:view===v?tk.accent:"transparent",color:view===v?tk.accentText:tk.muted,border:`1px solid ${view===v?tk.accent:tk.border}`,borderRadius:8,padding:"5px 12px",fontFamily:"'Space Mono',monospace",fontSize:9.5,cursor:"pointer",transition:"all .2s"}}>
                {v==="code"?"SOURCE_CODE":"DOCUMENTATION.pdf"}
              </button>
            ))}
          </div>

          {view==="code" ? (
            <CodeBlock code={item.code} filename={`${item.id.replace("·","_").toLowerCase()}.java`}/>
          ) : item.noDoc ? (
            <NoDocTerminal item={item} tk={tk}/>
          ) : item.id.startsWith("Q") ? (
            <div style={{height:220,borderRadius:12,overflow:"hidden",border:`1px solid ${tk.border}`,marginTop:16,background:"#0a0a0a",display:"flex",flexDirection:"column"}}>
              <div style={{background:"#1a1a1a",padding:"8px 14px",display:"flex",gap:6}}>
                {["#ff5f56","#ffbd2e","#27c93f"].map(c=><div key={c} style={{width:9,height:9,borderRadius:"50%",background:c}}/>)}
              </div>
              <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontFamily:"'Space Mono',monospace",gap:7}}>
                <p style={{color:tk.accent,fontSize:12}}>[SYSTEM_NOTIFICATION]</p>
                <p style={{color:"#ff5f56",fontSize:15,fontWeight:"bold"}}>&gt; module not available</p>
                <p style={{color:tk.muted,fontSize:11}}>wait for further updates...</p>
              </div>
            </div>
          ) : item.pdfName?.toLowerCase().endsWith('.pdf') ? (
            <div style={{height:isMobile?300:460,borderRadius:12,overflow:"hidden",border:`1px solid ${tk.border}`,marginTop:16}}>
              <iframe src={`/OOP_Activities/${item.pdfName}#toolbar=0`} width="100%" height="100%" style={{border:"none"}} title="Activity Document"/>
            </div>
          ) : (
            <div style={{borderRadius:12,overflow:"hidden",border:`1px solid ${tk.border}`,marginTop:16}}>
              <div style={{width:"100%",overflowY:"auto",background:"#1a1a1a",maxHeight:isMobile?300:460}}>
                <img src={`/OOP_Activities/${item.pdfName}`} style={{width:"100%",height:"auto",display:"block"}} alt="Documentation"/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════ MESSAGE SHEET ═════════════════════════════ */
function MsgSheet({ tk, onClose }) {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [msg,setMsg]=useState("");
  const [phase,setPhase]=useState("idle");
  const { isMobile } = useBreakpoint();
  const send = () => {
    if (!name.trim()||!msg.trim()) return;
    setPhase("loading");
    setTimeout(()=>{ setPhase("done"); setTimeout(()=>{ onClose(); setName(""); setEmail(""); setMsg(""); setPhase("idle"); },2000); },900);
  };
  const inp = (val,set,ph,rows) => {
    const base = {background:tk.inputBg,border:`1px solid ${tk.inputBorder}`,borderRadius:12,padding:"12px 14px",fontSize:13.5,fontFamily:"'Instrument Serif',serif",color:tk.text,outline:"none",width:"100%",transition:"border-color .2s",resize:rows?"none":undefined};
    const shared = {value:val,onChange:e=>set(e.target.value),placeholder:ph,onFocus:e=>e.target.style.borderColor=tk.accent,onBlur:e=>e.target.style.borderColor=tk.inputBorder,style:base};
    return rows?<textarea {...shared} rows={rows}/>:<input {...shared}/>;
  };
  return (
    <div onClick={e=>{if(e.target===e.currentTarget)onClose();}} style={{position:"fixed",inset:0,zIndex:900,display:"flex",alignItems:"flex-end",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(12px)",animation:"bgIn .25s ease both"}}>
      <div style={{width:"100%",maxWidth:520,background:tk.sheetBg,borderRadius:"24px 24px 0 0",boxShadow:"0 -12px 80px rgba(0,0,0,0.5)",border:`1px solid ${tk.border}`,borderBottom:"none",animation:"sheetUp .4s cubic-bezier(.16,1,.3,1) both",overflow:"hidden"}}>
        <div style={{display:"flex",justifyContent:"center",paddingTop:12}}>
          <div style={{width:36,height:4,borderRadius:2,background:tk.muted,opacity:.3}}/>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px 16px"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:42,height:42,borderRadius:"50%",background:`linear-gradient(135deg,${tk.accent},${tk.accentDark})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🎤</div>
            <div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:tk.text,fontStyle:"italic"}}>Ren Camacho</div>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:"#27C93F",marginTop:1}}>● Available</div>
            </div>
          </div>
          <button onClick={onClose} style={{background:tk.inputBg,border:"none",borderRadius:"50%",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:13,color:tk.muted}}>✕</button>
        </div>
        {phase==="done"?(
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 20px 44px",gap:12}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:`${tk.accent}18`,border:`2px solid ${tk.accent}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28}}>✓</div>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:tk.text,fontStyle:"italic"}}>Sent!</p>
            <p style={{fontSize:12,color:tk.muted,fontFamily:"'Space Mono',monospace",textAlign:"center"}}>Ren will get back to you soon.</p>
          </div>
        ):(
          <div style={{padding:"0 20px 32px",display:"flex",flexDirection:"column",gap:10}}>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:10}}>
              {inp(name,setName,"Your name *")}
              {inp(email,setEmail,"Email (optional)")}
            </div>
            {inp(msg,setMsg,"Write a message… *",4)}
            <button onClick={send} disabled={!name.trim()||!msg.trim()||phase==="loading"} style={{background:(!name.trim()||!msg.trim())?tk.inputBg:tk.accent,color:(!name.trim()||!msg.trim())?tk.muted:tk.accentText,border:"none",borderRadius:14,padding:"13px",fontSize:15,fontFamily:"'Playfair Display',serif",fontStyle:"italic",cursor:(!name.trim()||!msg.trim())?"not-allowed":"pointer",transition:"all .2s",display:"flex",alignItems:"center",justifyContent:"center"}}>
              {phase==="loading"?"⟳ Sending…":"Send message →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════ CONTACT ROW ══════════════════════════════ */
function ContactRow({ c, tk }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={c.href} target="_blank" rel="noopener noreferrer" onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:hov?tk.linkCardHov:tk.linkCard,border:`1px solid ${hov?tk.accent:tk.border}`,transform:hov?"translateX(4px)":"none",display:"flex",alignItems:"center",gap:12,padding:"13px 16px",borderRadius:14,textDecoration:"none",transition:"all .22s"}}>
      <div style={{width:38,height:38,borderRadius:10,background:`${c.color}18`,border:`1.5px solid ${c.color}30`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{c.icon}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,color:tk.text,fontStyle:"italic"}}>{c.platform}</div>
        <div style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:tk.muted,marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.handle}</div>
      </div>
      <span style={{color:hov?tk.accent:tk.muted,fontSize:15,transition:"all .2s"}}>{hov?"→":"↗"}</span>
    </a>
  );
}

/* ══════════════════════ OVERALL REFLECTION ═════════════════════════ */
function ReflectionSection({ tk, sectionRef, isMobile, isTablet }) {
  const [active, setActive] = useState(null);
  const pad = isMobile ? "60px 20px 100px" : isTablet ? "70px 40px" : "80px 72px";

  return (
    <section ref={sectionRef} data-section="reflection" style={{background:tk.bg,padding:pad,transition:"background .45s",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:-200,bottom:-200,width:500,height:500,borderRadius:"50%",background:tk.heroBlob1,filter:"blur(100px)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1}}>
        <div style={{marginBottom:isMobile?32:48}}>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>OVERALL REFLECTION</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,52px)",color:tk.text,fontStyle:"italic",lineHeight:1.1,marginBottom:14}}>
            the semester in review<span style={{color:tk.accent}}>.</span>
          </h2>
          <p style={{fontSize:14,color:tk.sub,lineHeight:1.85,fontStyle:"italic",maxWidth:520}}>
            Four phases, one journey — from writing my first Hello World to building full OOP systems.
          </p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:14,marginBottom:36}}>
          {REFLECTIONS.map(r=>(
            <div key={r.phase} onClick={()=>setActive(active===r.phase?null:r.phase)}
              style={{background:active===r.phase?`linear-gradient(135deg,${r.color}14,${r.color}06)`:tk.panel,border:`1px solid ${active===r.phase?r.color+"55":tk.border}`,borderRadius:16,padding:"18px 20px",cursor:"pointer",transition:"all .3s",boxShadow:active===r.phase?`0 8px 28px ${r.color}18`:"none",transform:active===r.phase?"translateY(-2px)":"none"}}>
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:38,height:38,borderRadius:10,background:`${r.color}18`,border:`1.5px solid ${r.color}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{r.icon}</div>
                  <div>
                    <div style={{fontFamily:"'Space Mono',monospace",fontSize:8.5,color:r.color,letterSpacing:".1em",marginBottom:2}}>PHASE {r.phase} · {r.label.toUpperCase()}</div>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:15,color:tk.text,fontStyle:"italic"}}>{r.title}</div>
                  </div>
                </div>
                <div style={{width:24,height:24,borderRadius:"50%",border:`1.5px solid ${active===r.phase?r.color:tk.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:active===r.phase?r.color:tk.muted,fontSize:12,transform:active===r.phase?"rotate(45deg)":"none",transition:"all .25s",flexShrink:0}}>+</div>
              </div>
              <div style={{display:"inline-block",background:tk.statBg,borderRadius:999,padding:"2px 9px",fontFamily:"'Space Mono',monospace",fontSize:8.5,color:tk.muted,marginBottom:active===r.phase?10:0}}>{r.period.toUpperCase()}</div>
              <div style={{maxHeight:active===r.phase?200:0,overflow:"hidden",transition:"max-height .4s cubic-bezier(.16,1,.3,1)"}}>
                <p style={{fontSize:13,color:tk.sub,lineHeight:1.85,fontStyle:"italic",paddingTop:4}}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{background:"#080A06",borderRadius:16,border:"1px solid rgba(200,245,60,0.10)",overflow:"hidden",boxShadow:"0 20px 50px rgba(0,0,0,0.35)"}}>
          <div style={{background:"#0f110c",padding:"9px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(200,245,60,0.07)"}}>
            <div style={{display:"flex",gap:6}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:"rgba(200,245,60,0.25)"}}>FinalReflection.java</span>
            <div style={{width:54}}/>
          </div>
          <div style={{padding:isMobile?"18px 16px 22px":"24px 28px 28px"}}>
            <pre style={{fontFamily:"'Space Mono',monospace",fontSize:isMobile?9.5:11,lineHeight:1.9,color:"rgba(200,245,60,0.35)",margin:0,whiteSpace:"pre-wrap"}}>{`/**\n * @author   Rene R. Camacho Jr.\n * @section  BSIT 2-2N — PUP Sta. Mesa\n * @subject  Object-Oriented Programming\n * @semester AY 2025–2026, 2nd Semester\n */`}</pre>
            <div style={{height:1,background:"rgba(200,245,60,0.06)",margin:"16px 0"}}/>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:isMobile?9.5:11,lineHeight:2}}>
              <div><span style={{color:"#79b8ff"}}>public class</span><span style={{color:"#C8F53C"}}> FinalReflection </span><span style={{color:"#C8F53C"}}>{"{"}</span></div>
              <div style={{paddingLeft:18}}><span style={{color:"#3a4a3a",fontStyle:"italic"}}>// This portfolio is not just a grade. It is proof.</span></div>
              <div style={{paddingLeft:18,marginTop:4}}><span style={{color:"#79b8ff"}}>static</span><span style={{color:"#9ab870"}}> String </span><span style={{color:"#f0a878"}}>motto</span><span style={{color:"rgba(200,245,60,0.4)"}}> = </span><span style={{color:"#c8a0e8"}}>"Padayon."</span><span style={{color:"rgba(200,245,60,0.4)"}}>;</span></div>
              <div><span style={{color:"#C8F53C"}}>{"}"}</span></div>
            </div>
            <div style={{marginTop:18,padding:"14px 16px",background:"rgba(200,245,60,0.04)",borderRadius:10,borderLeft:"3px solid rgba(200,245,60,0.3)"}}>
              <p style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",fontSize:isMobile?12.5:14,color:"rgba(200,245,60,0.7)",lineHeight:1.9}}>
                "Looking back at this semester, I realize that Object-Oriented Programming taught me more than syntax — it taught me how to think systematically. I started this course as someone who could write code. I leave it as someone who can design systems. The journey is not over. Padayon."
              </p>
              <div style={{marginTop:10,fontFamily:"'Space Mono',monospace",fontSize:8.5,color:"rgba(200,245,60,0.3)",letterSpacing:".08em"}}>
                — RENE R. CAMACHO JR. · BSIT 2-2N · PUP STA. MESA · AY 2025–2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════ MAIN APP ══════════════════════════════ */
const NAV = ["home","work","about","contact"];

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [typing, setTyping] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [activeLang, setActiveLang] = useState("Java");
  const [cursor, setCursor] = useState({x:0,y:0});
  const [cursorVisible, setCursorVisible] = useState(false);

  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const tk = dark ? DK : LT;

  const sectionRefs = {
    home:useRef(null), work:useRef(null),
    about:useRef(null), contact:useRef(null), reflection:useRef(null),
  };

  const onDone = useCallback(() => { setSplashDone(true); setTimeout(()=>setTyping(true),500); }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.dataset.section);}),
      {threshold:0.2}
    );
    Object.values(sectionRefs).forEach(r=>r.current&&obs.observe(r.current));
    return ()=>obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const move = e=>{ setCursor({x:e.clientX,y:e.clientY}); setCursorVisible(true); };
    const leave = ()=>setCursorVisible(false);
    window.addEventListener("mousemove",move);
    document.addEventListener("mouseleave",leave);
    return ()=>{ window.removeEventListener("mousemove",move); document.removeEventListener("mouseleave",leave); };
  }, [isDesktop]);

  const scrollTo = s=>sectionRefs[s]?.current?.scrollIntoView({behavior:"smooth"});
  const langData = LANGS.find(l=>l.name===activeLang)||LANGS[0];

  // Responsive padding helpers
  const secPad = isMobile?"60px 20px":isTablet?"70px 40px":"80px 72px";
  const workGroupPad = isMobile?"12px 0":isTablet?"16px 40px":"20px 72px";
  const workGroupHeaderPad = isMobile?"14px 20px":isTablet?"14px 40px":"18px 72px";

  return (
    <div style={{fontFamily:"'Instrument Serif',serif",background:tk.bg,color:tk.text,overflowX:"hidden",minHeight:"100vh",transition:"background .45s,color .45s",cursor:isDesktop?"none":"auto"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
        @keyframes bgIn{from{opacity:0}to{opacity:1}}
        @keyframes sheetUp{from{transform:translateY(100%)}to{transform:none}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-thumb{background:rgba(200,245,60,0.3);border-radius:99px;}
        ::-webkit-scrollbar-track{background:transparent;}
        input::placeholder,textarea::placeholder{color:rgba(80,60,30,0.35);}
      `}</style>

      {/* Custom cursor — desktop only */}
      {isDesktop && <>
        <div style={{position:"fixed",left:cursor.x,top:cursor.y,width:11,height:11,borderRadius:"50%",background:tk.accent,transform:"translate(-50%,-50%)",pointerEvents:"none",zIndex:9998,opacity:cursorVisible?1:0,transition:"opacity .2s",mixBlendMode:"difference"}}/>
        <div style={{position:"fixed",left:cursor.x,top:cursor.y,width:34,height:34,borderRadius:"50%",border:`1.5px solid ${tk.accent}`,transform:"translate(-50%,-50%)",pointerEvents:"none",zIndex:9997,opacity:cursorVisible?0.4:0,transition:"left .08s,top .08s,opacity .2s"}}/>
      </>}

      <Splash done={splashDone} onDone={onDone}/>
      {showMsg && <MsgSheet tk={tk} onClose={()=>setShowMsg(false)}/>}

    {/* ══════════ NAV (FIXED MOBILE & SCROLL) ══════════════════════ */}
      {isMobile ? (
        /* Mobile — Fixed bottom tab bar with Mode Toggle */
        <nav style={{
          position:"fixed", bottom:0, left:0, right:0, zIndex:600,
          background: dark ? "rgba(0, 16, 21, 0.94)" : "rgba(224, 247, 250, 0.94)",
          backdropFilter:"blur(24px)", borderTop:`1px solid ${tk.accent}33`,
          display:"flex", alignItems:"center", justifyContent:"space-around",
          padding:"8px 4px", paddingBottom:"max(8px,env(safe-area-inset-bottom))"
        }}>
          {/* Navigation Links */}
          {[...NAV, "reflection"].map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background:"transparent", border:"none", display:"flex",
              flexDirection:"column", alignItems:"center", gap:2, padding:"4px 6px",
              borderRadius:8, color:active===n ? tk.accent : `${tk.accent}66`,
              fontFamily:"'Space Mono',monospace", fontSize:7,
              letterSpacing:".05em", textTransform:"uppercase", transition:"color .2s"
            }}>
              <span style={{fontSize:16, lineHeight:1}}>
                {n==="home"?"⌂":n==="work"?"◈":n==="about"?"◉":n==="contact"?"✉":"✦"}
              </span>
              {n === "reflection" ? "reflect" : n}
            </button>
          ))}

          {/* ADDED: Mobile Theme Toggle */}
          <button onClick={() => setDark(d => !d)} style={{
            background:"transparent", border:"none", display:"flex",
            flexDirection:"column", alignItems:"center", gap:2, padding:"4px 6px",
            color:`${tk.accent}aa`, fontFamily:"'Space Mono',monospace", fontSize:7, textTransform:"uppercase"
          }}>
            <span style={{fontSize:16, lineHeight:1}}>{dark ? "☀" : "◐"}</span>
            mode
          </button>
        </nav>
      ) : (
        /* Tablet/Desktop — Floating Pill */
        <nav style={{
          position:"fixed", top:18, left:"50%", transform:"translateX(-50%)",
          zIndex:600, display:"flex", alignItems:"center", gap:2, padding:"5px 8px",
          borderRadius:999, background: dark ? "rgba(0, 16, 21, 0.84)" : "rgba(224, 247, 250, 0.84)",
          backdropFilter:"blur(32px)", border:`1px solid ${tk.accent}33`,
          boxShadow:"0 10px 40px rgba(0,0,0,0.5)", animation:"fadeUp .5s .1s both"
        }}>
          {[...NAV, "reflection"].map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: active===n ? `${tk.accent}22` : "transparent",
              border:"none", borderRadius:999, padding:isTablet?"6px 11px":"7px 14px",
              fontFamily:"'Space Mono',monospace", fontSize:isTablet?10:11,
              color: active===n ? tk.accent : dark ? "rgba(178, 235, 242, 0.45)" : "rgba(0, 47, 53, 0.45)",
              transition:"all .2s", textTransform:"uppercase", letterSpacing:".06em", cursor:"pointer"
            }}>
              {n === "reflection" ? "reflect" : n}
            </button>
          ))}
          <div style={{width:1, height:16, background:`${tk.accent}22`, margin:"0 3px"}}/>
          <button onClick={()=>setDark(d=>!d)} style={{background:"transparent", border:"none", borderRadius:999, padding:"7px 10px", color:tk.accent, cursor:"pointer"}}>{dark?"☀":"◐"}</button>
          <button onClick={()=>setShowMsg(true)} style={{background:"transparent", border:"none", borderRadius:999, padding:"7px 10px", color:tk.accent, cursor:"pointer"}}>✉</button>
        </nav>
      )}



{/* 1. Hero Section */}
<section ref={sectionRefs.home} data-section="home">
  {/* The Hero content (left & right) belongs HERE inside the tags */}
</section>

{/* 2. Work Section */}
<section ref={sectionRefs.work} data-section="work">
  {/* The Work mapping logic belongs HERE inside the tags */}
</section>
     
      {/* ══════════ HERO ══════════════════════════════════════════════ */}
      <section ref={sectionRefs.home} data-section="home" style={{
        minHeight:"100vh",
        display:"grid",
        gridTemplateColumns:isDesktop?"1fr 1fr":"1fr",
        alignItems:"center",
        padding:isMobile?"96px 20px 80px":isTablet?"100px 40px 60px":"0 72px",
        gap:isMobile?36:isTablet?48:64,
        background:tk.bg,position:"relative",overflow:"hidden",
      }}>
        <div style={{position:"absolute",right:-40,top:"50%",transform:"translateY(-50%)",fontFamily:"'Playfair Display',serif",fontSize:"38vw",color:dark?"rgba(200,245,60,0.03)":"rgba(26,18,8,0.04)",lineHeight:1,pointerEvents:"none",userSelect:"none",fontStyle:"italic",zIndex:0}}>R</div>
        <div style={{position:"absolute",bottom:-180,left:-180,width:500,height:500,borderRadius:"50%",background:tk.heroBlob1,filter:"blur(80px)",pointerEvents:"none",zIndex:0}}/>

        {/* LEFT */}
        <div style={{position:"relative",zIndex:1,animation:splashDone?"fadeUp .9s .1s both":"none"}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:18}}>
            <div style={{width:7,height:7,borderRadius:"50%",background:tk.accent}}/>
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:tk.muted,letterSpacing:".1em"}}>BSIT 2-2N · PUP STA. MESA · AY 2025–2026</span>
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(36px,6vw,76px)",lineHeight:1.02,color:tk.text,fontStyle:"italic",marginBottom:8}}>ren's</h1>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(36px,6vw,76px)",lineHeight:1.02,color:tk.text,marginBottom:22,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            oop portfolio
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:12,background:tk.accent,color:tk.accentText,borderRadius:6,padding:"3px 8px",fontStyle:"normal"}}>Java</span>
          </h1>
          <p style={{fontSize:14,lineHeight:1.85,color:tk.sub,maxWidth:360,marginBottom:28,fontStyle:"italic"}}>
            Hello — I'm Rene, a 2nd Year BSIT Student at PUP Sta. Mesa. This site documents my journey through Object-Oriented Programming.
          </p>
          <div style={{display:"flex",gap:10,marginBottom:32,flexWrap:"wrap"}}>
            <button onClick={()=>scrollTo("work")} style={{background:tk.accent,color:tk.accentText,border:"none",borderRadius:999,padding:"11px 22px",fontSize:12,fontFamily:"'Space Mono',monospace",fontWeight:700,letterSpacing:".04em",boxShadow:`0 6px 20px ${tk.accent}44`,transition:"opacity .2s"}}>VIEW WORK</button>
            <button onClick={()=>setShowMsg(true)} style={{background:"transparent",color:tk.text,border:`1.5px solid ${tk.border}`,borderRadius:999,padding:"11px 22px",fontSize:12,fontFamily:"'Space Mono',monospace",letterSpacing:".04em",transition:"all .2s"}}>MESSAGE ME</button>
          </div>
          <div>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>LANGUAGES</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
              {LANGS.map(l=>(
                <button key={l.name} onClick={()=>setActiveLang(l.name)} style={{background:activeLang===l.name?tk.accent:"transparent",color:activeLang===l.name?tk.accentText:tk.sub,border:`1.5px solid ${activeLang===l.name?tk.accent:tk.border}`,borderRadius:999,padding:"5px 12px",fontFamily:"'Space Mono',monospace",fontSize:10,display:"flex",alignItems:"center",gap:5,transition:"all .2s"}}>{l.icon} {l.name}</button>
              ))}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{flex:1,height:3,borderRadius:2,background:tk.statBg,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:2,background:langData.color,width:`${langData.level}%`,transition:"width .5s cubic-bezier(.16,1,.3,1)"}}/>
              </div>
              <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,minWidth:26}}>{langData.level}%</span>
            </div>
          </div>
        </div>

        {/* RIGHT — terminal card (tablet+desktop only) */}
        {!isMobile && (
          <div style={{position:"relative",zIndex:1,animation:splashDone?"fadeUp .9s .3s both":"none"}}>
            <div style={{background:tk.termBg,borderRadius:18,padding:"20px 22px 28px",boxShadow:`0 40px 100px rgba(0,0,0,0.55)`,animation:"float 6s ease-in-out infinite"}}>
              <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:16}}>
                <div style={{display:"flex",gap:5}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
                <div style={{flex:1,height:1,background:"rgba(200,245,60,0.06)"}}/>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:"rgba(200,245,60,0.2)"}}>Portfolio.java</span>
              </div>
              <Typewriter lines={CODE_LINES} started={typing}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginTop:12}}>
              {[["3","Seatworks"],["5","Midterm Acts"],["1","Midterms"],["1","Finals"]].map(([n,l])=>(
                <div key={l} style={{background:tk.statBg,borderRadius:10,padding:"12px 14px",border:`1px solid ${tk.border}`}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:tk.accent,lineHeight:1,fontStyle:"italic"}}>{n}</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:8,color:tk.muted,marginTop:4,letterSpacing:".07em"}}>{l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stat chips — mobile only */}
        {isMobile && (
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8}}>
            {[["3","Seatworks"],["5","Midterm Acts"],["1","Midterms"],["1","Finals"]].map(([n,l])=>(
              <div key={l} style={{background:tk.statBg,borderRadius:10,padding:"12px 14px",border:`1px solid ${tk.border}`}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:tk.accent,lineHeight:1,fontStyle:"italic"}}>{n}</div>
                <div style={{fontFamily:"'Space Mono',monospace",fontSize:8,color:tk.muted,marginTop:4,letterSpacing:".07em"}}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ══════════ WORK ════════════════════════════════════════════ */}
      <section ref={sectionRefs.work} data-section="work" style={{background:tk.panel,transition:"background .45s",paddingBottom:isMobile?80:0}}>
        <div style={{padding:isMobile?"56px 20px 28px":isTablet?"70px 40px 32px":"80px 72px 40px",borderBottom:`1px solid ${tk.border}`}}>
          <div style={{display:"flex",flexDirection:isMobile?"column":"row",alignItems:isMobile?"flex-start":"flex-end",justifyContent:"space-between",gap:12}}>
            <div>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:8}}>SELECTED WORK</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,52px)",color:tk.text,fontStyle:"italic",lineHeight:1.1}}>OOP Activities<span style={{color:tk.accent}}>.</span></h2>
            </div>
            {!isMobile && <p style={{fontSize:13,color:tk.sub,maxWidth:260,lineHeight:1.75,fontStyle:"italic",textAlign:"right"}}>Click any row to expand the description and source code.</p>}
          </div>
        </div>

        {WORKS.map(group=>(
          <section key={group.slug+group.part} style={{marginBottom:isMobile?48:80}}>
            <div style={{padding:workGroupHeaderPad,borderBottom:`1px solid ${tk.border}`,display:"flex",alignItems:"center",gap:14}}>
              <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.accent,fontWeight:700,letterSpacing:".1em"}}>{group.part}</span>
              <div style={{flex:1,height:1,background:tk.border}}/>
            </div>
            <div style={{padding:workGroupPad}}>
              {group.part==="FINALS"?(
                <div style={{padding:isMobile?"0 20px":0}}><FinalsTerminal tk={tk}/></div>
              ):(
                group.items.map((item,i)=><WorkItem key={item.id} item={item} idx={i} tk={tk} isMobile={isMobile}/>)
              )}
            </div>
          </section>
        ))}
      </section>

      {/* ══════════ ABOUT ══════════════════════════════════════════ */}
      <section ref={sectionRefs.about} data-section="about" style={{background:tk.panelAlt,transition:"background .45s",padding:secPad,paddingBottom:isMobile?"100px":undefined}}>
        <div style={{display:"grid",gridTemplateColumns:isDesktop?"1fr 1fr":"1fr",gap:isDesktop?60:36,alignItems:"start"}}>
          <div>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>ABOUT</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,3.8vw,50px)",color:tk.text,fontStyle:"italic",lineHeight:1.1,marginBottom:18}}>meet the author<span style={{color:tk.accent}}>.</span></h2>
            <p style={{fontSize:14,color:tk.sub,lineHeight:1.88,fontStyle:"italic",marginBottom:24,maxWidth:440}}>
              [ I am Ren, from BSIT 2-2N. This portfolio is a collection of my work and reflections in Object-Oriented Programming, documenting my journey through Java exercises, projects, and exams. Padayon. ]
            </p>
            {[["Name","Ren Camacho"],["Section","BSIT 2-2N"],["School","PUP Sta. Mesa"],["Height","5'11"],["Age","20"],["Fav Foods","Sinigang, Adobo, Tokwa, Veggie Balls"]].map(([k,v])=>(
              <div key={k} style={{display:"flex",alignItems:"baseline",gap:14,padding:"10px 0",borderBottom:`1px solid ${tk.border}`}}>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:tk.muted,letterSpacing:".1em",minWidth:68}}>{k.toUpperCase()}</span>
                <span style={{fontSize:14,color:tk.text,fontStyle:"italic"}}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{borderRadius:16,overflow:"hidden",background:dark?"linear-gradient(145deg,#1a2210,#263618)":"linear-gradient(145deg,#d8f080,#a8d830)",aspectRatio:"4/3",position:"relative",border:`1px solid ${tk.border}`}}>
              <img src="/renoop.jpg" style={{width:"100%",height:"100%",objectFit:"cover"}} alt="Ren"/>
              <div style={{position:"absolute",bottom:12,left:12,right:12,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(10px)",borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:"#fff",fontStyle:"italic"}}>Ren Camacho</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:8.5,color:"rgba(200,245,60,0.7)",marginTop:1}}>BSIT 2-2N · PUP</div>
                </div>
                <div style={{width:7,height:7,borderRadius:"50%",background:"#27C93F"}}/>
              </div>
            </div>
            <div style={{background:tk.panel,border:`1px solid ${tk.border}`,borderRadius:14,padding:"16px 18px",transition:"background .45s"}}>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:tk.muted,letterSpacing:".12em",marginBottom:12}}>SKILLS</div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {LANGS.map(l=>(
                  <div key={l.name} style={{display:"grid",gridTemplateColumns:"90px 1fr 28px",alignItems:"center",gap:10}}>
                    <span style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:tk.sub,display:"flex",alignItems:"center",gap:5}}>{l.icon} {l.name}</span>
                    <div style={{height:3,borderRadius:2,background:tk.statBg,overflow:"hidden"}}>
                      <div style={{height:"100%",borderRadius:2,background:l.color,width:`${l.level}%`,transition:"width .6s cubic-bezier(.16,1,.3,1)"}}/>
                    </div>
                    <span style={{fontFamily:"'Space Mono',monospace",fontSize:8.5,color:tk.muted,textAlign:"right"}}>{l.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT ════════════════════════════════════════ */}
      <section ref={sectionRefs.contact} data-section="contact" style={{background:tk.panel,transition:"background .45s",padding:secPad}}>
        <div style={{display:"grid",gridTemplateColumns:isDesktop?"1fr 1fr":"1fr",gap:isDesktop?60:36,alignItems:"start"}}>
          <div>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>CONTACT</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,3.8vw,50px)",color:tk.text,fontStyle:"italic",lineHeight:1.1,marginBottom:14}}>get in touch<span style={{color:tk.accent}}>.</span></h2>
            <p style={{fontSize:14,color:tk.sub,lineHeight:1.85,fontStyle:"italic",maxWidth:360,marginBottom:28}}>
              Open for connections, questions, or collaboration. Find me on any of these platforms.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:26}}>
              {CONTACTS.map(c=><ContactRow key={c.platform} c={c} tk={tk}/>)}
            </div>
            <button onClick={()=>setShowMsg(true)} style={{display:"flex",alignItems:"center",gap:8,background:tk.accent,color:tk.accentText,border:"none",borderRadius:12,padding:"12px 22px",fontSize:12,fontFamily:"'Space Mono',monospace",fontWeight:700,letterSpacing:".04em",boxShadow:`0 6px 24px ${tk.accent}44`,transition:"opacity .2s"}}>
              ✉ MESSAGE ME DIRECTLY
            </button>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{background:dark?DK.termBg:"#0F0C08",borderRadius:18,overflow:"hidden",boxShadow:"0 20px 50px rgba(0,0,0,0.4)",border:"1px solid rgba(200,245,60,0.06)"}}>
              <div style={{background:"rgba(200,245,60,0.04)",padding:"9px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(200,245,60,0.05)"}}>
                <div style={{display:"flex",gap:5}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:9,height:9,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:"rgba(200,245,60,0.25)"}}>ren.jpg</span>
                <div style={{width:40}}/>
              </div>
              <img src="/rencouncil.jpg" alt="Ren" style={{height:isMobile?150:200,width:"100%",objectFit:"cover",objectPosition:"55% 30%",display:"block"}}/>
              <div style={{padding:"9px 14px",background:"rgba(0,0,0,0.3)",display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:6,height:6,borderRadius:"50%",background:"#27C93F"}}/>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:8.5,color:"rgba(200,245,60,0.25)"}}>Ren Camacho · BSIT 2-2N · PUP Sta. Mesa</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,background:tk.panelAlt,border:`1px solid ${tk.border}`,borderRadius:12,padding:"14px 16px",transition:"background .45s"}}>
              {[["8","Total Work"],["2nd","Year"],["Java","Main Lang"]].map(([v,l])=>(
                <div key={l} style={{textAlign:"center"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:tk.accent,lineHeight:1,fontStyle:"italic"}}>{v}</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:8,color:tk.muted,marginTop:4,letterSpacing:".07em"}}>{l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ REFLECTION ════════════════════════════════════ */}
      <ReflectionSection tk={tk} sectionRef={sectionRefs.reflection} isMobile={isMobile} isTablet={isTablet}/>

      {/* ══════════ FOOTER ════════════════════════════════════════ */}
      <footer style={{background:tk.footBg,padding:isMobile?"32px 20px 96px":isTablet?"40px 40px":"48px 72px",display:"flex",flexDirection:isMobile?"column":"row",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:14,transition:"background .45s"}}>
        <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,3.5vw,48px)",color:tk.footText,letterSpacing:"-1px",fontStyle:"italic"}}>all roads lead to me</p>
        <div style={{textAlign:isMobile?"left":"right"}}>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:dark?"rgba(10,12,7,0.5)":"rgba(200,245,60,0.35)",letterSpacing:".08em"}}>OOP · AY 2025–2026</div>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:dark?"rgba(10,12,7,0.5)":"rgba(200,245,60,0.35)",marginTop:2,letterSpacing:".08em"}}>JAVA SE · PUP STA. MESA · ICT For The People</div>
        </div>

      </footer>
    </div>
  );
}