import { useState, useEffect, useRef, useCallback } from "react";
import { FaJava, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiCisco, SiJavascript } from 'react-icons/si';


function FinalsTerminal({ tk }) {
  const [text, setText] = useState("");
  const fullText = ">> System.out.println(\"Status: Not yet initialized. Please wait for further updates...\");";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "#0d0d0d",
      borderRadius: 12,
      padding: "24px 30px",
      fontFamily: "'Space Mono', monospace",
      border: `1px solid ${tk.border}`,
      boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
      minHeight: 140,
      marginTop: 20
    }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 15 }}>
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f56" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#27c93f" }} />
      </div>
      
      <div style={{ color: "#c8f53c", fontSize: 13, lineHeight: 1.6, display: "flex", alignItems: "center" }}>
        {text}
        <span style={{ 
          display: "inline-block", width: 8, height: 16, 
          background: "#c8f53c", marginLeft: 6, animation: "blink 1s infinite" 
        }} />
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════ DATA ═══════════════════════════════ */
const WORKS = [
  {
    part: "SEATWORKS", slug: "SW",
    items: [
      { id:"SW·01", title:"Java Increment Operators", year:"2026",
        noDoc: true,
        desc:"This activity was a deep dive into the nuances of Java's increment operators. It highlighted the critical difference between pre-increment and post-increment, especially in complex expressions. I found it fascinating how the position of the increment operator can lead to different outcomes, reinforcing the importance of understanding operator precedence and evaluation order in Java programming.",
        tags:["Increment","Operators","Expressions"],
        code:`public class IncrementDemo {\n  public static void main(String[] args) {\n    int a = 5;\n    System.out.println(a++);   System.out.println(++a);  System.out.println(a);` },
      { id:"SW·02", title:"Scholarship Switch Case", year:"2026",
        noDoc: true,
        desc:"Implementing a switch-case structure for a scholarship evaluation system was an insightful exercise in control flow. It allowed me to practice handling multiple conditions in a clean and organized way. The activity reinforced the importance of break statements to prevent fall-through and highlighted how switch-case can enhance readability when dealing with discrete values, making it a valuable tool in my Java programming toolkit.",
        tags:["Switch","Loops","Control Flow"],
        code:`import java.util.Scanner;

public class ScholarshipSystem {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("=== PUP CCIS SCHOLARSHIP PORTAL ===");
        System.out.print("Enter Student Academic Rank (1-4): ");
        int rank = input.nextInt();

        String benefit;

        // The Switch Case logic
        switch (rank) {
            case 1:
                benefit = "FULL SCHOLAR: 100% Tuition Waiver + Monthly Stipend";
                break;
            case 2:
                benefit = "PARTIAL SCHOLAR: 75% Tuition Waiver";
                break;
            case 3:
                benefit = "SUPPORTED: 50% Tuition Waiver";
                break;
            case 4:
                benefit = "ACADEMIC AID: Book Allowance Only";
                break;
            default:
                benefit = "No scholarship assigned. Maintain a higher GPA next semester!";
                break;
        }

        System.out.println("\n[SYSTEM RESULT]");
        System.out.println("Status: " + benefit);
        
        input.close();
    }
}` },
      { id:"SW·03", title:"Student Age Analyzer", year:"2025", pdfName: "2N_Camacho_Rene_Jr_StudentAgeAnalyzer.pdf",
        desc:"In this activity, I implemented a modular approach to age classification. By separating the input logic from the classification logic into a distinct method, I practiced code reusability and readability. This structure is a precursor to Object-Oriented Programming, where methods encapsulate specific behaviors to keep the main program flow clean and efficient",
        tags:["Methods","Conditionals","User-defined"],
        code:`package Mid_Act_3;
import java.util.Scanner;

public class StudentAgeAnalyzer {

    public static String determineCategory(int age) {
        if (age <= 12) {
            return "Child";
        } else if (age <= 19) {
            return "Teenager";
        } else if (age <= 59) {
            return "Adult";
        } else {
            return "Senior Citizen";
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter Student Name: ");
        String studentName = input.nextLine();

        System.out.print("Enter Age: ");
        int age = input.nextInt();

        if (age < 0 || age > 100) {
            System.out.println("Invalid age");
            return;
        }

        String ageCategory = determineCategory(age);
        
        System.out.println("\n--- [SYSTEM RESULT] ---");
        System.out.println("Student: " + studentName);
        System.out.println("Age: " + age);
        System.out.println("Category: " + ageCategory);
    }
}`}
    ]
  },

  {
    part: "QUIZZES", slug: "QZ",
    items: [
      { id:"Q-01", title:"Midterm Quiz 1", year:"2026",
        desc:"I learned about the background of java, it's structure and the operators. Although I was not satisfied by my score but there is still room for improvement.",
        tags:["Intro to Java","Program Structure","Operators"],
        code:`public class LoopQuiz {\n  public static void main(String[] args) {\n    for(int i=1; i<=3; i++) {\n      for(int j=1; j<=i; j++) {\n        System.out.print("*");\n      }\n      System.out.println();\n    }\n  }\n}` },
      { id:"Q02", title:"Midterm Quiz 2", year:"2026",
        desc:"This examination was a comprehensive test of my ability to integrate Java's logic flow. While it confirmed my proficiency in basic syntax, it also revealed a need for more rigorous study of the interplay between Control Structures and Array manipulation. I found that while I understand the concepts individually, misinterpreting technical terms in complex problem sets occasionally led to logic errors. I am currently focused on mastering these intersections to ensure more efficient and bug-free code in my future BSIT projects",
        tags:["Operators","Control Structures","Methods & Arrays"],
        code:`class Car {\n  String brand;\n  int year;\n\n  Car(String brand, int year) {\n    this.brand = brand;\n    this.year = year;\n  }\n\n  void showInfo() {\n    System.out.println(brand + " (" + year + ")");\n  }\n}\n\npublic class Quiz2 {\n  public static void main(String[] args) {\n    Car myCar = new Car("Toyota", 2024);\n    myCar.showInfo();\n  }\n}` },
    ]
  },

  {
    part: "MIDTERMS ACTIVITIES", slug: "MT",
    items: [
      { id:"MT·01", title:"Variables", year:"2025", pdfName: "2-2N_Camacho_Rene Jr._CodeAnalysisActivity1.pdf",
        desc:"In this activity, I deepened my understanding of how Java manages memory through variable declaration and initialization. I focused on selecting the most efficient data types for each scenario, ensuring that I am not just storing data, but optimizing for performance. This exercise reinforced my ability to handle various data states, which I now realize is the first step toward managing complex object properties in OOP.",
        tags:["Classes","Objects","Constructors"],
        code:`public class Student {
    // Static variable: Stored in Method Area, shared by all instances
    static String school = "PUP Quezon City"; 
    
    // Instance variables: Stored in the Heap
    String name;
    int grade;

    public void display() {
        // Local variable: Stored in the Stack
        double gwa = 1.75; 
        System.out.println(name + " " + grade + " " + gwa + " " + school);
    }

    public static void main(String[] args) {
        // 1 & 2: Creating objects (Memory allocated on Heap, references on Stack)
        Student s1 = new Student();
        Student s2 = new Student();

        s1.name = "Ana";
        s1.grade = 90;

        // 3: Reference Assignment (Both s1 and s2 now point to the same object)
        s2 = s1; 

        // 4: Changing name through s2 also changes it for s1
        s2.name = "Mark";

        // 5: Manipulating the static variable (Affects the whole class)
        school = "PUP-STA. MESA"; 

        // Setting s1 to null terminates the reference, but s2 still points to the object
        s1 = null; 

        s2.display();
    }
}` },
      { id:"MT·02", title:"Operators", year:"2025", pdfName: "2_2N-Camacho_ReneJr_OperatorsActivity2.pdf",
        desc:"In this activity, I performed a comparative analysis of how Java handles operators compared to my previous experience with C. I was particularly observant of the nuances in increment and decrement operations, noting how prefix and postfix evaluations can alter the outcome of an expression. By mastering these foundational symbols, I am better equipped to handle complex logical conditions and mathematical computations as I advance toward Object-Oriented Programming.",
        tags:["Operators","Increment","Expressions"],
        code:`package camacho;

public class CombinedOperators {
    public static void main(String[] args) {
        
        System.out.println("--- Activity 1: Bitwise & Logical ---");
        int a = 12, b = 13;
        System.out.println("Logical &: " + ((a == b) & (a < b)));
        System.out.println("Bitwise |: " + (a | 0));
        System.out.println("Bitwise ^: " + (a ^ 1));
        System.out.println();

        System.out.println("--- Activity 2: Ternary Checks ---");
        int x = 10, y = 15;
        System.out.println("x > y ? " + (x > y ? true : false));
        System.out.println("y != 0 ? " + (y != 0 ? 15 : 0));
        System.out.println();

        System.out.println("--- Activity 3: Assignment Logic ---");
        int add = 80; add += 6;
        int sub = 110; sub -= 6;
        int mul = 10; mul *= 20;
        int div = 500; div /= 20;
        System.out.println("Addition: " + add);
        System.out.println("Multiplication: " + mul);
        System.out.println();

        System.out.println("--- Activity 4: Relational & Increment ---");
        int num1 = 10, num2 = 23, num3 = 43, num4 = 67, num5 = 11;
        System.out.println("Relational (67 > 10): " + (num4 > num1));
        System.out.println("Pre-decrement comparison: " + (--num5 == num1));
        
        num1 += num5;
        System.out.println("Updated num1: " + num1);
        
        num4 -= num5; num4 = num4 + 3;
        System.out.println("Final num4 calculation: " + num4);
    }
}` },
      { id:"MT·03", title:"ATM Transaction", year:"2025", pdfName: "2N_Camacho_Rene_Jr_Midterm Activity 3.pdf",
        desc:"In this activity, I implemented a secure transaction simulation to master nested control structures in Java. I focused on building a multi-layered validation system—checking for correct PIN entry before allowing access to withdrawal and deposit logic. This project sharpened my ability to manage 'edge cases,' such as preventing withdrawals that exceed the current balance. I now see how these logical safeguards are the first step toward building the robust, secure applications required in professional software development",
        tags:["OOP Design","Conditionals","Input"],
        code:`// Rene R. Camacho Jr. BSIT 2-2N Act 3
import java.util.Scanner;

public class Act3 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		double bal = 7000;
		int choice;
		
	do {
		System.out.println("====== MENU ======");
		System.out.println("1: Check Balance ");
		System.out.println("2: Deposit ");
		System.out.println("3: Withdraw "); 
		System.out.println("4: Transfer ");
		System.out.println("5: Exit ");
		
		choice = scanner.nextInt();
		
		switch(choice) {
		
		case 1:
			System.out.println("Balance: Php" + bal);
			break;
		
		case 2:
			System.out.println("Amount to deposit: ");
			double dep = scanner.nextDouble();	
			if (dep > 0) {
				bal+= dep;
			} else {
				System.out.println("Invalid Amount");
			}
			break;
	
		case 3:
			System.out.println("Amount to withdraw");
		    double wd = scanner.nextDouble();
		    if (wd <= 0) {
		        System.out.println("Invalid Amount");
		    } else if (wd > 2000) {
		        System.out.println("Exceeds maximum withdrawal of 2000");
		    } else if (wd > bal) {
		        System.out.println("Insufficient balance");
		    } else {
		        bal -= wd;
		        System.out.println("Withdrawal successful");
		    }
		    break;
			
		case 4:
			 System.out.print("Enter Receiver Account Number: ");
			    String accNum = scanner.next();
			    System.out.print("Enter Transfer Amount: ");
			    double amount = scanner.nextDouble();
			    
			    if (amount <= 0) {
			        System.out.println("Invalid amount.");
			    } else if (amount > bal) {
			        System.out.println("Insufficient balance.");
			    } else {
			        bal -= amount;
			        System.out.println("Transfer Successful");
			    }
			    break;
			
		case 5:
		    System.out.println("Thank you for using the ATM!");
		    break;
		    
		default:
			  System.out.println("Invalid choice.");
		}
	}   while(choice != 5);

		scanner.close();
	}
	
}` },
      { id:"MT·04", title:"Scholarship Evaluation", year:"2025", pdfName: "2N_Camacho_Rene_Jr_Midterm Activity 4.pdf",
        desc:"I implemented a switch-case structure to categorize academic performance and automate benefit distribution. By mapping specific GPA ranks to scholarship tiers, I practiced writing clean, non-redundant conditional logic. This exercise demonstrated my ability to translate institutional policies into efficient, scalable code.",
        tags:["Switch Cases","Input","Operations"],
        code:`// Rene R. Camacho Jr. BSIT 2-2N Act #4
import java.util.Scanner;

public class Act4 {

	 public static void main(String[] args) {
	        Scanner input = new Scanner(System.in);

	        System.out.print("Student Name: ");
	        String studName = input.nextLine();

	        System.out.print("GWA (General Weighted Average): ");
	        double gwa = input.nextDouble();

	        System.out.print("Entrance Exam Score (0-100): ");
	        double entExam = input.nextDouble();

	        System.out.print("Interview Score (0-100): ");
	        double interviewScore = input.nextDouble();
	        input.nextLine();

	        System.out.print("Document Verification (Verified / Not Verified): ");
	        String verification = input.nextLine();

	        double scholarshipScore = (entExam * 0.50) + (interviewScore * 0.50);

	        String scholarshipResult;
	        
	        if (verification.equals("Verified")) {
	            if (scholarshipScore >= 90) {
	                scholarshipResult = "Full Scholarship";
	            } else if (scholarshipScore >= 80) {
	                scholarshipResult = "Partial Scholarship";
	            } else if (scholarshipScore >= 70) {
	                scholarshipResult = "Book Allowance";
	            } else {
	                scholarshipResult = "Not Qualified";
	            }
	        } else {
	            scholarshipResult = "Not Qualified";
	        }

	        String scholarshipCategory;
	        int gwaType; 

	        if (gwa >= 1.00 && gwa <= 1.50) {
	            gwaType = 1;
	        } else if (gwa > 1.50 && gwa <= 2.00) {
	            gwaType = 2;
	        } else if (gwa > 2.00 && gwa <= 2.50) {
	            gwaType = 3;
	        } else {
	            gwaType = 0;
	        }

	        switch (gwaType) {
	            case 1:
	                scholarshipCategory = "Academic Excellence";
	                break;
	            case 2:
	                scholarshipCategory = "Merit Scholarship";
	                break;
	            case 3:
	                scholarshipCategory = "Financial Assistance";
	                break;
	            default:
	                scholarshipCategory = "No Scholarship";
	                break;
	        }

	        System.out.println("\nStudent Name: " + studName);
	        System.out.println("Scholarship Score: " + scholarshipScore);
	        System.out.println("Scholarship Result: " + scholarshipResult);
	        System.out.println("Scholarship Category: " + scholarshipCategory);

	        input.close();
	    }
	}` },
      { id:"MT·05", title:"Personal Expense Tracker", year:"2025", pdfName: "2N_Camacho_Rene_Jr_ExpenseTrackerCamacho_Rene.pdf",
        desc:"Tracking personal expenses with a simple console-based application.",
        tags:["Input","Output","Logic"],
        code:`// Name: Rene Jr. R. Camacho BSIT 2-2N
import java.util.Scanner;

public class ExpenseTrackerCamacho_Rene {

    public static void showTitle() {
        System.out.println("================================");
        System.out.println("    PERSONAL EXPENSE TRACKER   ");
        System.out.println("================================");
    }

    public static double computeTotal(double food, double transport, double others) {
        return food + transport + others;
    }

    public static String checkBudget(double total, double budget) {
        if (total > budget) {
            return "OVER BUDGET by PHP " + String.format("%.2f", total - budget);
        } else {
            return "WITHIN BUDGET! Remaining: PHP " + String.format("%.2f", budget - total);
        }
    }

    public static void showSummary(String name, double food, double transport,
                                   double others, double budget) {
        double total = computeTotal(food, transport, others);
        String status = checkBudget(total, budget);

        System.out.println("\n--- EXPENSE SUMMARY FOR " + name.toUpperCase() + " ---");
        System.out.printf("  Food Expenses:          PHP %.2f%n", food);
        System.out.printf("  Transportation Expenses: PHP %.2f%n", transport);
        System.out.printf("  Other Expenses:         PHP %.2f%n", others);
        System.out.println("  ------------------------------");
        System.out.printf("  TOTAL:                  PHP %.2f%n", total);
        System.out.printf("  BUDGET:                 PHP %.2f%n", budget);
        System.out.println("  STATUS: " + status);
        System.out.println("================================");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        showTitle();
        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Food Expenses (PHP): ");
        double food = sc.nextDouble();

        System.out.print("Transportation Expenses (PHP): ");
        double transport = sc.nextDouble();

        System.out.print("Other Expenses (PHP): ");
        double others = sc.nextDouble();

        System.out.print("Monthly Budget (PHP): ");
        double budget = sc.nextDouble();

        showSummary(name, food, transport, others, budget);

        sc.close();
    }
}` }
    ]
  },

  {
    part: "MIDTERMS", slug: "MT",
    items: [
      { id:"EXAM·MT", title:"Midterm Practical Exam", year:"2026", pdfName: "renmid.jpg",
        desc:"Due to unfortunate events, I was unable to attend the scheduled midterm examination, I did study the topics and I found them quite overwhelming because of the short amount of time, but despite that I learned many things from the midterm lessons. Hopefully my wish to take the exam will be granted. For now, I will just study harder to pass this course with flying colors.",
        tags:["Intro to Java","Program Structure","Variables and Data Handling", "Operators", "Control Flow", "Methods", "OOP Concepts", "I/O Handling", "Scanner", "BufferedReader", "Methods", "OOP Concepts"],
        code:`import java.util.Scanner;
import java.io.*;

class Student {
    String name;
    int id;
    double grade;

    Student(String name, int id, double grade) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }

    void displayStatus() {
        String result = (grade >= 75) ? "PASSED" : "FAILED";
        System.out.printf("Student: %s | ID: %d | Grade: %.2f | Status: %s%n", name, id, grade, result);
    }
}` },
    ]
  },

  {
    part: "FINALS", slug: "FN",
    items: [
      { id:"FN·01", title:"Simple Wallet System", year:"2025",
        desc:"Encapsulation in practice — private fields, public methods. Responsibility separation made the code feel professional.",
        tags:["Encapsulation","Private","Methods"],
        code:`public class Wallet {\n  private double balance;\n\n  public Wallet(double initial) { this.balance = initial; }\n\n  public void deposit(double amount) {\n    if (amount > 0) balance += amount;\n  }\n  public boolean withdraw(double amount) {\n    if (amount > balance) return false;\n    balance -= amount;\n    return true;\n  }\n  public double getBalance() { return balance; }\n\n  @Override\n  public String toString() {\n    return "Wallet[₱" + balance + "]";\n  }\n}` },
      { id:"FN·02", title:"Personal Expense Tracker", year:"2025",
        desc:"The most practical activity yet — tracking real data across categories and computing meaningful totals.",
        tags:["Data Org","Static","OOP Design"],
        code:`public class ExpenseTracker {\n  static double food, transport, other;\n\n  public static double total() {\n    return food + transport + other;\n  }\n  public static String status(double budget) {\n    double t = total();\n    return String.format(\n      "Spent: ₱%.2f / Budget: ₱%.2f → %s",\n      t, budget, t > budget ? "OVER" : "OK"\n    );\n  }\n  public static void main(String[] args) {\n    food = 450; transport = 120; other = 80;\n    System.out.println(status(600.00));\n  }\n}` },
    ]
  }
];

