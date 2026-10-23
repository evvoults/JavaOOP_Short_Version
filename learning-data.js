window.LEARNING_UNITS = [
  {
    "id": "variables",
    "title": "Μεταβλητές και τύποι",
    "source": "methods",
    "group": "foundation",
    "model": "variables",
    "words": [
      "int",
      "double",
      "String"
    ],
    "clues": [
      "___ count = 3;",
      "______ price = 2.5;",
      "______ title = \"Java\";"
    ],
    "code": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        double price = 2.5;\n        double total = count * price;\n        System.out.println(total);\n    }\n}",
    "puzzle": [
      "int count = 3;",
      "double price = 2.5;",
      "double total = count * price;",
      "System.out.println(total);"
    ],
    "output": "7.5",
    "explanation": "Το γινόμενο 3 × 2.5 είναι 7.5. Ο τύπος double επιτρέπει δεκαδικές τιμές.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        double price = 2.5;\n        double total = count * price;\n        system.out.println(total)\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        double price = 2.5;\n        double total = count * price;\n        System.out.println(total);\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "7.5",
        "explanation": "Το γινόμενο 3 × 2.5 είναι 7.5. Ο τύπος double επιτρέπει δεκαδικές τιμές."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "public class Main {\n    public static void main(String[] args) {\n        String count = 3;\n        int price = 2.5;\n        double total = count + price;\n        System.out.println(total);\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        double price = 2.5;\n        double total = count * price;\n        System.out.println(total);\n    }\n}",
        "checks": [
          {
            "good": "int count = 3;",
            "bad": "String count = 3;",
            "hint": "Η ποσότητα είναι ακέραιος."
          },
          {
            "good": "double price = 2.5;",
            "bad": "int price = 2.5;",
            "hint": "Η τιμή έχει δεκαδικό μέρος."
          },
          {
            "good": "count * price",
            "bad": "count + price",
            "hint": "Το σύνολο είναι ποσότητα επί τιμή."
          }
        ],
        "expected": "7.5",
        "explanation": "Το γινόμενο 3 × 2.5 είναι 7.5. Ο τύπος double επιτρέπει δεκαδικές τιμές."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        double price = 2.5;\n        double total = count + price;\n        System.out.println(total);\n    }\n}",
        "solution": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        double price = 2.5;\n        double total = count * price;\n        System.out.println(total);\n    }\n}",
        "checks": [
          {
            "good": "count * price",
            "bad": "count + price",
            "hint": "Η πρόσθεση υπολογίζει 5.5, όχι το κόστος τριών προϊόντων."
          }
        ],
        "expected": "7.5",
        "explanation": "Το γινόμενο 3 × 2.5 είναι 7.5. Ο τύπος double επιτρέπει δεκαδικές τιμές."
      }
    ],
    "edges": [
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "01"
  },
  {
    "id": "methods",
    "title": "Μέθοδοι και ορίσματα",
    "source": "methods",
    "group": "foundation",
    "model": "method",
    "words": [
      "return",
      "void",
      "static"
    ],
    "clues": [
      "public int area() { ______ 12; }",
      "public ____ show() { }",
      "public ______ int twice(int x) { return x * 2; }"
    ],
    "code": "class Calculator {\n    public static int twice(int value) { return value * 2; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.twice(4);\n        System.out.println(result);\n    }\n}",
    "puzzle": [
      "int value = 4;",
      "int result = Calculator.twice(value);",
      "result = result + 1;",
      "System.out.println(result);"
    ],
    "output": "8",
    "explanation": "Η twice(4) επιστρέφει 8. Η return παραδίδει την τιμή· η println την εμφανίζει.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Calculator {\n    public static int twice(int value) { return value * 2; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.twice(4);\n        system.out.println(result)\n    }\n}",
        "solution": "class Calculator {\n    public static int twice(int value) { return value * 2; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.twice(4);\n        System.out.println(result);\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "8",
        "explanation": "Η twice(4) επιστρέφει 8. Η return παραδίδει την τιμή· η println την εμφανίζει."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Calculator {\n    public static void twice(int value) { return value + 2; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.twice(\"4\");\n        System.out.println(result);\n    }\n}",
        "solution": "class Calculator {\n    public static int twice(int value) { return value * 2; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.twice(4);\n        System.out.println(result);\n    }\n}",
        "checks": [
          {
            "good": "public static int twice",
            "bad": "public static void twice",
            "hint": "Η μέθοδος επιστρέφει ακέραιο."
          },
          {
            "good": "return value * 2;",
            "bad": "return value + 2;",
            "hint": "Το twice υπολογίζει το διπλάσιο."
          },
          {
            "good": "Calculator.twice(4)",
            "bad": "Calculator.twice(\"4\")",
            "hint": "Η παράμετρος χρειάζεται int, όχι String."
          }
        ],
        "expected": "8",
        "explanation": "Η twice(4) επιστρέφει 8. Η return παραδίδει την τιμή· η println την εμφανίζει."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Calculator {\n    public static int twice(int value) { return value + 2; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.twice(4);\n        System.out.println(result);\n    }\n}",
        "solution": "class Calculator {\n    public static int twice(int value) { return value * 2; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.twice(4);\n        System.out.println(result);\n    }\n}",
        "checks": [
          {
            "good": "return value * 2;",
            "bad": "return value + 2;",
            "hint": "Για value=4 η πρόσθεση δίνει 6. Δοκίμασε και value=3 πριν διορθώσεις."
          }
        ],
        "expected": "8",
        "explanation": "Η twice(4) επιστρέφει 8. Η return παραδίδει την τιμή· η println την εμφανίζει."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "02"
  },
  {
    "id": "objects",
    "title": "Κλάση και αντικείμενο",
    "source": "objects",
    "group": "foundation",
    "model": "objects",
    "words": [
      "class",
      "new",
      "println"
    ],
    "clues": [
      "_____ Car { }",
      "Car c = ___ Car(30);",
      "System.out._______(c);"
    ],
    "code": "class Car {\n    private int speed = 0;\n    public Car(int speed) { this.speed = speed; }\n    public int getSpeed() { return speed; }\n    public void setSpeed(int speed) { this.speed = speed; }\n    public String toString() { return \"speed=\" + speed; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car a = new Car(30);\n        Car b = new Car(70);\n        a.setSpeed(50);\n        System.out.println(a.getSpeed() + \",\" + b.getSpeed());\n    }\n}",
    "puzzle": [
      "Car a = new Car(30);",
      "a.setSpeed(50);",
      "int result = a.getSpeed();",
      "System.out.println(result);"
    ],
    "output": "50,70",
    "explanation": "Τα δύο new δημιουργούν δύο αντικείμενα. Η αλλαγή μέσω της a επηρεάζει μόνο το πρώτο.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Car {\n    private int speed = 0;\n    public Car(int speed) { this.speed = speed; }\n    public int getSpeed() { return speed; }\n    public void setSpeed(int speed) { this.speed = speed; }\n    public String toString() { return \"speed=\" + speed; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car a = new Car(30);\n        Car b = new Car(70);\n        a.setSpeed(50);\n        system.out.println(a.getSpeed() + \",\" + b.getSpeed())\n    }\n}",
        "solution": "class Car {\n    private int speed = 0;\n    public Car(int speed) { this.speed = speed; }\n    public int getSpeed() { return speed; }\n    public void setSpeed(int speed) { this.speed = speed; }\n    public String toString() { return \"speed=\" + speed; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car a = new Car(30);\n        Car b = new Car(70);\n        a.setSpeed(50);\n        System.out.println(a.getSpeed() + \",\" + b.getSpeed());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "50,70",
        "explanation": "Τα δύο new δημιουργούν δύο αντικείμενα. Η αλλαγή μέσω της a επηρεάζει μόνο το πρώτο."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Car {\n    private int speed = 0;\n    public Car(int speed) { this.speed = speed; }\n    public int getSpeed() { return speed; }\n    public void setSpeed(int speed) { this.speed = speed; }\n    public String toString() { return \"speed=\" + speed; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car a = Car(30);\n        Car b = new Car(70);\n        a.setSpeed(\"50\");\n        System.out.println(a.getSpeed() + \",\" + b.getSpeed);\n    }\n}",
        "solution": "class Car {\n    private int speed = 0;\n    public Car(int speed) { this.speed = speed; }\n    public int getSpeed() { return speed; }\n    public void setSpeed(int speed) { this.speed = speed; }\n    public String toString() { return \"speed=\" + speed; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car a = new Car(30);\n        Car b = new Car(70);\n        a.setSpeed(50);\n        System.out.println(a.getSpeed() + \",\" + b.getSpeed());\n    }\n}",
        "checks": [
          {
            "good": "Car a = new Car(30);",
            "bad": "Car a = Car(30);",
            "hint": "Χρειάζεται new για νέο αντικείμενο."
          },
          {
            "good": "a.setSpeed(50);",
            "bad": "a.setSpeed(\"50\");",
            "hint": "Η setSpeed δέχεται ακέραιο."
          },
          {
            "good": "b.getSpeed()",
            "bad": "b.getSpeed",
            "hint": "Η μέθοδος καλείται με παρενθέσεις."
          }
        ],
        "expected": "50,70",
        "explanation": "Τα δύο new δημιουργούν δύο αντικείμενα. Η αλλαγή μέσω της a επηρεάζει μόνο το πρώτο."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Car {\n    private int speed = 0;\n    public Car(int speed) { this.speed = speed; }\n    public int getSpeed() { return speed; }\n    public void setSpeed(int speed) { this.speed = speed; }\n    public String toString() { return \"speed=\" + speed; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car a = new Car(30);\n        Car b = a;\n        a.setSpeed(50);\n        System.out.println(a.getSpeed() + \",\" + b.getSpeed());\n    }\n}",
        "solution": "class Car {\n    private int speed = 0;\n    public Car(int speed) { this.speed = speed; }\n    public int getSpeed() { return speed; }\n    public void setSpeed(int speed) { this.speed = speed; }\n    public String toString() { return \"speed=\" + speed; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car a = new Car(30);\n        Car b = new Car(70);\n        a.setSpeed(50);\n        System.out.println(a.getSpeed() + \",\" + b.getSpeed());\n    }\n}",
        "checks": [
          {
            "good": "Car b = new Car(70);",
            "bad": "Car b = a;",
            "hint": "Η b πρέπει να αναφέρεται σε δεύτερο αντικείμενο με ταχύτητα 70."
          }
        ],
        "expected": "50,70",
        "explanation": "Τα δύο new δημιουργούν δύο αντικείμενα. Η αλλαγή μέσω της a επηρεάζει μόνο το πρώτο."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "03"
  },
  {
    "id": "constructors",
    "title": "Κατασκευαστές και αρχικοποίηση",
    "source": "constructors",
    "group": "foundation",
    "model": "constructor",
    "words": [
      "new",
      "public",
      "Book"
    ],
    "clues": [
      "Book b = ___ Book(120);",
      "______ Book(int pages) { this.pages = pages; }",
      "public ____ (int pages) { this.pages = pages; }"
    ],
    "code": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b.getPages());\n    }\n}",
    "puzzle": [
      "int pages = 120;",
      "Book b = new Book(pages);",
      "int result = b.getPages();",
      "System.out.println(result);"
    ],
    "output": "120",
    "explanation": "Ο κατασκευαστής παίρνει 120 και αρχικοποιεί το πεδίο pages του νέου Book.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        system.out.println(b.getPages())\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b.getPages());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "120",
        "explanation": "Ο κατασκευαστής παίρνει 120 και αρχικοποιεί το πεδίο pages του νέου Book."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Book {\n    private int pages = 0;\n    public void Book(int pages) { pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book();\n        System.out.println(b.getPages());\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b.getPages());\n    }\n}",
        "checks": [
          {
            "good": "public Book(int pages)",
            "bad": "public void Book(int pages)",
            "hint": "Ο κατασκευαστής δεν έχει τύπο επιστροφής."
          },
          {
            "good": "this.pages = pages;",
            "bad": "pages = pages;",
            "hint": "Πρέπει να ενημερωθεί το πεδίο του αντικειμένου."
          },
          {
            "good": "new Book(120)",
            "bad": "new Book()",
            "hint": "Η διαθέσιμη υπογραφή απαιτεί ένα int."
          }
        ],
        "expected": "120",
        "explanation": "Ο κατασκευαστής παίρνει 120 και αρχικοποιεί το πεδίο pages του νέου Book."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b.getPages());\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b.getPages());\n    }\n}",
        "checks": [
          {
            "good": "this.pages = pages;",
            "bad": "pages = pages;",
            "hint": "Η ανάθεση στην παράμετρο αφήνει το πεδίο pages στην αρχική τιμή 0."
          }
        ],
        "expected": "120",
        "explanation": "Ο κατασκευαστής παίρνει 120 και αρχικοποιεί το πεδίο pages του νέου Book."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "04"
  },
  {
    "id": "self",
    "title": "Το this και το τρέχον αντικείμενο",
    "source": "constructors",
    "group": "foundation",
    "model": "self",
    "words": [
      "this",
      "int",
      "void"
    ],
    "clues": [
      "____.battery = battery;",
      "private ___ battery;",
      "public ____ setBattery(int battery) { this.battery = battery; }"
    ],
    "code": "class Robot {\n    private int battery = 0;\n    public Robot(int battery) { this.battery = battery; }\n    public int getBattery() { return battery; }\n    public void setBattery(int battery) { this.battery = battery; }\n    public String toString() { return \"battery=\" + battery; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r = new Robot(40);\n        r.setBattery(80);\n        System.out.println(r.getBattery());\n    }\n}",
    "puzzle": [
      "Robot r = new Robot(40);",
      "r.setBattery(80);",
      "int result = r.getBattery();",
      "System.out.println(result);"
    ],
    "output": "80",
    "explanation": "Στη setBattery η this.battery είναι το πεδίο, ενώ η battery είναι η παράμετρος.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Robot {\n    private int battery = 0;\n    public Robot(int battery) { this.battery = battery; }\n    public int getBattery() { return battery; }\n    public void setBattery(int battery) { this.battery = battery; }\n    public String toString() { return \"battery=\" + battery; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r = new Robot(40);\n        r.setBattery(80);\n        system.out.println(r.getBattery())\n    }\n}",
        "solution": "class Robot {\n    private int battery = 0;\n    public Robot(int battery) { this.battery = battery; }\n    public int getBattery() { return battery; }\n    public void setBattery(int battery) { this.battery = battery; }\n    public String toString() { return \"battery=\" + battery; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r = new Robot(40);\n        r.setBattery(80);\n        System.out.println(r.getBattery());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "80",
        "explanation": "Στη setBattery η this.battery είναι το πεδίο, ενώ η battery είναι η παράμετρος."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Robot {\n    private int battery = 0;\n    public Robot(int battery) { this.battery = battery; }\n    public int getBattery() { return battery; }\n    public int setBattery(int battery) { battery = battery; }\n    public String toString() { return \"battery=\" + battery; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r = new Robot(40);\n        r.setBattery(\"80\");\n        System.out.println(r.getBattery());\n    }\n}",
        "solution": "class Robot {\n    private int battery = 0;\n    public Robot(int battery) { this.battery = battery; }\n    public int getBattery() { return battery; }\n    public void setBattery(int battery) { this.battery = battery; }\n    public String toString() { return \"battery=\" + battery; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r = new Robot(40);\n        r.setBattery(80);\n        System.out.println(r.getBattery());\n    }\n}",
        "checks": [
          {
            "good": "public void setBattery(int battery)",
            "bad": "public int setBattery(int battery)",
            "hint": "Η συγκεκριμένη μέθοδος αλλάζει πεδίο και δεν επιστρέφει τιμή."
          },
          {
            "good": "this.battery = battery; }\n    public String",
            "bad": "battery = battery; }\n    public String",
            "hint": "Ο setter πρέπει να αλλάζει το πεδίο."
          },
          {
            "good": "r.setBattery(80);",
            "bad": "r.setBattery(\"80\");",
            "hint": "Το όρισμα πρέπει να έχει τύπο int."
          }
        ],
        "expected": "80",
        "explanation": "Στη setBattery η this.battery είναι το πεδίο, ενώ η battery είναι η παράμετρος."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Robot {\n    private int battery = 0;\n    public Robot(int battery) { this.battery = battery; }\n    public int getBattery() { return battery; }\n    public void setBattery(int battery) { battery = battery; }\n    public String toString() { return \"battery=\" + battery; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r = new Robot(40);\n        r.setBattery(80);\n        System.out.println(r.getBattery());\n    }\n}",
        "solution": "class Robot {\n    private int battery = 0;\n    public Robot(int battery) { this.battery = battery; }\n    public int getBattery() { return battery; }\n    public void setBattery(int battery) { this.battery = battery; }\n    public String toString() { return \"battery=\" + battery; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r = new Robot(40);\n        r.setBattery(80);\n        System.out.println(r.getBattery());\n    }\n}",
        "checks": [
          {
            "good": "this.battery = battery; }\n    public String",
            "bad": "battery = battery; }\n    public String",
            "hint": "Η παράμετρος σκιάζει το πεδίο. Χωρίς this το πεδίο παραμένει 40."
          }
        ],
        "expected": "80",
        "explanation": "Στη setBattery η this.battery είναι το πεδίο, ενώ η battery είναι η παράμετρος."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "05"
  },
  {
    "id": "access",
    "title": "Πρόσβαση, getters και setters",
    "source": "access",
    "group": "foundation",
    "model": "access",
    "words": [
      "private",
      "public",
      "return"
    ],
    "clues": [
      "_______ int age;",
      "______ void setAge(int age) { this.age = age; }",
      "public int getAge() { ______ age; }"
    ],
    "code": "class Student {\n    private int age = 0;\n    public Student(int age) { this.age = age; }\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n    public String toString() { return \"age=\" + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(18);\n        s.setAge(20);\n        System.out.println(s.getAge());\n    }\n}",
    "puzzle": [
      "Student s = new Student(18);",
      "s.setAge(20);",
      "int result = s.getAge();",
      "System.out.println(result);"
    ],
    "output": "20",
    "explanation": "Το private age αλλάζει μέσω του public setter. Ο getter διαβάζει τη νέα τιμή.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Student {\n    private int age = 0;\n    public Student(int age) { this.age = age; }\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n    public String toString() { return \"age=\" + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(18);\n        s.setAge(20);\n        system.out.println(s.getAge())\n    }\n}",
        "solution": "class Student {\n    private int age = 0;\n    public Student(int age) { this.age = age; }\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n    public String toString() { return \"age=\" + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(18);\n        s.setAge(20);\n        System.out.println(s.getAge());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "20",
        "explanation": "Το private age αλλάζει μέσω του public setter. Ο getter διαβάζει τη νέα τιμή."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Student {\n    private int age = 0;\n    public Student(int age) { this.age = age; }\n    public void getAge() { System.out.println(age); }\n    public void setAge(int age) { this.age = age; }\n    public String toString() { return \"age=\" + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(18);\n        s.age = 20;\n        System.out.println(s.getAge());\n    }\n}",
        "solution": "class Student {\n    private int age = 0;\n    public Student(int age) { this.age = age; }\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n    public String toString() { return \"age=\" + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(18);\n        s.setAge(20);\n        System.out.println(s.getAge());\n    }\n}",
        "checks": [
          {
            "good": "s.setAge(20);",
            "bad": "s.age = 20;",
            "hint": "Η Main δεν έχει άμεση πρόσβαση σε private πεδίο."
          },
          {
            "good": "public int getAge()",
            "bad": "public void getAge()",
            "hint": "Ο getter επιστρέφει int."
          },
          {
            "good": "return age;",
            "bad": "System.out.println(age);",
            "hint": "Ο getter πρέπει να επιστρέφει, όχι μόνο να εμφανίζει."
          }
        ],
        "expected": "20",
        "explanation": "Το private age αλλάζει μέσω του public setter. Ο getter διαβάζει τη νέα τιμή."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Student {\n    private int age = 0;\n    public Student(int age) { this.age = age; }\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = 18; }\n    public String toString() { return \"age=\" + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(18);\n        s.setAge(20);\n        System.out.println(s.getAge());\n    }\n}",
        "solution": "class Student {\n    private int age = 0;\n    public Student(int age) { this.age = age; }\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n    public String toString() { return \"age=\" + age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(18);\n        s.setAge(20);\n        System.out.println(s.getAge());\n    }\n}",
        "checks": [
          {
            "good": "this.age = age; }\n    public String",
            "bad": "this.age = 18; }\n    public String",
            "hint": "Ο setter αγνοεί το όρισμα και αποθηκεύει πάντα 18."
          }
        ],
        "expected": "20",
        "explanation": "Το private age αλλάζει μέσω του public setter. Ο getter διαβάζει τη νέα τιμή."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "06"
  },
  {
    "id": "tostring",
    "title": "toString και @Override",
    "source": "tostring",
    "group": "foundation",
    "model": "tostring",
    "words": [
      "String",
      "toString",
      "Override"
    ],
    "clues": [
      "public ______ toString() { return \"Book\"; }",
      "System.out.println(b.________());",
      "@________"
    ],
    "code": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    @Override\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b);\n    }\n}",
    "puzzle": [
      "Book b = new Book(120);",
      "b.setPages(200);",
      "String description = b.toString();",
      "System.out.println(description);"
    ],
    "output": "pages=120",
    "explanation": "Η println(b) χρησιμοποιεί την toString() του Book. Η μέθοδος επιστρέφει την τρέχουσα τιμή pages.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    @Override\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        system.out.println(b)\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    @Override\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b);\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "pages=120",
        "explanation": "Η println(b) χρησιμοποιεί την toString() του Book. Η μέθοδος επιστρέφει την τρέχουσα τιμή pages."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    @Override\n    public void tostring() { System.out.println(\"pages=\" + pages); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(\"120\");\n        System.out.println(b);\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    @Override\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b);\n    }\n}",
        "checks": [
          {
            "good": "public String toString()",
            "bad": "public void tostring()",
            "hint": "Η υπογραφή είναι public String toString()."
          },
          {
            "good": "return \"pages=\" + pages;",
            "bad": "System.out.println(\"pages=\" + pages);",
            "hint": "Η toString επιστρέφει κείμενο."
          },
          {
            "good": "new Book(120)",
            "bad": "new Book(\"120\")",
            "hint": "Ο κατασκευαστής δέχεται int."
          }
        ],
        "expected": "pages=120",
        "explanation": "Η println(b) χρησιμοποιεί την toString() του Book. Η μέθοδος επιστρέφει την τρέχουσα τιμή pages."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    @Override\n    public String toString() { return \"pages=0\"; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b);\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    @Override\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book b = new Book(120);\n        System.out.println(b);\n    }\n}",
        "checks": [
          {
            "good": "return \"pages=\" + pages;",
            "bad": "return \"pages=0\";",
            "hint": "Η περιγραφή πρέπει να διαβάζει το πεδίο και να μην επιστρέφει σταθερό κείμενο."
          }
        ],
        "expected": "pages=120",
        "explanation": "Η println(b) χρησιμοποιεί την toString() του Book. Η μέθοδος επιστρέφει την τρέχουσα τιμή pages."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "07"
  },
  {
    "id": "references",
    "title": "Αναφορές και κοινά αντικείμενα",
    "source": "references",
    "group": "connections",
    "model": "references",
    "words": [
      "new",
      "null",
      "println"
    ],
    "clues": [
      "Point a = ___ Point(2, 3);",
      "Point empty = ____;",
      "System.out._______(a.getX());"
    ],
    "code": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = a;\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
    "puzzle": [
      "Point a = new Point(2, 3);",
      "Point b = a;",
      "b.setX(9);",
      "System.out.println(a.getX());"
    ],
    "output": "9,9",
    "explanation": "Η a και η b αναφέρονται στο ίδιο Point. Η αλλαγή μέσω της b είναι ορατή και μέσω της a.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = a;\n        b.setX(9);\n        system.out.println(a.getX() + \",\" + b.getX())\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = a;\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "9,9",
        "explanation": "Η a και η b αναφέρονται στο ίδιο Point. Η αλλαγή μέσω της b είναι ορατή και μέσω της a."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        int b = a;\n        b.setX(\"9\");\n        System.out.println(a.getX + \",\" + b.getX());\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = a;\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "checks": [
          {
            "good": "Point b = a;",
            "bad": "int b = a;",
            "hint": "Η αναφορά χρειάζεται τύπο Point."
          },
          {
            "good": "b.setX(9);",
            "bad": "b.setX(\"9\");",
            "hint": "Το setX δέχεται int."
          },
          {
            "good": "a.getX() + \",\" + b.getX()",
            "bad": "a.getX + \",\" + b.getX()",
            "hint": "Ο getter χρειάζεται παρενθέσεις."
          }
        ],
        "expected": "9,9",
        "explanation": "Η a και η b αναφέρονται στο ίδιο Point. Η αλλαγή μέσω της b είναι ορατή και μέσω της a."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(a);\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = a;\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "checks": [
          {
            "good": "Point b = a;",
            "bad": "Point b = new Point(a);",
            "hint": "Για κοινό αντικείμενο αντιγράφουμε την αναφορά, όχι τα πεδία σε νέο αντικείμενο."
          }
        ],
        "expected": "9,9",
        "explanation": "Η a και η b αναφέρονται στο ίδιο Point. Η αλλαγή μέσω της b είναι ορατή και μέσω της a."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "08"
  },
  {
    "id": "copies",
    "title": "Κατασκευαστής αντιγραφής",
    "source": "references",
    "group": "connections",
    "model": "copies",
    "words": [
      "new",
      "other",
      "this"
    ],
    "clues": [
      "Point b = ___ Point(a);",
      "this.x = _____.x;",
      "____.y = other.y;"
    ],
    "code": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(a);\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
    "puzzle": [
      "Point a = new Point(2, 3);",
      "Point b = new Point(a);",
      "b.setX(9);",
      "System.out.println(a.getX());"
    ],
    "output": "2,9",
    "explanation": "Ο κατασκευαστής αντιγραφής δημιουργεί δεύτερο Point με ίδιες αρχικές τιμές. Έπειτα οι τιμές αλλάζουν ανεξάρτητα.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(a);\n        b.setX(9);\n        system.out.println(a.getX() + \",\" + b.getX())\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(a);\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "2,9",
        "explanation": "Ο κατασκευαστής αντιγραφής δημιουργεί δεύτερο Point με ίδιες αρχικές τιμές. Έπειτα οι τιμές αλλάζουν ανεξάρτητα."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public void Point(Point other) { this.x = other.y; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = Point(a);\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(a);\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "checks": [
          {
            "good": "public Point(Point other)",
            "bad": "public void Point(Point other)",
            "hint": "Ο κατασκευαστής αντιγραφής δεν έχει void."
          },
          {
            "good": "this.x = other.x;",
            "bad": "this.x = other.y;",
            "hint": "Κάθε πεδίο αντιγράφεται από το αντίστοιχο πεδίο."
          },
          {
            "good": "new Point(a)",
            "bad": "Point(a)",
            "hint": "Η αντιγραφή δημιουργεί νέο αντικείμενο με new."
          }
        ],
        "expected": "2,9",
        "explanation": "Ο κατασκευαστής αντιγραφής δημιουργεί δεύτερο Point με ίδιες αρχικές τιμές. Έπειτα οι τιμές αλλάζουν ανεξάρτητα."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = a;\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(a);\n        b.setX(9);\n        System.out.println(a.getX() + \",\" + b.getX());\n    }\n}",
        "checks": [
          {
            "good": "Point b = new Point(a);",
            "bad": "Point b = a;",
            "hint": "Η απλή ανάθεση δεν δημιουργεί ανεξάρτητο αντίγραφο."
          }
        ],
        "expected": "2,9",
        "explanation": "Ο κατασκευαστής αντιγραφής δημιουργεί δεύτερο Point με ίδιες αρχικές τιμές. Έπειτα οι τιμές αλλάζουν ανεξάρτητα."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "09"
  },
  {
    "id": "composition",
    "title": "Σύνθεση: αντικείμενο ως πεδίο",
    "source": "composition",
    "group": "connections",
    "model": "composition",
    "words": [
      "Vector2D",
      "position",
      "Player"
    ],
    "clues": [
      "private ________ position;",
      "this.________ = new Vector2D(p);",
      "______ player = new Player(p);"
    ],
    "code": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        p.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
    "puzzle": [
      "Vector2D p = new Vector2D(2, 3);",
      "Player player = new Player(p);",
      "p.setX(9);",
      "System.out.println(player.getPosition().getX());"
    ],
    "output": "2.0",
    "explanation": "Ο Player κρατά δικό του αντίγραφο της θέσης. Η αλλαγή στο αρχικό p δεν αλλάζει τη θέση του Player.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        p.setX(9);\n        system.out.println(player.getPosition().getX())\n    }\n}",
        "solution": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        p.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "2.0",
        "explanation": "Ο Player κρατά δικό του αντίγραφο της θέσης. Η αλλαγή στο αρχικό p δεν αλλάζει τη θέση του Player."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private double position;\n    public Player(Vector2D p) { position = p; }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        p.setX(9);\n        System.out.println(player.getX());\n    }\n}",
        "solution": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        p.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "checks": [
          {
            "good": "private Vector2D position;",
            "bad": "private double position;",
            "hint": "Η θέση είναι αντικείμενο Vector2D."
          },
          {
            "good": "new Vector2D(p);",
            "bad": "p;",
            "hint": "Ο κατασκευαστής πρέπει να κρατήσει ανεξάρτητη θέση."
          },
          {
            "good": "player.getPosition().getX()",
            "bad": "player.getX()",
            "hint": "Το getX ανήκει στη Vector2D που επιστρέφεται από τη getPosition."
          }
        ],
        "expected": "2.0",
        "explanation": "Ο Player κρατά δικό του αντίγραφο της θέσης. Η αλλαγή στο αρχικό p δεν αλλάζει τη θέση του Player."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = p; }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        p.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "solution": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        p.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "checks": [
          {
            "good": "position = new Vector2D(p);",
            "bad": "position = p;",
            "hint": "Η ανάθεση μοιράζεται τη μεταβλητή θέση. Χρειάζεται αντίγραφο για την απαιτούμενη ανεξαρτησία."
          }
        ],
        "expected": "2.0",
        "explanation": "Ο Player κρατά δικό του αντίγραφο της θέσης. Η αλλαγή στο αρχικό p δεν αλλάζει τη θέση του Player."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "10"
  },
  {
    "id": "object-base",
    "title": "Η κλάση Object",
    "source": "equality",
    "group": "connections",
    "model": "object-base",
    "words": [
      "Object",
      "toString",
      "getClass"
    ],
    "clues": [
      "______ item = new Book(120);",
      "String text = item.________();",
      "Class<?> type = item.________();"
    ],
    "code": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Object item = new Book(120);\n        System.out.println(item.toString());\n    }\n}",
    "puzzle": [
      "Object item = new Book(120);",
      "String text = item.toString();",
      "String result = \"Item: \" + text;",
      "System.out.println(result);"
    ],
    "output": "pages=120",
    "explanation": "Η αναφορά έχει δηλωθεί Object, αλλά το πραγματικό αντικείμενο είναι Book. Χρησιμοποιείται η επαναορισμένη toString του Book.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Object item = new Book(120);\n        system.out.println(item.toString())\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Object item = new Book(120);\n        System.out.println(item.toString());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "pages=120",
        "explanation": "Η αναφορά έχει δηλωθεί Object, αλλά το πραγματικό αντικείμενο είναι Book. Χρησιμοποιείται η επαναορισμένη toString του Book."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    private String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        int item = new Book(120);\n        System.out.println(item.tostring());\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Object item = new Book(120);\n        System.out.println(item.toString());\n    }\n}",
        "checks": [
          {
            "good": "Object item = new Book(120);",
            "bad": "int item = new Book(120);",
            "hint": "Η αναφορά αντικειμένου δεν αποθηκεύεται σε int."
          },
          {
            "good": "item.toString()",
            "bad": "item.tostring()",
            "hint": "Η μέθοδος γράφεται toString με κεφαλαίο S."
          },
          {
            "good": "public String toString()",
            "bad": "private String toString()",
            "hint": "Η δημόσια μέθοδος της Object δεν επαναορίζεται με μικρότερη πρόσβαση."
          }
        ],
        "expected": "pages=120",
        "explanation": "Η αναφορά έχει δηλωθεί Object, αλλά το πραγματικό αντικείμενο είναι Book. Χρησιμοποιείται η επαναορισμένη toString του Book."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"Object\"; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Object item = new Book(120);\n        System.out.println(item.toString());\n    }\n}",
        "solution": "class Book {\n    private int pages = 0;\n    public Book(int pages) { this.pages = pages; }\n    public int getPages() { return pages; }\n    public void setPages(int pages) { this.pages = pages; }\n    public String toString() { return \"pages=\" + pages; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Object item = new Book(120);\n        System.out.println(item.toString());\n    }\n}",
        "checks": [
          {
            "good": "return \"pages=\" + pages;",
            "bad": "return \"Object\";",
            "hint": "Η δυναμική κλήση πρέπει να δίνει την περιγραφή του Book με τις τιμές του."
          }
        ],
        "expected": "pages=120",
        "explanation": "Η αναφορά έχει δηλωθεί Object, αλλά το πραγματικό αντικείμενο είναι Book. Χρησιμοποιείται η επαναορισμένη toString του Book."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "11"
  },
  {
    "id": "equality",
    "title": "Ισότητα με equals",
    "source": "equality",
    "group": "connections",
    "model": "equality",
    "words": [
      "equals",
      "boolean",
      "return"
    ],
    "clues": [
      "boolean same = a.______(b);",
      "public _______ equals(Object obj) { return true; }",
      "if (this == obj) ______ true;"
    ],
    "code": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n    }\n}",
    "puzzle": [
      "Point a = new Point(2, 3);",
      "Point b = new Point(2, 3);",
      "boolean same = a.equals(b);",
      "System.out.println(same);"
    ],
    "output": "true",
    "explanation": "Τα αντικείμενα είναι διαφορετικά, αλλά έχουν ίσα x και y. Η equals συγκρίνει τις τιμές σύμφωνα με τον ορισμό της Point.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        system.out.println(a.equals(b))\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "true",
        "explanation": "Τα αντικείμενα είναι διαφορετικά, αλλά έχουν ίσα x και y. Η equals συγκρίνει τις τιμές σύμφωνα με τον ορισμό της Point."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equal(Object obj) {\n        if (this != obj) return false;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n    }\n}",
        "checks": [
          {
            "good": "if (this == obj) return true;",
            "bad": "if (this != obj) return false;",
            "hint": "Τα διαφορετικά αντικείμενα μπορεί να έχουν ίσα πεδία."
          },
          {
            "good": "Point other = (Point) obj;",
            "bad": "Point other = obj;",
            "hint": "Μετά τον έλεγχο τύπου απαιτείται μετατροπή αναφοράς."
          },
          {
            "good": "public boolean equals(Object obj)",
            "bad": "public boolean equal(Object obj)",
            "hint": "Για επαναορισμό χρειάζεται η ακριβής υπογραφή equals(Object)."
          }
        ],
        "expected": "true",
        "explanation": "Τα αντικείμενα είναι διαφορετικά, αλλά έχουν ίσα x και y. Η equals συγκρίνει τις τιμές σύμφωνα με τον ορισμό της Point."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this != obj) return false;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n    }\n}",
        "checks": [
          {
            "good": "if (this == obj) return true;",
            "bad": "if (this != obj) return false;",
            "hint": "Η πρόωρη απόρριψη διαφορετικών αναφορών εμποδίζει τον έλεγχο πεδίων."
          }
        ],
        "expected": "true",
        "explanation": "Τα αντικείμενα είναι διαφορετικά, αλλά έχουν ίσα x και y. Η equals συγκρίνει τις τιμές σύμφωνα με τον ορισμό της Point."
      }
    ],
    "edges": [
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "12"
  },
  {
    "id": "hashcode",
    "title": "hashCode και ισότητα",
    "source": "hashcode",
    "group": "connections",
    "model": "hashcode",
    "words": [
      "hashCode",
      "int",
      "return"
    ],
    "clues": [
      "int hash = a.________();",
      "public ___ hashCode() { return 31 * x + y; }",
      "public int hashCode() { ______ 31 * x + y; }"
    ],
    "code": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n        System.out.println(a.hashCode() == b.hashCode());\n    }\n}",
    "puzzle": [
      "Point a = new Point(2, 3);",
      "Point b = new Point(2, 3);",
      "boolean sameHash = a.hashCode() == b.hashCode();",
      "System.out.println(sameHash);"
    ],
    "output": "true\ntrue",
    "explanation": "Αν a.equals(b) είναι true, τα hashCode πρέπει να είναι ίσα. Η αντίστροφη συνεπαγωγή δεν ισχύει: επιτρέπονται συγκρούσεις.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        system.out.println(a.equals(b));\n        System.out.println(a.hashCode() == b.hashCode())\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n        System.out.println(a.hashCode() == b.hashCode());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "true\ntrue",
        "explanation": "Αν a.equals(b) είναι true, τα hashCode πρέπει να είναι ίσα. Η αντίστροφη συνεπαγωγή δεν ισχύει: επιτρέπονται συγκρούσεις."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public String hashCode() { return 31 * x + \"y\"; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n        System.out.println(a.hashCode == b.hashCode());\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n        System.out.println(a.hashCode() == b.hashCode());\n    }\n}",
        "checks": [
          {
            "good": "public int hashCode()",
            "bad": "public String hashCode()",
            "hint": "Η hashCode επιστρέφει int."
          },
          {
            "good": "a.hashCode() == b.hashCode()",
            "bad": "a.hashCode == b.hashCode()",
            "hint": "Κάλεσε και τις δύο μεθόδους με παρενθέσεις."
          },
          {
            "good": "return 31 * x + y;",
            "bad": "return 31 * x + \"y\";",
            "hint": "Ο υπολογισμός πρέπει να είναι αριθμητικός."
          }
        ],
        "expected": "true\ntrue",
        "explanation": "Αν a.equals(b) είναι true, τα hashCode πρέπει να είναι ίσα. Η αντίστροφη συνεπαγωγή δεν ισχύει: επιτρέπονται συγκρούσεις."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return System.identityHashCode(this); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n        System.out.println(a.hashCode() == b.hashCode());\n    }\n}",
        "solution": "class Point {\n    private int x;\n    private int y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public Point(Point other) { this.x = other.x; this.y = other.y; }\n    public void setX(int x) { this.x = x; }\n    public int getX() { return x; }\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Point other = (Point) obj;\n        return x == other.x && y == other.y;\n    }\n    @Override\n    public int hashCode() { return 31 * x + y; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point a = new Point(2, 3);\n        Point b = new Point(2, 3);\n        System.out.println(a.equals(b));\n        System.out.println(a.hashCode() == b.hashCode());\n    }\n}",
        "checks": [
          {
            "good": "return 31 * x + y;",
            "bad": "return System.identityHashCode(this);",
            "hint": "Με equals που συγκρίνει πεδία, χρησιμοποίησε τα ίδια πεδία στη hashCode. Η ταυτότητα δεν εγγυάται τον απαιτούμενο κανόνα."
          }
        ],
        "expected": "true\ntrue",
        "explanation": "Αν a.equals(b) είναι true, τα hashCode πρέπει να είναι ίσα. Η αντίστροφη συνεπαγωγή δεν ισχύει: επιτρέπονται συγκρούσεις."
      }
    ],
    "edges": [
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "13"
  },
  {
    "id": "lab-student",
    "title": "Εργαστήριο Student",
    "source": "lab-student",
    "group": "labs",
    "model": "student",
    "words": [
      "semester",
      "getId",
      "setId"
    ],
    "clues": [
      "private int ________ = 1;",
      "int id = s._____();",
      "s._____(25);"
    ],
    "code": "class Student {\n    private int id = 0;\n    public Student(int id) { this.id = id; }\n    public int getId() { return id; }\n    public void setId(int id) { this.id = id; }\n    public String toString() { return \"id=\" + id; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(1);\n        Student b = new Student(2);\n        a.setId(25);\n        System.out.println(a.getId() + \",\" + b.getId());\n    }\n}",
    "puzzle": [
      "Student s = new Student(1);",
      "s.setId(25);",
      "int id = s.getId();",
      "System.out.println(id);"
    ],
    "output": "25,2",
    "explanation": "Κάθε Student έχει δικό του id. Ο setter αλλάζει μόνο τον πρώτο φοιτητή.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Student {\n    private int id = 0;\n    public Student(int id) { this.id = id; }\n    public int getId() { return id; }\n    public void setId(int id) { this.id = id; }\n    public String toString() { return \"id=\" + id; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(1);\n        Student b = new Student(2);\n        a.setId(25);\n        system.out.println(a.getId() + \",\" + b.getId())\n    }\n}",
        "solution": "class Student {\n    private int id = 0;\n    public Student(int id) { this.id = id; }\n    public int getId() { return id; }\n    public void setId(int id) { this.id = id; }\n    public String toString() { return \"id=\" + id; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(1);\n        Student b = new Student(2);\n        a.setId(25);\n        System.out.println(a.getId() + \",\" + b.getId());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "25,2",
        "explanation": "Κάθε Student έχει δικό του id. Ο setter αλλάζει μόνο τον πρώτο φοιτητή."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Student {\n    private int id = 0;\n    public Student(int id) { this.id = id; }\n    public int getId() { return 0; }\n    public void setId(int id) { this.id = id; }\n    public String toString() { return \"id=\" + id; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student a = Student(1);\n        Student b = new Student(2);\n        a.id = 25;\n        System.out.println(a.getId() + \",\" + b.getId());\n    }\n}",
        "solution": "class Student {\n    private int id = 0;\n    public Student(int id) { this.id = id; }\n    public int getId() { return id; }\n    public void setId(int id) { this.id = id; }\n    public String toString() { return \"id=\" + id; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(1);\n        Student b = new Student(2);\n        a.setId(25);\n        System.out.println(a.getId() + \",\" + b.getId());\n    }\n}",
        "checks": [
          {
            "good": "Student a = new Student(1);",
            "bad": "Student a = Student(1);",
            "hint": "Η δημιουργία απαιτεί new."
          },
          {
            "good": "a.setId(25);",
            "bad": "a.id = 25;",
            "hint": "Το private id αλλάζει μέσω setter."
          },
          {
            "good": "return id;",
            "bad": "return 0;",
            "hint": "Ο getter πρέπει να διαβάζει την τρέχουσα τιμή του πεδίου."
          }
        ],
        "expected": "25,2",
        "explanation": "Κάθε Student έχει δικό του id. Ο setter αλλάζει μόνο τον πρώτο φοιτητή."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Student {\n    private int id = 0;\n    public Student(int id) { this.id = id; }\n    public int getId() { return id; }\n    public void setId(int id) { this.id = id; }\n    public String toString() { return \"id=\" + id; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(1);\n        Student b = a;\n        a.setId(25);\n        System.out.println(a.getId() + \",\" + b.getId());\n    }\n}",
        "solution": "class Student {\n    private int id = 0;\n    public Student(int id) { this.id = id; }\n    public int getId() { return id; }\n    public void setId(int id) { this.id = id; }\n    public String toString() { return \"id=\" + id; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student a = new Student(1);\n        Student b = new Student(2);\n        a.setId(25);\n        System.out.println(a.getId() + \",\" + b.getId());\n    }\n}",
        "checks": [
          {
            "good": "Student b = new Student(2);",
            "bad": "Student b = a;",
            "hint": "Χρειάζονται δύο ανεξάρτητοι φοιτητές, όχι δύο ονόματα για τον ίδιο."
          }
        ],
        "expected": "25,2",
        "explanation": "Κάθε Student έχει δικό του id. Ο setter αλλάζει μόνο τον πρώτο φοιτητή."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "14"
  },
  {
    "id": "lab-employee",
    "title": "Εργαστήριο Employee",
    "source": "lab-employee",
    "group": "labs",
    "model": "employee",
    "words": [
      "salary",
      "double",
      "return"
    ],
    "clues": [
      "private double ______ = 0.0;",
      "public ______ getSalary() { return salary; }",
      "public double getSalary() { ______ salary; }"
    ],
    "code": "class Employee {\n    private double salary = 0.0;\n    public Employee(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public String toString() { return \"salary=\" + salary; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(0.0);\n        e.setSalary(1000.0);\n        System.out.println(e.getSalary());\n    }\n}",
    "puzzle": [
      "Employee e = new Employee(0.0);",
      "e.setSalary(1000.0);",
      "double salary = e.getSalary();",
      "System.out.println(salary);"
    ],
    "output": "1000.0",
    "explanation": "Ο μισθός ξεκινά από 0.0 και ο setter αποθηκεύει 1000.0. Το πλήρες εργαστήριο παρακάτω προσθέτει τα υπόλοιπα πεδία της εκφώνησης.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Employee {\n    private double salary = 0.0;\n    public Employee(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public String toString() { return \"salary=\" + salary; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(0.0);\n        e.setSalary(1000.0);\n        system.out.println(e.getSalary())\n    }\n}",
        "solution": "class Employee {\n    private double salary = 0.0;\n    public Employee(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public String toString() { return \"salary=\" + salary; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(0.0);\n        e.setSalary(1000.0);\n        System.out.println(e.getSalary());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "1000.0",
        "explanation": "Ο μισθός ξεκινά από 0.0 και ο setter αποθηκεύει 1000.0. Το πλήρες εργαστήριο παρακάτω προσθέτει τα υπόλοιπα πεδία της εκφώνησης."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Employee {\n    private int salary = 0.0;\n    public Employee(double salary) { this.salary = salary; }\n    public void getSalary() { return salary; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public String toString() { return \"salary=\" + salary; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(0.0);\n        e.setSalary(\"1000.0\");\n        System.out.println(e.getSalary());\n    }\n}",
        "solution": "class Employee {\n    private double salary = 0.0;\n    public Employee(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public String toString() { return \"salary=\" + salary; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(0.0);\n        e.setSalary(1000.0);\n        System.out.println(e.getSalary());\n    }\n}",
        "checks": [
          {
            "good": "private double salary",
            "bad": "private int salary",
            "hint": "Ο μισθός διατηρεί δεκαδικές τιμές."
          },
          {
            "good": "public double getSalary()",
            "bad": "public void getSalary()",
            "hint": "Ο getter επιστρέφει double."
          },
          {
            "good": "e.setSalary(1000.0);",
            "bad": "e.setSalary(\"1000.0\");",
            "hint": "Το όρισμα είναι αριθμός, όχι συμβολοσειρά."
          }
        ],
        "expected": "1000.0",
        "explanation": "Ο μισθός ξεκινά από 0.0 και ο setter αποθηκεύει 1000.0. Το πλήρες εργαστήριο παρακάτω προσθέτει τα υπόλοιπα πεδία της εκφώνησης."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Employee {\n    private double salary = 0.0;\n    public Employee(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public void setSalary(double salary) { salary = salary; }\n    public String toString() { return \"salary=\" + salary; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(0.0);\n        e.setSalary(1000.0);\n        System.out.println(e.getSalary());\n    }\n}",
        "solution": "class Employee {\n    private double salary = 0.0;\n    public Employee(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public String toString() { return \"salary=\" + salary; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(0.0);\n        e.setSalary(1000.0);\n        System.out.println(e.getSalary());\n    }\n}",
        "checks": [
          {
            "good": "this.salary = salary; }\n    public String",
            "bad": "salary = salary; }\n    public String",
            "hint": "Η ανάθεση στην παράμετρο δεν αλλάζει τον μισθό του υπαλλήλου."
          }
        ],
        "expected": "1000.0",
        "explanation": "Ο μισθός ξεκινά από 0.0 και ο setter αποθηκεύει 1000.0. Το πλήρες εργαστήριο παρακάτω προσθέτει τα υπόλοιπα πεδία της εκφώνησης."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "15"
  },
  {
    "id": "lab-player",
    "title": "Εργαστήριο Vector2D και Player",
    "source": "lab-player",
    "group": "labs",
    "model": "player",
    "words": [
      "position",
      "equals",
      "hashCode"
    ],
    "clues": [
      "private Vector2D ________;",
      "boolean same = player1.______(player2);",
      "int hash = player1.________();"
    ],
    "code": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        Vector2D copy = player.getPosition();\n        copy.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
    "puzzle": [
      "Player player = new Player(new Vector2D(2, 3));",
      "Vector2D copy = player.getPosition();",
      "copy.setX(9);",
      "System.out.println(player.getPosition().getX());"
    ],
    "output": "2.0",
    "explanation": "Η getPosition επιστρέφει αντίγραφο. Η αλλαγή στο αντίγραφο δεν μεταβάλλει τη θέση που φυλάσσεται στον Player.",
    "debug": [
      {
        "name": "1 · Σύνταξη",
        "goal": "Εντόπισε δύο συντακτικά λάθη στο πλήρες πρόγραμμα.",
        "draft": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        Vector2D copy = player.getPosition();\n        copy.setX(9);\n        system.out.println(player.getPosition().getX())\n    }\n}",
        "solution": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        Vector2D copy = player.getPosition();\n        copy.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "checks": [
          {
            "good": "System.out.println",
            "bad": "system.out.println",
            "hint": "Η κλάση System γράφεται με κεφαλαίο S."
          },
          {
            "good": ");\n    }",
            "bad": ")\n    }",
            "hint": "Η τελευταία εντολή της main χρειάζεται σύμβολο ; (semicolon)."
          }
        ],
        "expected": "2.0",
        "explanation": "Η getPosition επιστρέφει αντίγραφο. Η αλλαγή στο αντίγραφο δεν μεταβάλλει τη θέση που φυλάσσεται στον Player."
      },
      {
        "name": "2 · Δεδομένα και ροή",
        "goal": "Διόρθωσε τις δηλώσεις και τις εντολές ώστε να προκύψει η ζητούμενη έξοδος.",
        "draft": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player();\n        double copy = player.getPosition();\n        copy.setX(\"9\");\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "solution": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        Vector2D copy = player.getPosition();\n        copy.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "checks": [
          {
            "good": "Vector2D copy = player.getPosition();",
            "bad": "double copy = player.getPosition();",
            "hint": "Η επιστρεφόμενη τιμή είναι Vector2D."
          },
          {
            "good": "copy.setX(9);",
            "bad": "copy.setX(\"9\");",
            "hint": "Το όρισμα πρέπει να είναι αριθμητικό."
          },
          {
            "good": "new Player(p)",
            "bad": "new Player()",
            "hint": "Ο κατασκευαστής απαιτεί μια θέση."
          }
        ],
        "expected": "2.0",
        "explanation": "Η getPosition επιστρέφει αντίγραφο. Η αλλαγή στο αντίγραφο δεν μεταβάλλει τη θέση που φυλάσσεται στον Player."
      },
      {
        "name": "3 · Λογικό σφάλμα",
        "goal": "Το πρόγραμμα μπορεί να μεταγλωττίζεται, αλλά δεν υλοποιεί σωστά το ζητούμενο. Εξήγησε και διόρθωσε τη λογική του.",
        "draft": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return position; }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        Vector2D copy = player.getPosition();\n        copy.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "solution": "class Vector2D {\n    private double x;\n    private double y;\n    public Vector2D(double x, double y) { this.x = x; this.y = y; }\n    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }\n    public double getX() { return x; }\n    public void setX(double x) { this.x = x; }\n}\nclass Player {\n    private Vector2D position;\n    public Player(Vector2D p) { position = new Vector2D(p); }\n    public Vector2D getPosition() { return new Vector2D(position); }\n    public void setPosition(Vector2D position) { this.position = new Vector2D(position); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vector2D p = new Vector2D(2, 3);\n        Player player = new Player(p);\n        Vector2D copy = player.getPosition();\n        copy.setX(9);\n        System.out.println(player.getPosition().getX());\n    }\n}",
        "checks": [
          {
            "good": "return new Vector2D(position);",
            "bad": "return position;",
            "hint": "Ο getter εκθέτει το εσωτερικό μεταβλητό αντικείμενο. Χρειάζεται αντίγραφο για προστασία της θέσης."
          }
        ],
        "expected": "2.0",
        "explanation": "Η getPosition επιστρέφει αντίγραφο. Η αλλαγή στο αντίγραφο δεν μεταβάλλει τη θέση που φυλάσσεται στον Player."
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ],
    "number": "16"
  }
];