/* ═══════════════ OVERALL REFLECTION DATA ════════════════════════════ */
const REFLECTIONS = [
  {
    phase: "01",
    label: "Foundations",
    title: "Learning the Language",
    period: "Early Semester",
    icon: "☕",
    color: "#f89820",
    body: "Starting with Java felt like learning to think differently. The strict type system and verbose syntax were challenging at first, but I quickly appreciated how they forced precision. Seatworks on increment operators and switch-case structures built my confidence in understanding how Java evaluates expressions step by step.",
  },
  {
    phase: "02",
    label: "Control & Logic",
    title: "Adjusting And Adapting",
    period: "Midterms Period",
    icon: "⚙",
    color: "#f89820",
    body: "The midterm activities were a real turning point. Building the ATM Transaction system and Scholarship Evaluator taught me how to translate real-world rules into code. I learned that good software isn't just about making it work — it's about handling every edge case. My dedication to these labs helped me deeply understand the topics during this period.",
  },
  {
    phase: "03",
    label: "OOP Concepts",
    title: "Objects & Encapsulation",
    period: "Midterms Period",
    icon: "🧩",
    color: "#f89820",
    body: "The Deptals season has been tough for me, especially with the added pressure of midterms and serving as a student leader in the council. Despite these challenges, I remain a dedicated student; I will continue to fight and learn to secure my future in the tech field.",
  },
  {
    phase: "04",
    label: "Looking Forward",
    title: "Ad Astra Abyssosque",
    period: "Beyond",
    icon: "✦",
    color: "#f89820",
    body: "There is still so much to learn, and I am excited to dive into more complex OOP concepts like inheritance and polymorphism. My goal is to build projects that are not only functional but also well-designed and maintainable. I want to be the kind of developer who can take a messy problem and turn it into elegant code.",
  },
];

const CONTACTS = [
  { 
    platform: "Facebook", 
    handle: "Ren Camacho", 
    href: "https://www.facebook.com/renren.camacho.1", 
    color: "#1877F2",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  },
  { 
    platform: "LinkedIn", 
    handle: "ren-camacho-8a023b31b", 
    href: "https://www.linkedin.com/in/ren-camacho-8a023b31b/", 
    color: "#0A66C2",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0z"/></svg>
  },
  { 
    platform: "GitHub", 
    handle: "Renciiao", 
    href: "https://github.com/Renciiao", 
    color: "#6e40c9",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  },
];

const LANGS = [
  { name: "Java",         icon: <FaJava />,        level: 50, color: "#f89820" },
  { name: "React",        icon: <FaReact />,        level: 50, color: "#61dafb" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />,  level: 50, color: "#38bdf8" },
];

const CODE_LINES = [
  "public class Portfolio {",
  "  String author  = \"Ren Camacho\";",
  "  String school  = \"PUP Sta. Mesa\";",
  "  String section = \"BSIT 2-2N\";",
  "  String subject = \"OOP · 2nd Sem\";",
  "",
  "  public String greet() {",
  "    return \"Ad Astra Abyssosque",
  "  }",
  "}",
];

/* ═══════════════════════════════ THEME ══════════════════════════════ */
const LT = {
  // Warm cream tones — much easier on the eye
  bg:"#F2EAD8",           // warm parchment
  panel:"#F8F2E6",        // soft cream white
  panelAlt:"#EDE5D0",     // slightly darker cream
  text:"#1A1208",         // very dark warm brown
  sub:"#4A3C28",          // medium warm brown
  muted:"#8A7A60",        // warm tan
  accent:"#C8F53C",
  accentDark:"#94C000",
  accentText:"#0F0C08",
  border:"rgba(26,18,8,0.12)",
  termBg:"#0F0C08",
  heroBlob1:"rgba(200,245,60,0.18)", heroBlob2:"rgba(200,245,60,0.09)",
  tag:"rgba(200,245,60,0.20)", tagBorder:"rgba(148,192,0,0.35)", tagText:"#3a5a00",
  noteBg:"#FFFBEF", noteAccent:"#F5A623",
  cardHover:"rgba(200,245,60,0.07)",
  statBg:"rgba(26,18,8,0.07)",
  // Pill/nav: dark bg keeps it readable regardless of page bg
  pillBg:"rgba(15,12,8,0.82)",
  pillText:"rgba(200,245,60,0.55)",
  pillTextActive:"#C8F53C",
  inputBg:"#EDE5D0", inputBorder:"rgba(26,18,8,0.15)",
  sheetBg:"#F8F2E6",
  linkCard:"#F8F2E6", linkCardHov:"rgba(200,245,60,0.10)",
  footBg:"#1A1208", footText:"#C8F53C",
};
const DK = {
  bg:"#0A0C07", panel:"#111408", panelAlt:"#0D1009",
  text:"#E8F0C0", sub:"#8A9A60", muted:"#4A5430",
  accent:"#C8F53C", accentDark:"#A0D000",
  accentText:"#0A0C07",
  border:"rgba(200,245,60,0.10)",
  termBg:"#060707",
  heroBlob1:"rgba(200,245,60,0.08)", heroBlob2:"rgba(200,245,60,0.04)",
  tag:"rgba(200,245,60,0.08)", tagBorder:"rgba(200,245,60,0.18)", tagText:"#C8F53C",
  noteBg:"#111408", noteAccent:"#F5A623",
  cardHover:"rgba(200,245,60,0.04)",
  statBg:"rgba(200,245,60,0.06)",
  pillBg:"rgba(8,10,5,0.88)",
  pillText:"rgba(200,245,60,0.45)",
  pillTextActive:"#C8F53C",
  inputBg:"#161A0A", inputBorder:"rgba(200,245,60,0.12)",
  sheetBg:"#111408",
  linkCard:"#161A0A", linkCardHov:"rgba(200,245,60,0.06)",
  footBg:"#C8F53C", footText:"#0A0C07",
};

/* ═════════════════════════════ SPLASH ══════════════════════════════ */
function Splash({ done, onDone }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 2100);
    const t3 = setTimeout(onDone, 2900);
    return () => [t1,t2,t3].forEach(clearTimeout);
  }, [onDone]);
  if (done) return null;
  return (
    <div style={{
      position:"fixed",inset:0,zIndex:9999,
      background:"#C8F53C",
      display:"flex",alignItems:"center",justifyContent:"center",
      flexDirection:"column",gap:16,
      transition:"opacity 0.8s ease",
      opacity: phase === 2 ? 0 : 1,
      pointerEvents: phase === 2 ? "none" : "all",
    }}>
      <div style={{
        overflow:"hidden",
        transform: phase >= 1 ? "translateY(0)" : "translateY(100%)",
        transition:"transform 0.7s cubic-bezier(.16,1,.3,1)",
      }}>
        <p style={{
          fontFamily:"'Playfair Display',serif",
          fontSize:"clamp(32px,7vw,80px)",
          color:"#0F0C08", letterSpacing:"-2px",
          lineHeight:1, fontStyle:"italic",
        }}>
          all roads lead to me
        </p>
      </div>
      <div style={{
        overflow:"hidden",
        transform: phase >= 1 ? "translateY(0)" : "translateY(100%)",
        transition:"transform 0.7s 0.15s cubic-bezier(.16,1,.3,1)",
      }}>
        <p style={{
          fontFamily:"'Space Mono',monospace",
          fontSize:11, color:"rgba(15,12,8,0.45)",
          letterSpacing:".15em", textTransform:"uppercase",
        }}>Ren Camacho · BSIT 2-2N · PUP Sta. Mesa</p>
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
      if (c === 0) setRows(p => [...p.slice(0, i), ""]);
      if (now - last < 34) { raf = requestAnimationFrame(tick); return; }
      last = now;
      if (c < line.length) { setRows(p => { const n=[...p]; n[i]=line.slice(0,c+1); return n; }); ci.current++; }
      else { li.current++; ci.current = 0; pause = now + 220; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, lines]);

  const paint = (txt) => {
    if (txt === "") return <span>&nbsp;</span>;
    const kw = ["public","class","static","void","private","return","new","if","else","while","switch","case","break","boolean","double","int","String","true","false","this","@Override"];
    return txt.split(/(\s+|[{}().,;=+\-*/<>!&|@])/).map((p, i) => {
      if (kw.includes(p))        return <span key={i} style={{color:"#79b8ff"}}>{p}</span>;
      if (/^".*"$/.test(p))      return <span key={i} style={{color:"#f0a878"}}>{p}</span>;
      if (/^\/\//.test(p))       return <span key={i} style={{color:"#3a4a3a",fontStyle:"italic"}}>{p}</span>;
      if (/^\d+(\.\d+)?$/.test(p)) return <span key={i} style={{color:"#c8a0e8"}}>{p}</span>;
      if (["{"  ,"}","(",")"].includes(p)) return <span key={i} style={{color:"#C8F53C"}}>{p}</span>;
      return <span key={i} style={{color:"#a8c878"}}>{p}</span>;
    });
  };

  return (
    <div style={{display:"flex",flexDirection:"column",gap:2}}>
      {rows.map((txt, i) => (
        <div key={i} style={{
          fontFamily:"'Space Mono',monospace", fontSize:12, lineHeight:1.8,
          paddingLeft: (txt.match(/^ +/)?.[0]?.length ?? 0) * 5.5,
        }}>
          {paint(txt.trimStart())}
          {i === rows.length - 1 && (
            <span style={{display:"inline-block",width:7,height:13,background:"#C8F53C",marginLeft:2,verticalAlign:"middle",animation:"blink 1s step-end infinite"}}/>
          )}
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════ CODE BLOCK ═══════════════════════════════ */
function CodeBlock({ code, filename }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }); };
  const lines = code.split("\n");
  const kw = ["public","class","static","void","private","return","new","if","else","while","switch","case","break","boolean","double","int","String","true","false","this","@Override"];
  const paint = (txt) => txt.split(/(\s+|[{}().,;=+\-*/<>!&|@])/).map((p,i) => {
    if (kw.includes(p))           return <span key={i} style={{color:"#79b8ff"}}>{p}</span>;
    if (/^".*"$/.test(p))         return <span key={i} style={{color:"#f0a878"}}>{p}</span>;
    if (/^\/\//.test(p))          return <span key={i} style={{color:"#3a4a3a",fontStyle:"italic"}}>{p}</span>;
    if (/^\d+(\.\d+)?$/.test(p))  return <span key={i} style={{color:"#c8a0e8"}}>{p}</span>;
    if (["{","}","(",")"].includes(p)) return <span key={i} style={{color:"#C8F53C"}}>{p}</span>;
    return <span key={i} style={{color:"#9ab870"}}>{p}</span>;
  });
  return (
    <div style={{borderRadius:14,overflow:"hidden",background:"#080A06",boxShadow:"0 8px 40px rgba(0,0,0,0.5)",marginTop:18}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 18px",background:"#0f110c",borderBottom:"1px solid rgba(200,245,60,0.07)"}}>
        <div style={{display:"flex",gap:7}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:11,height:11,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:10.5,color:"rgba(200,245,60,0.3)"}}>{filename||"Main.java"}</span>
        <button onClick={copy} style={{background:"transparent",border:`1px solid ${copied?"#C8F53C":"rgba(200,245,60,0.15)"}`,borderRadius:6,color:copied?"#C8F53C":"rgba(200,245,60,0.35)",padding:"3px 11px",fontSize:9.5,cursor:"pointer",fontFamily:"'Space Mono',monospace",transition:"all .2s"}}>
          {copied ? "✓ copied" : "copy"}
        </button>
      </div>
      <div style={{overflowX:"auto",padding:"16px 0",maxHeight:280,overflowY:"auto"}}>
        <table style={{borderCollapse:"collapse",width:"100%"}}>
          <tbody>{lines.map((ln,i)=>(
            <tr key={i} onMouseEnter={e=>e.currentTarget.style.background="rgba(200,245,60,0.03)"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
              <td style={{width:44,textAlign:"right",padding:"0 16px",color:"rgba(200,245,60,0.15)",fontFamily:"'Space Mono',monospace",fontSize:10,userSelect:"none",verticalAlign:"top",lineHeight:1.8}}>{i+1}</td>
              <td style={{paddingRight:24,fontFamily:"'Space Mono',monospace",fontSize:11.5,lineHeight:1.8,whiteSpace:"pre",verticalAlign:"top"}}>{paint(ln)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

/* ════════════════════ NO-DOC TERMINAL ══════════════════════════════ */
// Terminal shown for seatworks that have no documentation (SW·01, SW·02)
function NoDocTerminal({ item, tk }) {
  const [lines, setLines] = useState([]);
  const sequence = [
    { text: `$ java -jar doc_viewer.jar --module "${item.id}"`, delay: 0, color: "#C8F53C" },
    { text: `> Initializing document retrieval...`, delay: 600, color: "rgba(200,245,60,0.55)" },
    { text: `> Scanning /OOP_Activities/ for ${item.id.replace("·","_")}.pdf`, delay: 1100, color: "rgba(200,245,60,0.55)" },
    { text: ``, delay: 1700, color: "transparent" },
    { text: `[ERROR 404] MODULE_NOT_FOUND`, delay: 2000, color: "#ff5f56" },
    { text: `> File: "${item.title}" — documentation not yet available.`, delay: 2400, color: "#ffbd2e" },
    { text: `> STATUS: Pending upload. Please check back later.`, delay: 2900, color: "#ffbd2e" },
    { text: ``, delay: 3400, color: "transparent" },
    { text: `$ _`, delay: 3700, color: "#C8F53C" },
  ];

  useEffect(() => {
    const timers = sequence.map((s, i) =>
      setTimeout(() => setLines(prev => [...prev, { text: s.text, color: s.color }]), s.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      height: 320,
      borderRadius: 14,
      overflow: "hidden",
      border: `1px solid ${tk.border}`,
      marginTop: 18,
      background: "#080A06",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Terminal header */}
      <div style={{
        background: "#0f110c",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(200,245,60,0.07)",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", gap: 7 }}>
          {["#FF5F56","#FFBD2E","#27C93F"].map(c =>
            <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "block" }} />
          )}
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "rgba(200,245,60,0.25)" }}>
          doc_viewer — bash
        </span>
        <div style={{ width: 60 }} />
      </div>

      {/* Terminal body */}
      <div style={{
        flex: 1,
        padding: "18px 22px",
        fontFamily: "'Space Mono',monospace",
        fontSize: 12,
        lineHeight: 2,
        overflowY: "auto",
      }}>
        {lines.map((ln, i) => (
          <div key={i} style={{ color: ln.color, minHeight: "1.5em" }}>
            {ln.text}
            {i === lines.length - 1 && ln.text.endsWith("_") && (
              <span style={{
                display: "inline-block", width: 8, height: 14,
                background: "#C8F53C", marginLeft: 2, verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════ WORK ACCORDION ════════════════════════════ */
function WorkItem({ item, idx, tk }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("code");

  return (
    <div style={{
      borderBottom: `1px solid ${tk.border}`,
      background: open ? tk.cardHover : "transparent",
      transition: "background .3s",
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: "grid", gridTemplateColumns: "64px 1fr auto 40px",
          alignItems: "center", gap: 20, padding: "22px 28px",
          cursor: "pointer",
        }}
      >
        <span style={{
          fontFamily: "'Space Mono',monospace", fontSize: 10,
          color: open ? tk.accent : tk.muted,
          letterSpacing: ".1em", transition: "color .2s",
        }}>{String(idx + 1).padStart(2, "0")}</span>
        <div>
          <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: tk.text, fontStyle: "italic", marginBottom: 4 }}>{item.title}</h4>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {item.tags.map(t => (
              <span key={t} style={{ background: tk.tag, color: tk.tagText, border: `1px solid ${tk.tagBorder}`, borderRadius: 999, padding: "1px 9px", fontSize: 10, fontFamily: "'Space Mono',monospace" }}>{t}</span>
            ))}
          </div>
        </div>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: tk.muted }}>{item.year}</span>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          border: `1.5px solid ${open ? tk.accent : tk.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: open ? tk.accent : tk.muted, fontSize: 14,
          transform: open ? "rotate(45deg)" : "none",
          transition: "all .25s",
        }}>+</div>
      </div>

      <div style={{
        maxHeight: open ? 900 : 0,
        overflow: "hidden",
        transition: "max-height 0.45s cubic-bezier(.16,1,.3,1)",
      }}>
        <div style={{ padding: "0 28px 28px" }}>
          <p style={{ fontSize: 14, color: tk.sub, lineHeight: 1.8, maxWidth: 600, marginBottom: 18 }}>{item.desc}</p>
          
          {/* TABS */}
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <button onClick={() => setView("code")} style={{ 
              background: view === "code" ? tk.accent : "transparent",
              color: view === "code" ? tk.accentText : tk.muted,
              border: `1px solid ${view === "code" ? tk.accent : tk.border}`,
              borderRadius: 8, padding: "6px 14px", fontFamily: "'Space Mono', monospace", fontSize: 10, cursor: "pointer"
            }}>SOURCE_CODE</button>
            <button onClick={() => setView("pdf")} style={{ 
              background: view === "pdf" ? tk.accent : "transparent",
              color: view === "pdf" ? tk.accentText : tk.muted,
              border: `1px solid ${view === "pdf" ? tk.accent : tk.border}`,
              borderRadius: 8, padding: "6px 14px", fontFamily: "'Space Mono', monospace", fontSize: 10, cursor: "pointer"
            }}>DOCUMENTATION.pdf</button>
          </div>

          {/* CONTENT AREA */}
          {view === "code" ? (
            <CodeBlock code={item.code} filename={`${item.id.replace("·", "_").toLowerCase()}.java`} />
          ) : (
            // noDoc flag → animated terminal; Quiz → static error terminal; pdf/image → embed
            item.noDoc ? (
              <NoDocTerminal item={item} tk={tk} />
            ) : item.id.startsWith("Q") ? (
              <div style={{ 
                height: 320, 
                borderRadius: 14, 
                overflow: "hidden", 
                border: `1px solid ${tk.border}`, 
                marginTop: 18,
                background: "#0a0a0a",
              }}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column", fontFamily: "'Space Mono', monospace" }}>
                  <div style={{ background: "#1a1a1a", padding: "8px 15px", display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ color: tk.accent, fontSize: 14, marginBottom: 8 }}>[SYSTEM_NOTIFICATION]</p>
                    <p style={{ color: "#ff5f56", fontSize: 18, fontWeight: "bold" }}>&gt; module not available</p>
                    <p style={{ color: tk.muted, fontSize: 12, marginTop: 4 }}>wait for further updates...</p>
                  </div>
                </div>
              </div>
            ) : item.pdfName && item.pdfName.toLowerCase().endsWith('.pdf') ? (
              <div style={{ height: 500, borderRadius: 14, overflow: "hidden", border: `1px solid ${tk.border}`, marginTop: 18 }}>
                <iframe
                  src={`/OOP_Activities/${item.pdfName}#toolbar=0`}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="Activity Document"
                />
              </div>
            ) : (
              <div style={{ height: 500, borderRadius: 14, overflow: "hidden", border: `1px solid ${tk.border}`, marginTop: 18 }}>
                <div style={{ width: "100%", height: "100%", overflowY: "auto", background: "#1a1a1a" }}>
                  <img 
                    src={`/OOP_Activities/renmid.jpg`}
                    style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                    alt="Documentation"
                  />
                </div>
              </div>
            )
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

  const send = () => {
    if (!name.trim() || !msg.trim()) return;
    setPhase("loading");
    setTimeout(() => { setPhase("done"); setTimeout(() => { onClose(); setName(""); setEmail(""); setMsg(""); setPhase("idle"); }, 2000); }, 900);
  };

  const inp = (val, set, ph, rows) => {
    const base = {
      background:tk.inputBg, border:`1px solid ${tk.inputBorder}`,
      borderRadius:12, padding:"12px 16px",
      fontSize:13.5, fontFamily:"'Instrument Serif',serif",
      color:tk.text, outline:"none", width:"100%",
      transition:"border-color .2s, box-shadow .2s",
      resize: rows ? "none" : undefined,
    };
    const shared = {
      value:val, onChange:e=>set(e.target.value), placeholder:ph,
      onFocus:e=>{e.target.style.borderColor=tk.accent; e.target.style.boxShadow=`0 0 0 3px ${tk.accent}22`;},
      onBlur:e=>{e.target.style.borderColor=tk.inputBorder; e.target.style.boxShadow="none";},
      style:base,
    };
    return rows ? <textarea {...shared} rows={rows} /> : <input {...shared} />;
  };

  return (
    <div onClick={e => { if(e.target===e.currentTarget) onClose(); }} style={{
      position:"fixed",inset:0,zIndex:900,
      display:"flex",alignItems:"flex-end",justifyContent:"center",
      background:"rgba(0,0,0,0.6)",backdropFilter:"blur(12px)",
      animation:"bgIn .25s ease both",
    }}>
      <div style={{
        width:"100%",maxWidth:520,
        background:tk.sheetBg, borderRadius:"28px 28px 0 0",
        boxShadow:"0 -12px 80px rgba(0,0,0,0.5)",
        border:`1px solid ${tk.border}`, borderBottom:"none",
        animation:"sheetUp .4s cubic-bezier(.16,1,.3,1) both",
        overflow:"hidden",
      }}>
        <div style={{display:"flex",justifyContent:"center",paddingTop:14}}>
          <div style={{width:38,height:4,borderRadius:2,background:tk.muted,opacity:.3}}/>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 22px 18px"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{
              width:44,height:44,borderRadius:"50%",
              background:`linear-gradient(135deg,${tk.accent},${tk.accentDark})`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:20, boxShadow:`0 4px 16px ${tk.accent}44`,
            }}>🎤</div>
            <div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,color:tk.text,fontStyle:"italic"}}>Ren Camacho</div>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:"#27C93F",marginTop:1}}>● Available</div>
            </div>
          </div>
          <button onClick={onClose} style={{background:tk.inputBg,border:"none",borderRadius:"50%",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:14,color:tk.muted}}>✕</button>
        </div>

        {phase === "done" ? (
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"28px 22px 48px",gap:14}}>
            <div style={{width:72,height:72,borderRadius:"50%",background:`${tk.accent}18`,border:`2px solid ${tk.accent}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32}}>✓</div>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:tk.text,fontStyle:"italic"}}>Sent!</p>
            <p style={{fontSize:13,color:tk.muted,fontFamily:"'Space Mono',monospace",textAlign:"center"}}>Ren will get back to you soon.</p>
          </div>
        ) : (
          <div style={{padding:"0 22px 36px",display:"flex",flexDirection:"column",gap:10}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {inp(name,setName,"Your name *")}
              {inp(email,setEmail,"Email (optional)")}
            </div>
            {inp(msg,setMsg,"Write a message… *",4)}
            <button onClick={send} disabled={!name.trim()||!msg.trim()||phase==="loading"} style={{
              background: (!name.trim()||!msg.trim()) ? tk.inputBg : tk.accent,
              color: (!name.trim()||!msg.trim()) ? tk.muted : tk.accentText,
              border:"none",borderRadius:14,padding:"14px",
              fontSize:15,fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontWeight:400,
              cursor:(!name.trim()||!msg.trim())?"not-allowed":"pointer",
              transition:"all .2s",
              display:"flex",alignItems:"center",justifyContent:"center",gap:8,
            }}>
              {phase==="loading" ? <>⟳ Sending…</> : "Send message →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════ CONTACT LINK ROW ═════════════════════ */
function ContactRow({ c, tk }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={c.href} target="_blank" rel="noopener noreferrer"
      className="link-row"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? tk.linkCardHov : tk.linkCard,
        border:`1px solid ${hov ? tk.accent : tk.border}`,
        transform: hov ? "translateX(6px)" : "none",
        boxShadow: hov ? `0 6px 28px ${c.color}18` : "none",
        display:"flex", alignItems:"center", gap:14, padding:"16px 20px",
        borderRadius:14, textDecoration:"none", transition:"all .22s", cursor:"none",
      }}
    >
      <div style={{
        width:44,height:44,borderRadius:12,
        background:`${c.color}18`,border:`1.5px solid ${c.color}30`,
        display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0,
      }}>{c.icon}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:15,color:tk.text,fontStyle:"italic"}}>{c.platform}</div>
        <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:tk.muted,marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.handle}</div>
      </div>
      <span style={{color:hov ? tk.accent : tk.muted,fontSize:18,transition:"all .2s"}}>{hov ? "→" : "↗"}</span>
    </a>
  );
}

/* ══════════════════════ OVERALL REFLECTION ═════════════════════════ */
function ReflectionSection({ tk, sectionRef }) {
  const [active, setActive] = useState(null);

  return (
    <section
      ref={sectionRef}
      data-section="reflection"
      style={{
        background: tk.bg,
        padding: "80px 72px",
        transition: "background .45s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative blob */}
      <div style={{
        position:"absolute", right:-200, bottom:-200, width:600, height:600,
        borderRadius:"50%", background:tk.heroBlob1, filter:"blur(100px)", pointerEvents:"none",
      }}/>

      <div style={{position:"relative",zIndex:1}}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>
            OVERALL REFLECTION
          </div>
          <h2 style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:"clamp(32px,4vw,52px)",
            color:tk.text, fontStyle:"italic", lineHeight:1.1, marginBottom:16,
          }}>
            the semester in review<span style={{color:tk.accent}}>.</span>
          </h2>
          <p style={{
            fontSize:15, color:tk.sub, lineHeight:1.85, fontStyle:"italic",
            maxWidth:560,
          }}>
            Four phases, one journey — from writing my first Hello World to building full OOP systems. Here's what this semester meant to me.
          </p>
        </div>

        {/* Phase cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 48 }}>
          {REFLECTIONS.map((r) => (
            <div
              key={r.phase}
              onClick={() => setActive(active === r.phase ? null : r.phase)}
              style={{
                background: active === r.phase
                  ? `linear-gradient(135deg, ${r.color}14, ${r.color}06)`
                  : tk.panel,
                border: `1px solid ${active === r.phase ? r.color + "55" : tk.border}`,
                borderRadius: 18,
                padding: "24px 26px",
                cursor: "pointer",
                transition: "all .3s cubic-bezier(.16,1,.3,1)",
                boxShadow: active === r.phase ? `0 12px 48px ${r.color}18` : "none",
                transform: active === r.phase ? "translateY(-2px)" : "none",
              }}
            >
              {/* Card top row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${r.color}18`, border: `1.5px solid ${r.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                  }}>{r.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: r.color, letterSpacing: ".12em", marginBottom: 3 }}>
                      PHASE {r.phase} · {r.label.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, color: tk.text, fontStyle: "italic", lineHeight: 1.2 }}>
                      {r.title}
                    </div>
                  </div>
                </div>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  border: `1.5px solid ${active === r.phase ? r.color : tk.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: active === r.phase ? r.color : tk.muted, fontSize: 13,
                  transform: active === r.phase ? "rotate(45deg)" : "none",
                  transition: "all .25s", flexShrink: 0,
                }}>+</div>
              </div>

              {/* Period badge */}
              <div style={{
                display: "inline-block",
                background: tk.statBg, borderRadius: 999,
                padding: "3px 11px",
                fontFamily: "'Space Mono',monospace", fontSize: 9.5,
                color: tk.muted, letterSpacing: ".08em", marginBottom: active === r.phase ? 14 : 0,
              }}>{r.period.toUpperCase()}</div>

              {/* Expandable body */}
              <div style={{
                maxHeight: active === r.phase ? 200 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(.16,1,.3,1)",
              }}>
                <p style={{
                  fontSize: 14, color: tk.sub, lineHeight: 1.85, fontStyle: "italic",
                  paddingTop: 4,
                }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement — full-width terminal card */}
        <div style={{
          background: "#080A06",
          borderRadius: 20,
          border: "1px solid rgba(200,245,60,0.10)",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
        }}>
          {/* mac-style header */}
          <div style={{
            background: "#0f110c",
            padding: "10px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            borderBottom: "1px solid rgba(200,245,60,0.07)",
          }}>
            <div style={{ display: "flex", gap: 7 }}>
              {["#FF5F56","#FFBD2E","#27C93F"].map(c =>
                <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "block" }} />
              )}
            </div>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "rgba(200,245,60,0.25)" }}>
              FinalReflection.java
            </span>
            <div style={{ width: 60 }} />
          </div>

          <div style={{ padding: "28px 32px 32px" }}>
            {/* code comment block */}
            <pre style={{
              fontFamily: "'Space Mono',monospace", fontSize: 12, lineHeight: 2,
              color: "rgba(200,245,60,0.35)", margin: 0, whiteSpace: "pre-wrap",
            }}>{`/**
 * @author   Rene R. Camacho Jr.
 * @section  BSIT 2-2N — PUP Sta. Mesa
 * @subject  Object-Oriented Programming
 * @semester AY 2025–2026, 2nd Semester
 */`}</pre>
            <div style={{ height: 1, background: "rgba(200,245,60,0.06)", margin: "20px 0" }} />
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, lineHeight: 2.1 }}>
              {[
                { kw: "public class", name: " FinalReflection", brace: " {", type: "class" },
              ].map((_, i) => null)}
              <div>
                <span style={{ color: "#79b8ff" }}>public class</span>
                <span style={{ color: "#C8F53C" }}> FinalReflection </span>
                <span style={{ color: "#C8F53C" }}>{"{"}</span>
              </div>
              <div style={{ paddingLeft: 24 }}>
                <span style={{ color: "#3a4a3a", fontStyle: "italic" }}>
                  // This portfolio is not just a grade. It is proof.
                </span>
              </div>
              <div style={{ paddingLeft: 24, marginTop: 8 }}>
                <span style={{ color: "#79b8ff" }}>static</span>
                <span style={{ color: "#9ab870" }}> String </span>
                <span style={{ color: "#f0a878" }}>message</span>
                <span style={{ color: "rgba(200,245,60,0.4)" }}> = </span>
                <span style={{ color: "#c8a0e8" }}>"Every bug fixed was a lesson. Every commit, a step forward."</span>
                <span style={{ color: "rgba(200,245,60,0.4)" }}>;</span>
              </div>
              <div style={{ paddingLeft: 24, marginTop: 4 }}>
                <span style={{ color: "#79b8ff" }}>static</span>
                <span style={{ color: "#9ab870" }}> String </span>
                <span style={{ color: "#f0a878" }}>motto</span>
                <span style={{ color: "rgba(200,245,60,0.4)" }}> = </span>
                <span style={{ color: "#c8a0e8" }}>"Padayon."</span>
                <span style={{ color: "rgba(200,245,60,0.4)" }}>;</span>
              </div>
              <div style={{ marginTop: 4 }}>
                <span style={{ color: "#C8F53C" }}>{"}"}</span>
              </div>
            </div>

            {/* human prose under the code */}
            <div style={{ marginTop: 24, padding: "20px 22px", background: "rgba(200,245,60,0.04)", borderRadius: 12, borderLeft: "3px solid rgba(200,245,60,0.3)" }}>
              <p style={{
                fontFamily: "'Instrument Serif',serif", fontStyle: "italic",
                fontSize: 15, color: "rgba(200,245,60,0.7)", lineHeight: 1.9,
              }}>
                "Looking back at this semester, I realize that Object-Oriented Programming taught me more than syntax — it taught me how to think systematically. Every class, every method, every exception handler mirrored a real-world decision. I started this course as someone who could write code. I leave it as someone who can design systems. The journey is not over. Padayon."
              </p>
              <div style={{ marginTop: 14, fontFamily: "'Space Mono',monospace", fontSize: 10, color: "rgba(200,245,60,0.35)", letterSpacing: ".1em" }}>
                — RENE R. CAMACHO JR. · BSIT 2-2N · PUP STA. MESA · AY 2025–2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════ MAIN ═════════════════════════════════ */
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

  const tk = dark ? DK : LT;

  const sectionRefs = {
    home:useRef(null), work:useRef(null),
    about:useRef(null), contact:useRef(null),
    reflection:useRef(null),
  };

  const onDone = useCallback(() => { setSplashDone(true); setTimeout(() => setTyping(true), 500); }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.dataset.section); }),
      { threshold: 0.2 }
    );
    Object.values(sectionRefs).forEach(r => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const move = e => { setCursor({x:e.clientX,y:e.clientY}); setCursorVisible(true); };
    const leave = () => setCursorVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseleave", leave); };
  }, []);

  const scrollTo = s => sectionRefs[s]?.current?.scrollIntoView({behavior:"smooth"});
  const langData = LANGS.find(l => l.name === activeLang) || LANGS[0];

  return (
    <div style={{fontFamily:"'Instrument Serif',serif",background:tk.bg,color:tk.text,overflowX:"hidden",minHeight:"100vh",transition:"background .45s,color .45s",cursor:"none"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
        @keyframes bgIn{from{opacity:0}to{opacity:1}}
        @keyframes sheetUp{from{transform:translateY(100%)}to{transform:none}}
        @keyframes cursorPulse{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.3)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

        .pill{
          position:fixed;top:18px;left:50%;transform:translateX(-50%);
          z-index:600;display:flex;align-items:center;gap:2px;padding:5px 8px;
          border-radius:999px;
          background:rgba(8,8,4,0.84);
          backdrop-filter:blur(32px) saturate(240%);
          -webkit-backdrop-filter:blur(32px) saturate(240%);
          border:1px solid rgba(200,245,60,0.14);
          box-shadow:0 0 0 1px rgba(0,0,0,0.6),0 10px 48px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.05);
          animation:fadeUp .5s .1s both;
        }
        .nb{
          background:transparent;border:none;border-radius:999px;padding:7px 16px;
          font-family:'Space Mono',monospace;font-size:11px;font-weight:400;letter-spacing:.06em;
          color:rgba(200,245,60,0.55);cursor:none;transition:background .2s,color .2s;
          text-transform:uppercase;
        }
        .nb:hover{background:rgba(200,245,60,0.12);color:rgba(200,245,60,1);}
        .nb.on{background:rgba(200,245,60,0.20);color:#C8F53C;}
        .nd{width:1px;height:16px;background:rgba(200,245,60,0.12);margin:0 4px;}
        .ni{
          background:rgba(200,245,60,0.08);border:none;border-radius:999px;
          padding:7px 11px;font-size:13px;cursor:none;
          color:rgba(200,245,60,0.7);transition:background .2s;line-height:1;
        }
        .ni:hover{background:rgba(200,245,60,0.18);color:#C8F53C;}

        input::placeholder,textarea::placeholder{color:rgba(80,60,30,0.35);}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-thumb{background:rgba(200,245,60,0.3);border-radius:99px;}
        ::-webkit-scrollbar-track{background:transparent;}

        .link-row{transition:all .22s;cursor:none;}
        .lang-btn{
          border-radius:999px;padding:6px 14px;border:none;
          font-family:'Space Mono',monospace;font-size:11px;
          cursor:none;transition:all .2s;
        }
      `}</style>

      {/* CUSTOM CURSOR */}
      <div style={{
        position:"fixed", left: cursor.x, top: cursor.y,
        width:12, height:12, borderRadius:"50%", background: tk.accent,
        transform:"translate(-50%,-50%)", pointerEvents:"none", zIndex:9998,
        opacity: cursorVisible ? 1 : 0, transition:"opacity .2s, background .4s", mixBlendMode:"difference",
      }}/>
      <div style={{
        position:"fixed", left: cursor.x, top: cursor.y,
        width:36, height:36, borderRadius:"50%", border:`1.5px solid ${tk.accent}`,
        transform:"translate(-50%,-50%)", pointerEvents:"none", zIndex:9997,
        opacity: cursorVisible ? 0.45 : 0, transition:"left .08s, top .08s, opacity .2s, border-color .4s",
      }}/>

      <Splash done={splashDone} onDone={onDone} />
      {showMsg && <MsgSheet tk={tk} onClose={() => setShowMsg(false)} />}

      {/* NAV */}
      <nav className="pill">
        {NAV.map(n => (
          <button key={n} className={`nb${active===n?" on":""}`} onClick={() => scrollTo(n)}>{n}</button>
        ))}
        <button className="nb" onClick={() => scrollTo("reflection")} style={{
          background: active==="reflection" ? "rgba(200,245,60,0.20)" : "transparent",
          color: active==="reflection" ? "#C8F53C" : "rgba(200,245,60,0.55)",
        }}>reflect</button>
        <div className="nd"/>
        <button className="ni" onClick={() => setDark(d=>!d)} title="Toggle theme">{dark ? "☀" : "◐"}</button>
        <button className="ni" onClick={() => setShowMsg(true)} title="Message">✉</button>
      </nav>

      {/* ══════════ HERO ══════════════════════════════════════════════ */}
      <section ref={sectionRefs.home} data-section="home" style={{
        minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr",
        alignItems:"center", padding:"0 72px", gap:64,
        background:tk.bg, position:"relative", overflow:"hidden",
      }}>
        <div style={{
          position:"absolute", right:-40, top:"50%", transform:"translateY(-50%)",
          fontFamily:"'Playfair Display',serif", fontSize:"38vw",
          color: dark ? "rgba(200,245,60,0.03)" : "rgba(26,18,8,0.04)",
          lineHeight:1, pointerEvents:"none", userSelect:"none", fontStyle:"italic", zIndex:0,
        }}>R</div>
        <div style={{position:"absolute",bottom:-180,left:-180,width:600,height:600,borderRadius:"50%",background:tk.heroBlob1,filter:"blur(80px)",pointerEvents:"none",zIndex:0}}/>
        <div style={{position:"absolute",top:80,right:300,width:300,height:300,borderRadius:"50%",background:tk.heroBlob2,filter:"blur(60px)",pointerEvents:"none",zIndex:0}}/>

        <div style={{position:"relative",zIndex:1,animation:splashDone?"fadeUp .9s .1s both":"none"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:24}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:tk.accent,animation:"cursorPulse 2s ease-in-out infinite"}}/>
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em"}}>BSIT 2-2N · PUP STA. MESA · AY 2025–2026</span>
          </div>

          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(42px,5.5vw,76px)",lineHeight:1.02,color:tk.text,fontStyle:"italic",marginBottom:10}}>ren's</h1>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(42px,5.5vw,76px)",lineHeight:1.02,color:tk.text,marginBottom:28,display:"flex",alignItems:"center",gap:14}}>
            oop portfolio
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:13,background:tk.accent,color:tk.accentText,borderRadius:6,padding:"3px 9px",fontStyle:"normal",verticalAlign:"middle"}}>Java</span>
          </h1>

          <p style={{fontSize:15,lineHeight:1.85,color:tk.sub,maxWidth:310,marginBottom:36,fontStyle:"italic"}}>
            Hello — I'm Rene, a 2nd Year BSIT Student at PUP Sta. Mesa. This site documents my journey through Object-Oriented Programming.
          </p>

          <div style={{display:"flex",gap:10,marginBottom:40}}>
            <button onClick={() => scrollTo("work")} style={{
              background:tk.accent,color:tk.accentText,border:"none",borderRadius:999,padding:"12px 28px",
              fontSize:13,fontFamily:"'Space Mono',monospace",fontWeight:700,cursor:"none",letterSpacing:".04em",
              transition:"opacity .2s, transform .15s",boxShadow:`0 6px 24px ${tk.accent}44`,
            }}
            onMouseEnter={e=>{e.currentTarget.style.opacity=".85";e.currentTarget.style.transform="translateY(-1px)";}}
            onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="none";}}>VIEW WORK</button>
            <button onClick={() => setShowMsg(true)} style={{
              background:"transparent",color:tk.text,border:`1.5px solid ${tk.border}`,borderRadius:999,
              padding:"12px 28px",fontSize:13,fontFamily:"'Space Mono',monospace",cursor:"none",letterSpacing:".04em",transition:"all .2s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=tk.accent;e.currentTarget.style.color=tk.accent;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=tk.border;e.currentTarget.style.color=tk.text;}}>MESSAGE ME</button>
          </div>

          <div>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:tk.muted,letterSpacing:".14em",marginBottom:12}}>LANGUAGES</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
              {LANGS.map(l => (
                <button key={l.name} className="lang-btn" onClick={() => setActiveLang(l.name)} style={{
                  background: activeLang===l.name ? tk.accent : "transparent",
                  color: activeLang===l.name ? tk.accentText : tk.sub,
                  border: `1.5px solid ${activeLang===l.name ? tk.accent : tk.border}`,
                  fontFamily:"'Space Mono',monospace",fontSize:10.5,
                  display:"flex",alignItems:"center",gap:6,
                }}>{l.icon} {l.name}</button>
              ))}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{flex:1,height:4,borderRadius:2,background:tk.statBg,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:2,background:langData.color,width:`${langData.level}%`,transition:"width .5s cubic-bezier(.16,1,.3,1)"}}/>
              </div>
              <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,minWidth:28}}>{langData.level}%</span>
            </div>
          </div>
        </div>

        <div style={{position:"relative",zIndex:1,animation:splashDone?"fadeUp .9s .3s both":"none"}}>
          <div style={{
            background:tk.termBg,borderRadius:20,padding:"22px 26px 32px",
            boxShadow:`0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(200,245,60,0.06)`,
            animation:"float 6s ease-in-out infinite",
          }}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:18}}>
              <div style={{display:"flex",gap:6}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:11,height:11,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
              <div style={{flex:1,height:1,background:"rgba(200,245,60,0.06)"}}/>
              <span style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:"rgba(200,245,60,0.2)",letterSpacing:".08em"}}>Portfolio.java</span>
            </div>
            <Typewriter lines={CODE_LINES} started={typing} />
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginTop:14}}>
            {[["3","Seatworks"],["5","Midterms Activities"],["1","Midterms"],["1","Finals"]].map(([n,l]) => (
              <div key={l} style={{
                background:tk.statBg,borderRadius:12,padding:"14px 16px",
                backdropFilter:"blur(4px)",border:`1px solid ${tk.border}`,transition:"background .4s",
              }}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:30,color:tk.accent,lineHeight:1,fontStyle:"italic"}}>{n}</div>
                <div style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:tk.muted,marginTop:5,letterSpacing:".08em"}}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WORK ════════════════════════════════════════════ */}
      <section ref={sectionRefs.work} data-section="work" style={{background:tk.panel,transition:"background .45s"}}>
        <div style={{padding:"80px 72px 40px",borderBottom:`1px solid ${tk.border}`}}>
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between"}}>
            <div>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>SELECTED WORK</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(32px,4vw,52px)",color:tk.text,fontStyle:"italic",lineHeight:1.1}}>
                OOP Activities<span style={{color:tk.accent}}>.</span>
              </h2>
            </div>
            <p style={{fontSize:14,color:tk.sub,maxWidth:320,lineHeight:1.75,fontStyle:"italic",textAlign:"right"}}>
              Click any row to expand the description and source code.
            </p>
          </div>
        </div>

        {WORKS.map(group => (
          <section key={group.slug + group.part} style={{ marginBottom: 100 }}>
            <div style={{ padding: "18px 72px", borderBottom: `1px solid ${tk.border}`, display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: tk.accent, fontWeight: 700, letterSpacing: ".1em" }}>{group.part}</span>
              <div style={{ flex: 1, height: 1, background: tk.border }} />
            </div>
            <div style={{ padding: "20px 72px" }}>
              {group.part === "FINALS" ? (
                <FinalsTerminal tk={tk} />
              ) : (
                group.items.map((item, i) => (
                  <WorkItem key={item.id} item={item} idx={i} tk={tk} />
                ))
              )}
            </div>
          </section>
        ))}
      </section>

      {/* ══════════ ABOUT ══════════════════════════════════════════ */}
      <section ref={sectionRefs.about} data-section="about" style={{background:tk.panelAlt,transition:"background .45s",padding:"80px 72px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"}}>
          <div>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>ABOUT</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(30px,3.8vw,50px)",color:tk.text,fontStyle:"italic",lineHeight:1.1,marginBottom:24}}>
              meet the author<span style={{color:tk.accent}}>.</span>
            </h2>
            <p style={{fontSize:15,color:tk.sub,lineHeight:1.88,fontStyle:"italic",marginBottom:32,maxWidth:440}}>
              [ I am Ren, from BSIT 2-2N. This portfolio is a collection of my work and reflections in Object-Oriented Programming, documenting my journey through Java exercises, projects, and exams. Padayon. ]
            </p>
            {[["Name","Ren Camacho"],["Section","BSIT 2-2N"],["School","PUP Sta. Mesa"],["Height","5'11"],["Age","20"],["Fav Foods","Sinigang, Adobo, Tokwa"]].map(([k,v]) => (
              <div key={k} style={{display:"flex",alignItems:"baseline",gap:16,padding:"10px 0",borderBottom:`1px solid ${tk.border}`}}>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".1em",minWidth:80}}>{k.toUpperCase()}</span>
                <span style={{fontSize:14,color:tk.text,fontStyle:"italic"}}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            <div style={{
              borderRadius:20, overflow:"hidden",
              background: dark ? "linear-gradient(145deg,#1a2210,#263618)" : "linear-gradient(145deg,#d8f080,#a8d830)",
              aspectRatio:"4/3",
              display:"flex",alignItems:"center",justifyContent:"center",
              position:"relative", border:`1px solid ${tk.border}`,
            }}>
              <img src="/renoop.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Ren" />
              <div style={{
                position:"absolute",bottom:16,left:16,right:16,
                background:"rgba(0,0,0,0.6)",backdropFilter:"blur(10px)",
                borderRadius:12,padding:"10px 14px",
                display:"flex",justifyContent:"space-between",alignItems:"center",
              }}>
                <div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,color:"#fff",fontStyle:"italic"}}>Ren Camacho</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:"rgba(200,245,60,0.7)",marginTop:2}}>BSIT 2-2N · PUP</div>
                </div>
                <div style={{width:8,height:8,borderRadius:"50%",background:"#27C93F"}}/>
              </div>
            </div>

            <div style={{background:tk.panel,border:`1px solid ${tk.border}`,borderRadius:16,padding:"20px 22px",transition:"background .45s"}}>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".12em",marginBottom:14}}>SKILLS</div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {LANGS.map(l => (
                  <div key={l.name} style={{display:"grid",gridTemplateColumns:"90px 1fr 32px",alignItems:"center",gap:10}}>
                    <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.sub,display:"flex",alignItems:"center",gap:5}}>{l.icon} {l.name}</span>
                    <div style={{height:3,borderRadius:2,background:tk.statBg,overflow:"hidden"}}>
                      <div style={{height:"100%",borderRadius:2,background:l.color,width:`${l.level}%`,transition:"width .6s cubic-bezier(.16,1,.3,1)"}}/>
                    </div>
                    <span style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:tk.muted,textAlign:"right"}}>{l.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT ════════════════════════════════════════ */}
      <section ref={sectionRefs.contact} data-section="contact" style={{background:tk.panel,transition:"background .45s",padding:"80px 72px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"}}>
          <div>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:tk.muted,letterSpacing:".14em",marginBottom:10}}>CONTACT</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(30px,3.8vw,50px)",color:tk.text,fontStyle:"italic",lineHeight:1.1,marginBottom:16}}>
              get in touch<span style={{color:tk.accent}}>.</span>
            </h2>
            <p style={{fontSize:15,color:tk.sub,lineHeight:1.85,fontStyle:"italic",maxWidth:360,marginBottom:36}}>
              Open for connections, questions, or collaboration. Find me on any of these platforms.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:32}}>
              {CONTACTS.map(c => (
                <ContactRow key={c.platform} c={c} tk={tk} />
              ))}
            </div>
            <button onClick={() => setShowMsg(true)} style={{
              display:"flex",alignItems:"center",gap:10,
              background:tk.accent,color:tk.accentText,border:"none",borderRadius:14,padding:"14px 28px",
              fontSize:13,fontFamily:"'Space Mono',monospace",fontWeight:700,cursor:"none",letterSpacing:".04em",
              boxShadow:`0 8px 32px ${tk.accent}44`,transition:"opacity .2s, transform .15s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.opacity=".88";e.currentTarget.style.transform="translateY(-1px)";}}
            onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="none";}}>
              ✉ MESSAGE ME DIRECTLY
            </button>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            <div style={{
              background: dark ? DK.termBg : "#0F0C08",
              borderRadius:24, overflow:"hidden",
              boxShadow:"0 30px 80px rgba(0,0,0,0.45)",
              border:"1px solid rgba(200,245,60,0.06)",
            }}>
              <div style={{background:"rgba(200,245,60,0.04)",padding:"11px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(200,245,60,0.05)"}}>
                <div style={{display:"flex",gap:6}}>{["#FF5F56","#FFBD2E","#27C93F"].map(c=><span key={c} style={{width:10,height:10,borderRadius:"50%",background:c,display:"block"}}/>)}</div>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:10,color:"rgba(200,245,60,0.25)"}}>ren.jpg</span>
                <div style={{width:46}}/>
              </div>
              <img 
                src="/rencouncil.jpg" 
                alt="Portfolio Display" 
                style={{ height: 220, width: "100%", objectFit: "cover", objectPosition: "55% 30%", display: "block" }} 
              />
              <div style={{padding:"12px 18px",background:"rgba(0,0,0,0.3)",display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:7,height:7,borderRadius:"50%",background:"#27C93F"}}/>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:9.5,color:"rgba(200,245,60,0.25)"}}>Ren Camacho · BSIT 2-2N · PUP Sta. Mesa</span>
              </div>
            </div>
            <div style={{
              display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,
              background:tk.panelAlt,border:`1px solid ${tk.border}`,
              borderRadius:16,padding:"18px 20px",transition:"background .45s",
            }}>
              {[["8","Total Work"],["2nd","Year"],["C and React ","Main Lang"]].map(([v,l]) => (
                <div key={l} style={{textAlign:"center"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:tk.accent,lineHeight:1,fontStyle:"italic"}}>{v}</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:tk.muted,marginTop:5,letterSpacing:".08em"}}>{l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ OVERALL REFLECTION ════════════════════════════ */}
      <ReflectionSection tk={tk} sectionRef={sectionRefs.reflection} />

      {/* ══════════ FOOTER ════════════════════════════════════════ */}
      <footer style={{background:tk.footBg,padding:"52px 72px",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background .45s"}}>
        <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,3.5vw,48px)",color:tk.footText,letterSpacing:"-1px",fontStyle:"italic"}}>
          all roads lead to me
        </p>
        <div style={{textAlign:"right"}}>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color: dark ? "rgba(10,12,7,0.5)" : "rgba(200,245,60,0.35)",letterSpacing:".08em"}}>OOP · AY 2025–2026</div>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,color: dark ? "rgba(10,12,7,0.5)" : "rgba(200,245,60,0.35)",marginTop:3,letterSpacing:".08em"}}>JAVA SE · PUP STA. MESA</div>
        </div>
      </footer>
    </div>
  );
}