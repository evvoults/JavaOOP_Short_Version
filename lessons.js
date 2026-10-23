/* All examples use Main.java for the online editor. */
const JAVA_IMPORTS = 'import java.util.Objects;\n\n';
const VECTOR_COMPLETE = `class Vector2D {
    private double x;
    private double y;

    public Vector2D(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public Vector2D(Vector2D other) {
        this.x = other.x;
        this.y = other.y;
    }

    public double getX() { return x; }
    public double getY() { return y; }
    public void setX(double x) { this.x = x; }
    public void setY(double y) { this.y = y; }

    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Vector2D other = (Vector2D) obj;
        return Double.compare(x, other.x) == 0
            && Double.compare(y, other.y) == 0;
    }

    @Override
    public int hashCode() {
        int result = Double.hashCode(x);
        result = 31 * result + Double.hashCode(y);
        return result;
    }
}`;
const PLAYER_COMPLETE = `class Player {
    private String name;
    private Vector2D position;

    public Player(String name, Vector2D position) {
        this.name = name;
        this.position = new Vector2D(position);
    }

    public Player(Player other) {
        this.name = other.name;
        this.position = new Vector2D(other.position);
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Vector2D getPosition() {
        return new Vector2D(position);
    }

    public void setPosition(Vector2D position) {
        this.position = new Vector2D(position);
    }

    @Override
    public String toString() {
        return "name=" + name + ", position=" + position;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Player other = (Player) obj;
        return Objects.equals(name, other.name)
            && Objects.equals(position, other.position);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, position);
    }
}`;
const STUDENT_COMPLETE = `class Student {
    private int id;
    private String firstName;
    private String lastName;
    private int semester;

    public Student(int id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.semester = 1;
    }

    public Student(int id, String firstName, String lastName, int semester) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.semester = semester;
    }

    public int getId() { return id; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public int getSemester() { return semester; }
    public void setId(int id) { this.id = id; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public void setSemester(int semester) { this.semester = semester; }

    @Override
    public String toString() {
        return "id=" + id + ", firstName=" + firstName
            + ", lastName=" + lastName + ", semester=" + semester;
    }
}`;
const EMPLOYEE_COMPLETE = `class Employee {
    private int id;
    private String firstName;
    private String lastName;
    private double salary;

    public Employee(int id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = 0.0;
    }

    public Employee(int id, String firstName, String lastName, double salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    public int getId() { return id; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public double getSalary() { return salary; }
    public void setId(int id) { this.id = id; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public void setSalary(double salary) { this.salary = salary; }

    @Override
    public String toString() {
        return "id=" + id + ", firstName=" + firstName
            + ", lastName=" + lastName + ", salary=" + salary + " ευρώ";
    }
}`;
const STUDENT_MAIN = `public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1, "Νίκος", "Σταύρου");
        Student s2 = new Student(2, "Μαρία", "Παππά", 3);
        System.out.println(s1);
        System.out.println(s2);

        s1.setId(11);
        s1.setFirstName("Νικόλας");
        s1.setLastName("Γεωργίου");
        s1.setSemester(2);
        s2.setId(22);
        s2.setFirstName("Ελένη");
        s2.setLastName("Νικολάου");
        s2.setSemester(4);

        System.out.println("\\nΜετά την αλλαγή:");
        System.out.println(s1);
        System.out.println(s2);
    }
}`;
const EMPLOYEE_MAIN = `public class Main {
    public static void main(String[] args) {
        Employee e1 = new Employee(1, "Μαρία", "Παππά");
        Employee e2 = new Employee(2, "Γιάννης", "Πέτρου", 1200.0);
        System.out.println(e1);
        System.out.println(e2);

        e1.setId(11);
        e1.setFirstName("Ελένη");
        e1.setLastName("Νικολάου");
        e1.setSalary(1300.0);
        e2.setId(22);
        e2.setFirstName("Κώστας");
        e2.setLastName("Γεωργίου");
        e2.setSalary(1500.0);

        System.out.println("\\nΜετά την αλλαγή:");
        System.out.println(e1);
        System.out.println(e2);
    }
}`;
const PLAYER_MAIN = `public class Main {
    public static void main(String[] args) {
        Vector2D v1 = new Vector2D(2, 3);
        Vector2D v2 = new Vector2D(v1);
        System.out.println("Vector v1: " + v1);
        System.out.println("Vector v2: " + v2);
        System.out.println("Vectors equal: " + v1.equals(v2));
        System.out.println("Same vector hash codes: "
            + (v1.hashCode() == v2.hashCode()));

        v2.setX(9);
        System.out.println("Original vector: " + v1);
        System.out.println("Changed vector copy: " + v2);
        System.out.println("Vectors equal after change: " + v1.equals(v2));

        Player p1 = new Player("Alex", v1);
        Player p2 = new Player(p1);
        System.out.println("Player p1: " + p1);
        System.out.println("Player p2: " + p2);
        System.out.println("Players equal: " + p1.equals(p2));
        System.out.println("Same player hash codes: "
            + (p1.hashCode() == p2.hashCode()));

        p1.setPosition(new Vector2D(5, 6));
        System.out.println("Changed player: " + p1);
        System.out.println("Unchanged player copy: " + p2);
        System.out.println("Players equal after change: " + p1.equals(p2));
    }
}`;

window.COURSE = [
{
 id:'methods',number:'01',group:'foundation',title:'Μεταβλητές και μέθοδοι',short:'Μεταβλητές και μέθοδοι',tag:'Αφετηρία',
 description:'Τύποι, παράμετροι και τιμές που επιστρέφονται. Διαβάζουμε μία γραμμή Java κάθε φορά.',
 objectives:['Ξεχωρίζω έναν τύπο από το όνομα της μεταβλητής.','Καταλαβαίνω τι δίνω σε μια μέθοδο και τι παίρνω πίσω.','Διακρίνω το return από την εμφάνιση στην οθόνη.'],
 theory:[
  {title:'Ο τύπος περιγράφει τι αποθηκεύουμε',text:'Στη δήλωση <code>int semester = 1;</code>, το <code>int</code> είναι ο τύπος, το <code>semester</code> το όνομα και το <code>1</code> η αρχική τιμή. Το <code>double</code> χρησιμοποιείται για αριθμούς κινητής υποδιαστολής, το <code>boolean</code> για <code>true</code> ή <code>false</code> και το <code>String</code> για κείμενο.'},
  {title:'Μια μέθοδος δέχεται παραμέτρους',text:'Η <code>nextSemester(int current)</code> δέχεται έναν ακέραιο. Το <code>current</code> είναι η παράμετρος μέσα στη μέθοδο. Στην κλήση <code>nextSemester(2)</code>, το <code>2</code> είναι το όρισμα που της δίνουμε. Εδώ χρησιμοποιούμε <code>static</code> για να καλούμε τη μέθοδο απευθείας από τη <code>main</code>. Στα επόμενα μαθήματα θα καλούμε μεθόδους συγκεκριμένων αντικειμένων.'},
  {title:'Το return παραδίδει μια τιμή στον κώδικα που κάλεσε τη μέθοδο',text:'Η <code>return current + 1;</code> επιστρέφει έναν ακέραιο και τερματίζει αυτή την κλήση της μεθόδου. Δεν εμφανίζει κάτι στην οθόνη. Η <code>System.out.println(...)</code> εμφανίζει μια τιμή. Αν μια μέθοδος δηλώνεται <code>void</code>, δεν επιστρέφει τιμή· μπορεί όμως να εμφανίζει κάτι ή να αλλάζει δεδομένα.'},
  {title:'int και Integer είναι διαφορετικοί τύποι',text:'Τα <code>int</code> και <code>double</code> είναι πρωτογενείς τύποι. Τα <code>Integer</code> και <code>Double</code> είναι κλάσεις περιβλήματος. Το <code>String</code> είναι επίσης κλάση. Στα παραδείγματα των ασκήσεων τα πεδία <code>id</code>, <code>semester</code> και <code>salary</code> έχουν τους πρωτογενείς τύπους <code>int</code> και <code>double</code>.'}
 ],
 code:`public class Main {
    public static int nextSemester(int current) {
        return current + 1;
    }

    public static void main(String[] args) {
        int semester = 2;
        int next = nextSemester(semester);
        System.out.println("Current: " + semester);
        System.out.println("Next: " + next);
    }
}`,
 expected:'Current: 2\nNext: 3',
 notes:[['int next = nextSemester(semester);','Η τιμή 2 περνά στη μέθοδο. Η επιστρεφόμενη τιμή 3 αποθηκεύεται στη next.'],['semester','Η αρχική μεταβλητή παραμένει 2. Η μέθοδος υπολογίζει μια νέα τιμή από το αντίγραφο της τιμής που έλαβε.']],
 predict:'Αν αλλάξεις το αρχικό semester σε 5, τι θα εμφανίσουν οι δύο println;',answer:'Current: 5 και Next: 6. Η nextSemester δεν αλλάζει το semester μέσα στη main.',
 task:'Συμπλήρωσε τη μέθοδο <code>annualSalary(double monthly)</code>, ώστε να επιστρέφει 12 μηνιαίους μισθούς. Η εμφάνιση να παραμείνει στη <code>main</code>. Για μηνιαίο μισθό 1000.0, περιμένουμε <code>Annual: 12000.0</code>. Το παράδειγμα αφορά απλό αριθμητικό υπολογισμό 12 μηνών.',
 starter:`public class Main {
    public static double annualSalary(double monthly) {
        // TODO: Επίστρεψε το γινόμενο monthly επί 12.
        return 0.0;
    }

    public static void main(String[] args) {
        double annual = annualSalary(1000.0);
        System.out.println("Annual: " + annual);
    }
}`,
 solution:`public class Main {
    public static double annualSalary(double monthly) {
        return monthly * 12;
    }

    public static void main(String[] args) {
        double annual = annualSalary(1000.0);
        System.out.println("Annual: " + annual);
    }
}`,
 taskExpected:'Annual: 12000.0',mistake:'Μην γράφεις System.out.println στη θέση του return σε μέθοδο που πρέπει να επιστρέφει double. Η εμφάνιση και η επιστροφή τιμής εξυπηρετούν διαφορετικούς σκοπούς.'
},
{
 id:'objects',number:'02',group:'foundation',title:'Κλάση και αντικείμενο',short:'Κλάση και αντικείμενο',tag:'Βασική έννοια',
 description:'Από την περιγραφή Student στους συγκεκριμένους φοιτητές s1 και s2. Τι δημιουργεί το new;',
 objectives:['Ξεχωρίζω την κλάση Student από ένα αντικείμενο Student.','Διαβάζω μια δήλωση με new από αριστερά προς τα δεξιά.','Καλώ μια μέθοδο στο αντικείμενο που θέλω.'],
 theory:[
  {title:'Η κλάση ορίζει πεδία και συμπεριφορά',text:'Η <code>Student</code> περιγράφει τι αποθηκεύει κάθε φοιτητής και ποιες μεθόδους διαθέτει. Το <code>id</code> είναι πεδίο της κλάσης. Κάθε αντικείμενο <code>Student</code> έχει τη δική του τιμή για αυτό το πεδίο.'},
  {title:'Το new δημιουργεί ένα νέο αντικείμενο',text:'Στην <code>Student s1 = new Student(1);</code>, το πρώτο <code>Student</code> είναι ο τύπος της μεταβλητής, το <code>s1</code> το όνομά της και το <code>new Student(1)</code> δημιουργεί και αρχικοποιεί ένα αντικείμενο. Η μεταβλητή <code>s1</code> κρατά αναφορά σε αυτό το αντικείμενο.'},
  {title:'Η τελεία επιλέγει το αντικείμενο',text:'Με <code>s1.printId()</code> καλούμε την <code>printId()</code> του πρώτου αντικειμένου. Με <code>s2.printId()</code> καλούμε τη μέθοδο στο δεύτερο. Ο κώδικας της μεθόδου είναι ίδιος, αλλά χρησιμοποιεί τα δεδομένα του αντικειμένου στο οποίο την καλέσαμε.'},
  {title:'Η main είναι η αφετηρία του παραδείγματος',text:'Ο κώδικας μέσα στη <code>main</code> δημιουργεί τα αντικείμενα και τα χρησιμοποιεί. Στον online editor η αφετηρία θα βρίσκεται στην <code>public class Main</code>, στο αρχείο <code>Main.java</code>. Η <code>Student</code> είναι δεύτερη, μη public κλάση στο ίδιο αρχείο. Στο NetBeans μπορείς να ακολουθήσεις τη διάταξη αρχείων που ζητά η εκφώνηση.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1);
        Student s2 = new Student(2);
        s1.printId();
        s2.printId();
    }
}

class Student {
    private int id;

    public Student(int studentId) {
        id = studentId;
    }

    public void printId() {
        System.out.println("Student id: " + id);
    }
}`,
 expected:'Student id: 1\nStudent id: 2',
 notes:[['new Student(1)','Ο κατασκευαστής Student(int studentId) παίρνει το 1 και το αποθηκεύει στο πεδίο id του νέου αντικειμένου.'],['private int id;','Το πεδίο ανήκει στο κάθε αντικείμενο. Η πρόσβαση σε private πεδία θα εξηγηθεί στο μάθημα 04.']],
 predict:'Πόσα αντικείμενα Student δημιουργούνται; Ποιο αντικείμενο χρησιμοποιείται στην s2.printId();',answer:'Δημιουργούνται δύο αντικείμενα, ένα για κάθε new Student(...). Η s2.printId() χρησιμοποιεί το δεύτερο αντικείμενο, με id 2.',
 task:'Πρόσθεσε τρίτο αντικείμενο <code>s3</code> με αριθμό μητρώου 30 και εμφάνισε το id και των τριών αντικειμένων.',
 starter:`public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1);
        Student s2 = new Student(2);
        // TODO: Δημιούργησε το s3 με id 30.
        s1.printId();
        s2.printId();
        // TODO: Κάλεσε την printId στο s3.
    }
}

class Student {
    private int id;
    public Student(int studentId) { id = studentId; }
    public void printId() {
        System.out.println("Student id: " + id);
    }
}`,
 solution:`public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1);
        Student s2 = new Student(2);
        Student s3 = new Student(30);
        s1.printId();
        s2.printId();
        s3.printId();
    }
}

class Student {
    private int id;
    public Student(int studentId) { id = studentId; }
    public void printId() {
        System.out.println("Student id: " + id);
    }
}`,
 taskExpected:'Student id: 1\nStudent id: 2\nStudent id: 30',mistake:'Η Student s3; δηλώνει μόνο μια μεταβλητή. Δεν δημιουργεί αντικείμενο. Μια τοπική μεταβλητή πρέπει να έχει αρχικοποιηθεί πριν χρησιμοποιηθεί.'
},
{
 id:'constructors',number:'03',group:'foundation',title:'Κατασκευαστές και this',short:'Κατασκευαστές και this',tag:'Αρχικοποίηση',
 description:'Δίνουμε αρχικές τιμές στα πεδία και επιλέγουμε ανάμεσα σε δύο κατασκευαστήςs.',
 objectives:['Αναγνωρίζω έναν κατασκευαστή από το όνομα και την απουσία τύπου επιστροφής.','Εξηγώ ποιο πεδίο δηλώνει το this.semester.','Επιλέγω κατασκευαστή από τον αριθμό και τους τύπους ορισμάτων.'],
 theory:[
  {title:'Ο κατασκευαστής αρχικοποιεί το νέο αντικείμενο',text:'Έχει το ίδιο όνομα με την κλάση και δεν δηλώνει τύπο επιστροφής, ούτε <code>void</code>. Η <code>Student(int id)</code> είναι κατασκευαστής. Η <code>void Student(int id)</code> θα ήταν συνηθισμένη μέθοδος και δεν θα αρχικοποιούσε το αντικείμενο μέσω της ίδιας κλήσης <code>new</code>.'},
  {title:'Το this σημαίνει το τρέχον αντικείμενο',text:'Στην <code>this.id = id;</code>, αριστερά βρίσκεται το πεδίο του αντικειμένου και δεξιά η παράμετρος του κατασκευαστή. Επειδή έχουν το ίδιο όνομα, το <code>this</code> κάνει τη διάκριση. Η <code>id = id;</code> αναθέτει την τιμή της παραμέτρου στην ίδια την παράμετρο και αφήνει το πεδίο ανεπηρέαστο.'},
  {title:'Δύο κατασκευαστήςs προσφέρουν δύο τρόπους αρχικοποίησης',text:'Η <code>new Student(1)</code> καλεί τον κατασκευαστή με μία παράμετρο και θέτει το εξάμηνο σε 1. Η <code>new Student(2, 3)</code> καλεί τον κατασκευαστή με δύο παραμέτρους και θέτει το εξάμηνο σε 3. Αυτό λέγεται υπερφόρτωση κατασκευαστών. Στις τελικές ασκήσεις προσθέτουμε και τα πεδία ονόματος.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1);
        Student s2 = new Student(2, 3);
        s1.printInfo();
        s2.printInfo();
    }
}

class Student {
    private int id;
    private int semester;

    public Student(int id) {
        this.id = id;
        this.semester = 1;
    }

    public Student(int id, int semester) {
        this.id = id;
        this.semester = semester;
    }

    public void printInfo() {
        System.out.println("id=" + id + ", semester=" + semester);
    }
}`,
 expected:'id=1, semester=1\nid=2, semester=3',
 notes:[['this.semester = 1;','Η αρχική τιμή ορίζεται από τον πρώτο κατασκευαστής. Δεν χρειάζεται να δοθεί από τη main.'],['this.semester = semester;','Η τιμή προέρχεται από την παράμετρο του δεύτερου constructor.']],
 predict:'Αν αντικαταστήσεις μόνο την this.semester = semester; με semester = semester;, τι εξάμηνο θα εμφανίσει το s2;',answer:'Θα εμφανίσει semester=0. Η παράμετρος ανατίθεται στον εαυτό της και το int πεδίο παραμένει στην προεπιλεγμένη τιμή 0.',
 task:'Συμπλήρωσε τους δύο κατασκευαστήςs της <code>Employee</code>. Ο πρώτος δέχεται μόνο id και θέτει salary σε 0.0. Ο δεύτερος δέχεται id και salary και αποθηκεύει τις δύο τιμές.',
 starter:`public class Main {
    public static void main(String[] args) {
        Employee e1 = new Employee(1);
        Employee e2 = new Employee(2, 1200.0);
        e1.printInfo();
        e2.printInfo();
    }
}

class Employee {
    private int id;
    private double salary;
    public Employee(int id) {
        // TODO: Αποθήκευσε id και αρχικό salary 0.0.
    }
    public Employee(int id, double salary) {
        // TODO: Αποθήκευσε τις δύο παραμέτρους.
    }
    public void printInfo() {
        System.out.println("id=" + id + ", salary=" + salary);
    }
}`,
 solution:`public class Main {
    public static void main(String[] args) {
        Employee e1 = new Employee(1);
        Employee e2 = new Employee(2, 1200.0);
        e1.printInfo();
        e2.printInfo();
    }
}

class Employee {
    private int id;
    private double salary;
    public Employee(int id) {
        this.id = id;
        this.salary = 0.0;
    }
    public Employee(int id, double salary) {
        this.id = id;
        this.salary = salary;
    }
    public void printInfo() {
        System.out.println("id=" + id + ", salary=" + salary);
    }
}`,
 taskExpected:'id=1, salary=0.0\nid=2, salary=1200.0',mistake:'Μην προσθέτεις void πριν από τον κατασκευαστή. Το όνομα πρέπει να συμφωνεί ακριβώς με το όνομα της κλάσης, μαζί με τα κεφαλαία γράμματα.'
},
{
 id:'access',number:'04',group:'foundation',title:'Private πεδία και πρόσβαση',short:'Μέθοδοι ανάγνωσης και μεταβολής',tag:'Πεδία',
 description:'Διαβάζουμε και αλλάζουμε τα δεδομένα μέσα από μεθόδους του αντικειμένου.',
 objectives:['Διαβάζω μια τιμή με getter.','Αλλάζω μια τιμή με setter.','Ξεχωρίζω τον ρόλο του κατασκευαστή από τον ρόλο ενός setter.'],
 theory:[
  {title:'Το private περιορίζει την άμεση πρόσβαση',text:'Ένα <code>private</code> πεδίο είναι προσβάσιμο μέσα στην κλάση που το δηλώνει. Στο παράδειγμά μας η <code>Main</code> είναι άλλη κλάση, επομένως δεν μπορεί να γράψει <code>s1.semester = 4;</code>. Η <code>Student</code> προσφέρει δημόσιες μεθόδους για την ανάγνωση και αλλαγή του.'},
  {title:'Ο getter επιστρέφει την τιμή',text:'Η <code>public int getSemester()</code> επιστρέφει το εξάμηνο. Επειδή ο τύπος επιστροφής είναι <code>int</code>, μέσα στη μέθοδο γράφουμε <code>return semester;</code>. Στη <code>main</code> μπορούμε να αποθηκεύσουμε ή να εμφανίσουμε αυτή την τιμή.'},
  {title:'Ο setter αλλάζει το πεδίο',text:'Η <code>public void setSemester(int semester)</code> λαμβάνει μία τιμή και την αποθηκεύει με <code>this.semester = semester;</code>. Ο τύπος <code>void</code> δηλώνει ότι δεν επιστρέφει τιμή. Ο κατασκευαστής χρησιμοποιείται κατά τη δημιουργία του αντικειμένου· ο setter μπορεί να κληθεί αργότερα στο ήδη υπάρχον αντικείμενο.'},
  {title:'Οι μέθοδοι πρόσβασης μπορούν να περιέχουν ελέγχους',text:'Σε μια πληρέστερη εφαρμογή ένας setter θα μπορούσε να ελέγχει αν το εξάμηνο είναι θετικό. Εδώ υλοποιούμε πρώτα την απλή αποθήκευση τιμής που ζητούν οι εκφωνήσεις, ώστε να γίνει σαφής ο μηχανισμός.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1);
        System.out.println("Before: " + s1.getSemester());
        s1.setSemester(4);
        System.out.println("After: " + s1.getSemester());
    }
}

class Student {
    private int semester;

    public Student(int semester) {
        this.semester = semester;
    }
    public int getSemester() {
        return semester;
    }
    public void setSemester(int semester) {
        this.semester = semester;
    }
}`,
 expected:'Before: 1\nAfter: 4',
 notes:[['s1.getSemester()','Η κλήση αντικαθίσταται από την τιμή που επιστρέφει ο getter, για να σχηματιστεί το μήνυμα.'],['s1.setSemester(4);','Η αλλαγή γίνεται στο ίδιο αντικείμενο s1. Δεν δημιουργείται νέο αντικείμενο.']],
 predict:'Μπορώ να γράψω System.out.println(s1.setSemester(4)); ; Γιατί;',answer:'Όχι. Η setSemester επιστρέφει void, άρα δεν υπάρχει τιμή για να περάσει στην println. Καλούμε πρώτα τον setter και μετά εμφανίζουμε το αποτέλεσμα του getter.',
 task:'Διόρθωσε τον getter και τον setter του μισθού. Ο getter πρέπει να επιστρέφει το πεδίο και ο setter να αλλάζει το πεδίο του αντικειμένου. Η έξοδος πρέπει να είναι 1000.0 και έπειτα 1300.0.',
 starter:`public class Main {
    public static void main(String[] args) {
        Employee e = new Employee(1000.0);
        System.out.println(e.getSalary());
        e.setSalary(1300.0);
        System.out.println(e.getSalary());
    }
}

class Employee {
    private double salary;
    public Employee(double salary) { this.salary = salary; }
    public double getSalary() {
        return 0.0; // TODO: Επίστρεψε το πεδίο.
    }
    public void setSalary(double salary) {
        salary = salary; // TODO: Διόρθωσε την ανάθεση.
    }
}`,
 solution:`public class Main {
    public static void main(String[] args) {
        Employee e = new Employee(1000.0);
        System.out.println(e.getSalary());
        e.setSalary(1300.0);
        System.out.println(e.getSalary());
    }
}

class Employee {
    private double salary;
    public Employee(double salary) { this.salary = salary; }
    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }
}`,
 taskExpected:'1000.0\n1300.0',mistake:'Το ότι ένας κώδικας μεταγλωττίζεται δεν σημαίνει ότι κάνει αυτό που θέλουμε. Η salary = salary; είναι συντακτικά έγκυρη, αλλά δεν αλλάζει το πεδίο.'
},
{
 id:'tostring',number:'05',group:'foundation',title:'ToString και Override',short:'toString και Override',tag:'Περιγραφή',
 description:'Μετατρέπουμε τα δεδομένα ενός αντικειμένου σε αναγνώσιμο κείμενο.',
 objectives:['Γράφω public String toString() με σωστή υπογραφή.','Εξηγώ γιατί η println(s1) εμφανίζει την περιγραφή του φοιτητή.','Καταλαβαίνω τι ελέγχει το @Override.'],
 theory:[
  {title:'Η toString επιστρέφει κείμενο',text:'Μια <code>toString()</code> επιστρέφει περιγραφή του αντικειμένου ως <code>String</code>. Για έναν φοιτητή μπορεί να επιστρέφει <code>id=1, semester=3</code>. Δεν χρειάζεται να εμφανίζει η ίδια την περιγραφή με <code>println</code>.'},
  {title:'Η println χρησιμοποιεί την toString του αντικειμένου',text:'Όταν γράφουμε <code>System.out.println(s1);</code>, η Java χρησιμοποιεί τη <code>toString()</code> για την περιγραφή του μη null αντικειμένου. Η <code>System.out.println(s1.toString());</code> καλεί ρητά την ίδια μέθοδο. Η εκφώνηση ζητά την πρώτη μορφή.'},
  {title:'Η Object προσφέρει μια βασική toString',text:'Η <code>Object</code> είναι η βασική υπερκλάση των κλάσεων Java. Η <code>Student</code> κληρονομεί από αυτήν μεθόδους όπως <code>toString()</code>, <code>equals(Object)</code> και <code>hashCode()</code>. Με δική μας υλοποίηση της <code>toString()</code>, αλλάζουμε την περιγραφή που δίνεται για τους φοιτητές.'},
  {title:'Το @Override βοηθά να εντοπιστεί λάθος υπογραφή',text:'Το <code>@Override</code> ζητά από τον μεταγλωττιστή να ελέγξει ότι πράγματι επαναορίζουμε μια μέθοδο υπερκλάσης. Το <code>toString</code> γράφεται με κεφαλαίο S, χωρίς παραμέτρους και με τύπο επιστροφής <code>String</code>. Αν γράψουμε <code>tostring()</code>, το <code>@Override</code> θα επισημάνει το πρόβλημα.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(1, 3);
        System.out.println(s1);
        String description = s1.toString();
        System.out.println(description);
    }
}

class Student {
    private int id;
    private int semester;
    public Student(int id, int semester) {
        this.id = id;
        this.semester = semester;
    }
    @Override
    public String toString() {
        return "id=" + id + ", semester=" + semester;
    }
}`,
 expected:'id=1, semester=3\nid=1, semester=3',
 notes:[['return "id=" + id + ", semester=" + semester;','Το + συνδέει τα τμήματα κειμένου και τις τιμές. Το τελικό String επιστρέφεται στον κώδικα που κάλεσε τη μέθοδο.'],['String description = s1.toString();','Η περιγραφή αποθηκεύεται σε μεταβλητή. Η αποθήκευση δεν εμφανίζει από μόνη της κάτι.']],
 predict:'Πόσες γραμμές θα εμφανιστούν; Η ανάθεση στη description εμφανίζει τρίτη γραμμή;',answer:'Δύο γραμμές, από τις δύο println. Η τοπική μεταβλητή description απλώς αποθηκεύει το κείμενο που επέστρεψε η toString.',
 task:'Συμπλήρωσε την <code>toString()</code> της Employee. Για το αντικείμενο του παραδείγματος πρέπει να επιστρέφει ακριβώς <code>id=2, salary=1200.0 ευρώ</code>.',
 starter:`public class Main {
    public static void main(String[] args) {
        Employee e = new Employee(2, 1200.0);
        System.out.println(e);
    }
}

class Employee {
    private int id;
    private double salary;
    public Employee(int id, double salary) {
        this.id = id;
        this.salary = salary;
    }
    @Override
    public String toString() {
        return ""; // TODO: Σύνδεσε τις ετικέτες και τις τιμές.
    }
}`,
 solution:`public class Main {
    public static void main(String[] args) {
        Employee e = new Employee(2, 1200.0);
        System.out.println(e);
    }
}

class Employee {
    private int id;
    private double salary;
    public Employee(int id, double salary) {
        this.id = id;
        this.salary = salary;
    }
    @Override
    public String toString() {
        return "id=" + id + ", salary=" + salary + " ευρώ";
    }
}`,
 taskExpected:'id=2, salary=1200.0 ευρώ',mistake:'Μην καλείς this.toString() μέσα στην ίδια την toString για να φτιάξεις την περιγραφή. Η μέθοδος θα καλέσει ξανά τον εαυτό της χωρίς να τερματίζει.'
},
{
 id:'references',number:'06',group:'connections',title:'Αναφορές και αντίγραφα',short:'Αναφορές και αντίγραφα',tag:'Η γέφυρα',
 description:'Δύο μεταβλητές μπορεί να δείχνουν στο ίδιο αντικείμενο. Ένα πραγματικό αντίγραφο χρειάζεται νέο αντικείμενο.',
 objectives:['Προβλέπω τι συμβαίνει μετά την b = a.','Χρησιμοποιώ constructor αντιγραφής για ανεξάρτητο Vector2D.','Ξεχωρίζω ίδιες τιμές από κοινό αντικείμενο.'],visual:'references',
 theory:[
  {title:'Η ανάθεση μιας αναφοράς δεν αντιγράφει το αντικείμενο',text:'Με <code>Vector2D b = a;</code> αντιγράφουμε την αναφορά που κρατά η <code>a</code>. Τώρα οι δύο μεταβλητές αναφέρονται στο ίδιο διάνυσμα. Μια αλλαγή μέσω της <code>b</code> είναι ορατή και μέσω της <code>a</code>, επειδή υπάρχει ένα κοινό αντικείμενο.'},
  {title:'Ο κατασκευαστής αντιγραφής δημιουργεί νέο αντικείμενο',text:'Με <code>Vector2D c = new Vector2D(a);</code> δημιουργούμε δεύτερο διάνυσμα. Ο κατασκευαστής <code>Vector2D(Vector2D other)</code> διαβάζει τα πεδία του <code>other</code> και τα αποθηκεύει στο νέο αντικείμενο. Τα <code>x</code> και <code>y</code> είναι double, οπότε αντιγράφονται οι αριθμητικές τιμές τους.'},
  {title:'Ο κατασκευαστής μπορεί να διαβάζει private πεδία του other',text:'Ο κώδικας του κατασκευαστή βρίσκεται μέσα στη <code>Vector2D</code>. Μπορεί επομένως να διαβάζει τα private πεδία ενός άλλου αντικειμένου της ίδιας κλάσης, όπως <code>other.x</code>. Το <code>other</code> είναι παράμετρος που αναφέρεται στο αντικείμενο που αντιγράφουμε.'},
  {title:'Για ένα αντικείμενο ως πεδίο χρειάζεται προσοχή',text:'Η απλή αντιγραφή τιμών αρκεί για τα double πεδία της Vector2D. Αν ένα πεδίο είναι αναφορά σε μεταβλητό αντικείμενο, όπως η θέση του Player, η αντιγραφή της αναφοράς θα το αφήσει κοινό. Στο επόμενο μάθημα θα δημιουργήσουμε και νέο αντικείμενο για τη θέση.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Vector2D a = new Vector2D(2, 3);
        Vector2D b = a;
        Vector2D c = new Vector2D(a);
        b.setX(9);
        System.out.println("a: " + a);
        System.out.println("b: " + b);
        System.out.println("c: " + c);
    }
}

class Vector2D {
    private double x;
    private double y;
    public Vector2D(double x, double y) {
        this.x = x;
        this.y = y;
    }
    public Vector2D(Vector2D other) {
        this.x = other.x;
        this.y = other.y;
    }
    public void setX(double x) { this.x = x; }
    @Override
    public String toString() { return "(" + x + ", " + y + ")"; }
}`,
 expected:'a: (9.0, 3.0)\nb: (9.0, 3.0)\nc: (2.0, 3.0)',
 notes:[['Vector2D b = a;','Δεν υπάρχει new. Οι a και b μοιράζονται το ίδιο αντικείμενο.'],['Vector2D c = new Vector2D(a);','Υπάρχει new. Η c αναφέρεται σε νέο αντικείμενο, με αντίγραφα των αρχικών τιμών 2 και 3.']],
 predict:'Αν στην αρχική έκδοση αλλάξεις μόνο το b.setX(9) σε c.setX(9), τι θα εμφανίσουν a, b και c;',answer:'Οι a και b θα εμφανίσουν (2.0, 3.0), ενώ η c θα εμφανίσει (9.0, 3.0). Η c είναι ανεξάρτητο αντίγραφο.',
 task:'Στον παρακάτω κώδικα, άλλαξε μόνο τη δημιουργία του v2 ώστε να είναι ανεξάρτητο αντίγραφο του v1. Μετά την αλλαγή του v2, το v1 πρέπει να παραμένει (2.0, 3.0).',
 starter:`public class Main {
    public static void main(String[] args) {
        Vector2D v1 = new Vector2D(2, 3);
        Vector2D v2 = v1; // TODO: Δημιούργησε αντίγραφο.
        v2.setX(9);
        System.out.println("v1: " + v1);
        System.out.println("v2: " + v2);
    }
}

class Vector2D {
    private double x;
    private double y;
    public Vector2D(double x, double y) { this.x = x; this.y = y; }
    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }
    public void setX(double x) { this.x = x; }
    @Override
    public String toString() { return "(" + x + ", " + y + ")"; }
}`,
 solution:`public class Main {
    public static void main(String[] args) {
        Vector2D v1 = new Vector2D(2, 3);
        Vector2D v2 = new Vector2D(v1);
        v2.setX(9);
        System.out.println("v1: " + v1);
        System.out.println("v2: " + v2);
    }
}

class Vector2D {
    private double x;
    private double y;
    public Vector2D(double x, double y) { this.x = x; this.y = y; }
    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }
    public void setX(double x) { this.x = x; }
    @Override
    public String toString() { return "(" + x + ", " + y + ")"; }
}`,
 taskExpected:'v1: (2.0, 3.0)\nv2: (9.0, 3.0)',mistake:'Οι δύο μεταβλητές a και b δεν είναι δύο αντικείμενα επειδή έχουν διαφορετικά ονόματα. Κοίτα πού χρησιμοποιείται το new και ποια αναφορά αντιγράφεται.'
},
{
 id:'composition',number:'07',group:'connections',title:'Ο Player έχει μια θέση',short:'Αντικείμενο ως πεδίο',tag:'Σύνθεση',
 description:'Συνδέουμε δύο κλάσεις και κρατάμε τη θέση του παίκτη ανεξάρτητη από τα εξωτερικά διανύσματα.',
 objectives:['Διαβάζω τη δήλωση private Vector2D position.','Δημιουργώ αντίγραφο θέσης σε constructor και setter.','Καταλαβαίνω γιατί ο getter επιστρέφει αντίγραφο.'],visual:'vector',
 theory:[
  {title:'Το πεδίο μπορεί να έχει τύπο άλλης κλάσης',text:'Στην <code>private Vector2D position;</code>, το <code>Vector2D</code> είναι ο τύπος του πεδίου και το <code>position</code> το όνομά του. Κάθε Player έχει μια θέση που περιγράφεται από αντικείμενο Vector2D. Η δήλωση του πεδίου από μόνη της δεν δημιουργεί διάνυσμα.'},
  {title:'Ο κατασκευαστής αποθηκεύει αντίγραφο της θέσης',text:'Η <code>this.position = new Vector2D(position);</code> καλεί τον κατασκευαστή αντιγραφής της Vector2D. Αν το εξωτερικό διάνυσμα αλλάξει αργότερα, η θέση του παίκτη δεν αλλάζει. Η <code>this.position = position;</code> θα άφηνε το διάνυσμα κοινό.'},
  {title:'Ο getter επιστρέφει επίσης αντίγραφο',text:'Η <code>return new Vector2D(position);</code> επιτρέπει στον χρήστη της κλάσης να διαβάσει τη θέση χωρίς να πάρει άμεση πρόσβαση στο εσωτερικό μεταβλητό διάνυσμα. Αν αλλάξει το αντίγραφο, η θέση του παίκτη μένει ίδια. Για να αποθηκεύσει την αλλαγή στον παίκτη, πρέπει να καλέσει <code>setPosition(...)</code>.'},
  {title:'Το όνομα και η θέση αντιγράφονται διαφορετικά',text:'Στον κατασκευαστή αντιγραφής του Player, η θέση χρειάζεται νέο Vector2D. Για το <code>String name</code> αρκεί η ανάθεση της αναφοράς, επειδή τα String είναι αμετάβλητα. Η αλλαγή του name ενός παίκτη με setter δεν μεταβάλλει το ίδιο String αντικείμενο.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Vector2D start = new Vector2D(2, 3);
        Player p = new Player("Alex", start);
        start.setX(9);
        System.out.println("External: " + start);
        System.out.println("Player: " + p);

        Vector2D next = p.getPosition();
        next.setX(5);
        System.out.println("Before setter: " + p);
        p.setPosition(next);
        System.out.println("After setter: " + p);
    }
}

class Vector2D {
    private double x;
    private double y;
    public Vector2D(double x, double y) { this.x = x; this.y = y; }
    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }
    public void setX(double x) { this.x = x; }
    @Override
    public String toString() { return "(" + x + ", " + y + ")"; }
}

class Player {
    private String name;
    private Vector2D position;
    public Player(String name, Vector2D position) {
        this.name = name;
        this.position = new Vector2D(position);
    }
    public Vector2D getPosition() { return new Vector2D(position); }
    public void setPosition(Vector2D position) {
        this.position = new Vector2D(position);
    }
    @Override
    public String toString() {
        return "name=" + name + ", position=" + position;
    }
}`,
 expected:'External: (9.0, 3.0)\nPlayer: name=Alex, position=(2.0, 3.0)\nBefore setter: name=Alex, position=(2.0, 3.0)\nAfter setter: name=Alex, position=(5.0, 3.0)',
 notes:[['Vector2D next = p.getPosition();','Η next κρατά αντίγραφο. Η next.setX(5) αλλάζει αυτό το αντίγραφο.'],['p.setPosition(next);','Ο setter δημιουργεί νέο αντίγραφο της next και το αποθηκεύει στον παίκτη.']],
 predict:'Με αυτόν τον getter, η p.getPosition().setX(100); αλλάζει τη θέση του παίκτη;',answer:'Όχι. Η getPosition επιστρέφει νέο αντίγραφο. Αλλάζει μόνο εκείνο το προσωρινό αντίγραφο. Χρειαζόμαστε μεταβλητή για το αντίγραφο, αλλαγή του και κλήση της setPosition.',
 task:'Διόρθωσε τη μία γραμμή στον κατασκευαστή του Player. Αποθήκευσε αντίγραφο της θέσης. Μετά τη start.setX(9), ο παίκτης πρέπει να παραμένει στη θέση (2.0, 3.0).',
 starter:`public class Main {
    public static void main(String[] args) {
        Vector2D start = new Vector2D(2, 3);
        Player p = new Player("Alex", start);
        start.setX(9);
        System.out.println(p);
    }
}

class Vector2D {
    private double x;
    private double y;
    public Vector2D(double x, double y) { this.x = x; this.y = y; }
    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }
    public void setX(double x) { this.x = x; }
    @Override
    public String toString() { return "(" + x + ", " + y + ")"; }
}

class Player {
    private String name;
    private Vector2D position;
    public Player(String name, Vector2D position) {
        this.name = name;
        this.position = position; // TODO: Αποθήκευσε αντίγραφο.
    }
    @Override
    public String toString() {
        return "name=" + name + ", position=" + position;
    }
}`,
 solution:`public class Main {
    public static void main(String[] args) {
        Vector2D start = new Vector2D(2, 3);
        Player p = new Player("Alex", start);
        start.setX(9);
        System.out.println(p);
    }
}

class Vector2D {
    private double x;
    private double y;
    public Vector2D(double x, double y) { this.x = x; this.y = y; }
    public Vector2D(Vector2D other) { this.x = other.x; this.y = other.y; }
    public void setX(double x) { this.x = x; }
    @Override
    public String toString() { return "(" + x + ", " + y + ")"; }
}

class Player {
    private String name;
    private Vector2D position;
    public Player(String name, Vector2D position) {
        this.name = name;
        this.position = new Vector2D(position);
    }
    @Override
    public String toString() {
        return "name=" + name + ", position=" + position;
    }
}`,
 taskExpected:'name=Alex, position=(2.0, 3.0)',mistake:'Το private δεν αρκεί για να αποφύγουμε την κοινή χρήση του ίδιου μεταβλητού αντικειμένου. Αν αποθηκεύουμε ή επιστρέφουμε άμεσα την αναφορά του, άλλος κώδικας μπορεί να το αλλάξει.'
},
{
 id:'equality',number:'08',group:'connections',title:'Σύγκριση με equals',short:'equals και Object',tag:'Ισότητα',
 description:'Ορίζουμε πότε δύο διαφορετικά αντικείμενα θεωρούνται ίσα με βάση τα δεδομένα τους.',
 objectives:['Ξεχωρίζω το == των αναφορών από την equals περιεχομένου.','Εξηγώ τους ελέγχους null και κλάσης πριν από το cast.','Επιλέγω σύγκριση για int, String, double και Vector2D.'],
 theory:[
  {title:'Ίδιο αντικείμενο και ίδιες τιμές είναι διαφορετικοί έλεγχοι',text:'Για αναφορές αντικειμένων, το <code>a == b</code> ελέγχει αν οι δύο αναφορές αναφέρονται στο ίδιο αντικείμενο. Η δική μας <code>equals()</code> μπορεί να ελέγχει τις συντεταγμένες. Δύο ξεχωριστά διανύσματα με συντεταγμένες (2, 3) μπορούν να έχουν <code>a == b</code> false και <code>a.equals(b)</code> true.'},
  {title:'Γιατί η παράμετρος είναι Object',text:'Η υπογραφή <code>public boolean equals(Object obj)</code> επαναορίζει τη μέθοδο της Object. Επειδή η δηλωμένη παράμετρος έχει τύπο Object, ο μεταγλωττιστής δεν μας επιτρέπει να γράψουμε απευθείας <code>obj.x</code>. Το Object δεν δηλώνει πεδίο x.'},
  {title:'Πρώτα ελέγχουμε και μετά κάνουμε μετατροπή τύπου',text:'Αν <code>this == obj</code>, είναι το ίδιο αντικείμενο και επιστρέφουμε true. Αν το obj είναι null ή διαφορετικής κλάσης, επιστρέφουμε false. Έπειτα η <code>Vector2D other = (Vector2D) obj;</code> μας επιτρέπει να χρησιμοποιήσουμε τα μέλη της Vector2D. Το cast δεν δημιουργεί νέο αντικείμενο. Η πρόσβαση στα private πεδία επιτρέπεται επειδή ο κώδικας βρίσκεται μέσα στην ίδια κλάση.'},
  {title:'Η σύγκριση εξαρτάται από τον τύπο',text:'Για <code>int</code> χρησιμοποιούμε <code>a == b</code>. Για String μπορούμε να χρησιμοποιήσουμε <code>Objects.equals(a, b)</code>, που χειρίζεται και null. Για τις double συντεταγμένες της άσκησης χρησιμοποιούμε <code>Double.compare(a, b) == 0</code>. Για Vector2D χρησιμοποιούμε τη δική του equals. Η Double.compare εδώ εφαρμόζει ακριβή σύγκριση, όχι ανοχή αριθμητικού σφάλματος, και ξεχωρίζει τα +0.0 και -0.0.'},
  {title:'Η equals συνοδεύεται από συμβατή hashCode',text:'Στο παράδειγμα δίνεται και η hashCode, επειδή όταν επαναορίζουμε την equals πρέπει να διατηρείται ο κανόνας για τους ίσους κωδικούς των ίσων αντικειμένων. Ο υπολογισμός εξηγείται αναλυτικά στο επόμενο μάθημα.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Vector2D a = new Vector2D(2, 3);
        Vector2D b = new Vector2D(2, 3);
        System.out.println("Same object: " + (a == b));
        System.out.println("Equal values: " + a.equals(b));
        System.out.println("Equal to null: " + a.equals(null));
        System.out.println("Equal to text: " + a.equals("hello"));
    }
}

${VECTOR_COMPLETE}`,
 expected:'Same object: false\nEqual values: true\nEqual to null: false\nEqual to text: false',
 notes:[['obj == null || getClass() != obj.getClass()','Το || κάνει βραχυκύκλωση: όταν το obj είναι null, δεν εκτελείται η obj.getClass().'],['Double.compare(x, other.x) == 0','Η compare επιστρέφει int. Η σύγκρισή του με 0 δίνει boolean. Οι δύο boolean συνθήκες συνδυάζονται με &&.']],
 predict:'Γιατί δεν γράφουμε a.equals(b) == 1; Πώς χρησιμοποιούμε το αποτέλεσμα σε if;',answer:'Η equals επιστρέφει boolean, όχι αριθμό. Γράφουμε if (a.equals(b)) { ... }. Δεν χρειάζεται ούτε == 1 ούτε == true.',
 task:'Χωρίς να αλλάξεις τις κλάσεις, πρόσθεσε ένα διάνυσμα c στη θέση (9, 3). Εμφάνισε a.equals(c), a.equals(a) και a.equals(null), με αυτή τη σειρά. Εξήγησε κάθε αποτέλεσμα.',
 starter:`public class Main {
    public static void main(String[] args) {
        Vector2D a = new Vector2D(2, 3);
        // TODO: Δημιούργησε c και πρόσθεσε τις τρεις συγκρίσεις.
    }
}

${VECTOR_COMPLETE}`,
 solution:`public class Main {
    public static void main(String[] args) {
        Vector2D a = new Vector2D(2, 3);
        Vector2D c = new Vector2D(9, 3);
        System.out.println(a.equals(c));
        System.out.println(a.equals(a));
        System.out.println(a.equals(null));
    }
}

${VECTOR_COMPLETE}`,
 taskExpected:'false\ntrue\nfalse',mistake:'Η equals(Vector2D other) έχει διαφορετική υπογραφή από την equals(Object obj). Αν χρησιμοποιήσεις τη δεύτερη με @Override, ο μεταγλωττιστής ελέγχει ότι επαναορίζεις τη σωστή μέθοδο.'
},
{
 id:'hashcode',number:'09',group:'connections',title:'Η hashCode στην πράξη',short:'hashCode',tag:'Ολοκλήρωση',
 description:'Ένας κωδικός από τα δεδομένα του αντικειμένου, με συγκεκριμένο κανόνα σε σχέση με την equals.',
 objectives:['Διατυπώνω σωστά τον κανόνα equals–hashCode.','Καταλαβαίνω ότι ο κωδικός δεν είναι μοναδική ταυτότητα.','Υπολογίζω συμβατή hashCode από τα ίδια πεδία που συγκρίνει η equals.'],
 theory:[
  {title:'Η hashCode επιστρέφει έναν ακέραιο',text:'Η <code>public int hashCode()</code> υπολογίζει έναν κωδικό που χρησιμοποιείται από δομές όπως HashSet και HashMap για τον εντοπισμό πιθανών θέσεων αποθήκευσης. Ο κωδικός δεν είναι σειριακός αριθμός, μοναδική ταυτότητα ή διεύθυνση μνήμης.'},
  {title:'Ο βασικός κανόνας έχει μία κατεύθυνση',text:'Αν <code>a.equals(b)</code> είναι true, οι <code>a.hashCode()</code> και <code>b.hashCode()</code> πρέπει να είναι ίδιοι. Αν οι κωδικοί είναι ίδιοι, τα αντικείμενα μπορεί να είναι ίσα ή διαφορετικά. Διαφορετικά αντικείμενα με ίδιο κωδικό αποτελούν σύγκρουση κατακερματισμού.'},
  {title:'Συνδυάζουμε τα πεδία που συμμετέχουν στην equals',text:'Για τη Vector2D ξεκινάμε με <code>Double.hashCode(x)</code> και συνδυάζουμε το y με <code>31 * result + Double.hashCode(y)</code>. Για έναν int θα μπορούσαμε να χρησιμοποιήσουμε την ίδια την τιμή ή <code>Integer.hashCode(id)</code>. Για τον Player μπορούμε να γράψουμε <code>Objects.hash(name, position)</code>, που χρησιμοποιεί και τη hashCode της θέσης.'},
  {title:'Γιατί χρησιμοποιείται συχνά το 31',text:'Το 31 είναι μια συνηθισμένη επιλογή πολλαπλασιαστή για τον συνδυασμό πεδίων. Βοηθά να λαμβάνεται υπόψη και η σειρά τους. Δεν είναι υποχρεωτικό και δεν εξαλείφει τις συγκρούσεις. Προτεραιότητα είναι ο υπολογισμός να συμφωνεί με την equals.'},
  {title:'Οι αλλαγές δεδομένων μπορεί να αλλάζουν τον κωδικό',text:'Αν αλλάξουμε το x ενός Vector2D, μπορεί να αλλάξει η hashCode του. Δεν αλλάζουμε πεδία που επηρεάζουν equals και hashCode όσο το αντικείμενο χρησιμοποιείται ως στοιχείο HashSet ή ως κλειδί HashMap. Για τις δοκιμές του εργαστηρίου συγκρίνουμε απευθείας τους κωδικούς, χωρίς να εισάγουμε ακόμα συλλογές.'}
 ],
 code:`public class Main {
    public static void main(String[] args) {
        Vector2D v1 = new Vector2D(2, 3);
        Vector2D v2 = new Vector2D(v1);
        System.out.println("Equal: " + v1.equals(v2));
        System.out.println("Same hash: "
            + (v1.hashCode() == v2.hashCode()));
        v2.setX(9);
        System.out.println("Equal after change: " + v1.equals(v2));
    }
}

${VECTOR_COMPLETE}`,
 expected:'Equal: true\nSame hash: true\nEqual after change: false',
 notes:[['int result = Double.hashCode(x);','Μετατρέπουμε τη double τιμή σε int κωδικό με τη μέθοδο της Double.'],['31 * result + Double.hashCode(y)','Συνδυάζουμε και τη δεύτερη συντεταγμένη. Η αριθμητική int μπορεί να υπερχειλίσει· αυτό επιτρέπεται σε έναν τέτοιο υπολογισμό κωδικού.']],
 predict:'Αν δύο παίκτες έχουν τον ίδιο hash code, μπορούμε να παραλείψουμε την equals;',answer:'Όχι. Ο ίδιος κωδικός δεν αποδεικνύει ισότητα. Η equals αποφασίζει αν τα αντικείμενα είναι ίσα σύμφωνα με τον ορισμό της κλάσης.',
 task:'Η equals του Player συγκρίνει name και position. Διόρθωσε τη hashCode ώστε να χρησιμοποιεί <code>Objects.hash(name, position)</code>. Η main εμφανίζει αν η μέθοδός σου συμφωνεί με αυτόν τον ζητούμενο υπολογισμό. Το παράδειγμα δείχνει και ότι ένας σταθερός κωδικός μπορεί να ικανοποιεί τον βασικό κανόνα ισότητας, αλλά δεν αξιοποιεί τα πεδία για κατανομή.',
 starter:JAVA_IMPORTS + `public class Main {
    public static void main(String[] args) {
        Player p = new Player("Alex", new Vector2D(2, 3));
        System.out.println("Uses requested fields: "
            + (p.hashCode() == Objects.hash(p.getName(), p.getPosition())));
    }
}

${VECTOR_COMPLETE}

${PLAYER_COMPLETE.replace('return Objects.hash(name, position);','return 0; // TODO: Συνδύασε name και position.')}`,
 solution:JAVA_IMPORTS + `public class Main {
    public static void main(String[] args) {
        Player p = new Player("Alex", new Vector2D(2, 3));
        System.out.println("Uses requested fields: "
            + (p.hashCode() == Objects.hash(p.getName(), p.getPosition())));
    }
}

${VECTOR_COMPLETE}

${PLAYER_COMPLETE}`,
 taskExpected:'Uses requested fields: true',mistake:'Δεν ελέγχουμε ότι άνισα αντικείμενα έχουν υποχρεωτικά διαφορετικό hash code. Η απαίτηση είναι: ίσα αντικείμενα, ίδιος κωδικός.'
},
{
 id:'lab-student',number:'Τ3',group:'labs',title:'Εργαστήριο Student',short:'Student · Τ3',tag:'1η άσκηση · Τ3',description:'Συνδυάζουμε πεδία, constructors, getters/setters και toString σε μια ολοκληρωμένη κλάση.',
 objectives:['Υλοποιώ τη Student με τα τέσσερα πεδία της εκφώνησης.','Ελέγχω και τους δύο κατασκευαστήςs.','Αλλάζω όλα τα πεδία και εμφανίζω τα αντικείμενα πριν και μετά.'],
 theory:[
  {title:'Πεδία και constructors',text:'Δήλωσε private πεδία <code>int id</code>, <code>String firstName</code>, <code>String lastName</code> και <code>int semester</code>. Ο κατασκευαστής τριών παραμέτρων αρχικοποιεί id, firstName και lastName και ορίζει semester σε 1. Ο κατασκευαστής τεσσάρων παραμέτρων αρχικοποιεί όλα τα πεδία από τις παραμέτρους του.'},
  {title:'Πρόσβαση και εμφάνιση',text:'Πρόσθεσε public getters και setters για όλα τα πεδία. Γράψε <code>@Override public String toString()</code> που επιστρέφει την περιγραφή με τη σειρά id, firstName, lastName, semester. Στη main δημιούργησε δύο αντικείμενα, ένα με κάθε constructor, εμφάνισέ τα και άλλαξε όλα τα πεδία τους με setters.'},
  {title:'Στον online editor και στο NetBeans',text:'Εδώ ο έλεγχος βρίσκεται στην public κλάση <code>Main</code> και η <code>Student</code> είναι δεύτερη μη public κλάση στο ίδιο αρχείο Main.java. Για την παράδοση στο NetBeans, όπως ζητά η εκφώνηση, βάλε τη main μέσα στην <code>public class Student</code> και αποθήκευσε το αρχείο ως <code>Student.java</code>. Οι μέθοδοι και οι constructors παραμένουν public.'}
 ],code:STUDENT_MAIN+'\n\n'+STUDENT_COMPLETE,
 expected:'id=1, firstName=Νίκος, lastName=Σταύρου, semester=1\nid=2, firstName=Μαρία, lastName=Παππά, semester=3\n\nΜετά την αλλαγή:\nid=11, firstName=Νικόλας, lastName=Γεωργίου, semester=2\nid=22, firstName=Ελένη, lastName=Νικολάου, semester=4',
 notes:[['new Student(1, "Νίκος", "Σταύρου")','Καλεί τον κατασκευαστή τριών παραμέτρων. Το semester γίνεται 1.'],['s1.setSemester(2)','Αλλάζει το ήδη υπάρχον αντικείμενο. Η επόμενη println(s1) εμφανίζει τη νέα τιμή.']],
 predict:'Ποια γραμμή του κατασκευαστή καθορίζει το αρχικό εξάμηνο του s1; Γιατί το s2 ξεκινά στο 3;',answer:'Η this.semester = 1; στον κατασκευαστή τριών παραμέτρων. Το s2 δημιουργείται με τον κατασκευαστή τεσσάρων παραμέτρων, όπου δίνουμε 3 ως εξάμηνο.',
 task:'Ξεκίνα από τον σκελετό. Πρόσθεσε τους δύο κατασκευαστήςs, όλους τους getters/setters και την toString. Στη main δημιούργησε τα δύο αντικείμενα της εκφώνησης και εμφάνισέ τα πριν και μετά τις αλλαγές. Έλεγξε την έξοδό σου πριν ανοίξεις την ενδεικτική υλοποίηση.',
 starter:`public class Main {
    public static void main(String[] args) {
        // TODO: Δημιούργησε δύο Student, ένα με κάθε constructor.
        // TODO: Εμφάνισε, άλλαξε όλα τα πεδία, εμφάνισε ξανά.
    }
}

class Student {
    private int id;
    private String firstName;
    private String lastName;
    private int semester;
    // TODO: Κατασκευαστές, getters, setters και toString.
}`,
 solution:STUDENT_MAIN+'\n\n'+STUDENT_COMPLETE,
 taskExpected:'id=1, firstName=Νίκος, lastName=Σταύρου, semester=1\nid=2, firstName=Μαρία, lastName=Παππά, semester=3\n\nΜετά την αλλαγή:\nid=11, firstName=Νικόλας, lastName=Γεωργίου, semester=2\nid=22, firstName=Ελένη, lastName=Νικολάου, semester=4',
 mistake:'Έλεγξε ότι έχεις αλλάξει και τα τέσσερα πεδία και των δύο αντικειμένων. Η εκφώνηση ζητά System.out.println(αντικείμενο), ώστε να χρησιμοποιείται η toString.',prerequisites:['objects','constructors','access','tostring']
},
{
 id:'lab-employee',number:'Τ4',group:'labs',title:'Εργαστήριο Employee',short:'Employee · Τ4',tag:'1η άσκηση · Τ4',description:'Η ίδια λογική με τη Student, με πεδίο salary τύπου double και αρχικό μισθό 0.0.',
 objectives:['Υλοποιώ την Employee με δύο κατασκευαστήςs.','Χρησιμοποιώ double για τον μισθό.','Ελέγχω ότι η αρχική έξοδος συμφωνεί με τον κατασκευαστή που κάλεσα.'],
 theory:[
  {title:'Τα πεδία της Employee',text:'Δήλωσε private πεδία <code>int id</code>, <code>String firstName</code>, <code>String lastName</code> και <code>double salary</code>. Πρόσθεσε public getters και setters για όλα τα πεδία.'},
  {title:'Δύο τρόποι δημιουργίας',text:'Ο κατασκευαστής <code>Employee(int id, String firstName, String lastName)</code> ορίζει salary σε 0.0. Ο δεύτερος δέχεται επιπλέον double salary. Η toString επιστρέφει τις τιμές με τη σειρά id, firstName, lastName, salary και την ένδειξη ευρώ.'},
  {title:'Η έξοδος ακολουθεί τον κώδικα',text:'Στο συνημμένο Τ4 υπάρχει ασυμφωνία ανάμεσα στον αρχικό μισθό του κατασκευαστή τριών παραμέτρων και την ενδεικτική έξοδο. Εδώ ακολουθούμε την απαίτηση του κατασκευαστή: το πρώτο αντικείμενο ξεκινά με <code>salary=0.0 ευρώ</code>. Για αρχικό μισθό 1000.0 θα χρειαζόταν constructor τεσσάρων παραμέτρων ή αλλαγή μέσω setter πριν από την εμφάνιση.'},
  {title:'Μεταφορά στο αρχείο της παράδοσης',text:'Στον online editor εκτελούμε τη main στη Main.java, με την Employee ως δεύτερη μη public κλάση. Για την παράδοση, βάλε τη main μέσα στην <code>public class Employee</code> και αποθήκευσε ως <code>Employee.java</code>, όπως ζητά η εκφώνηση.'}
 ],code:EMPLOYEE_MAIN+'\n\n'+EMPLOYEE_COMPLETE,
 expected:'id=1, firstName=Μαρία, lastName=Παππά, salary=0.0 ευρώ\nid=2, firstName=Γιάννης, lastName=Πέτρου, salary=1200.0 ευρώ\n\nΜετά την αλλαγή:\nid=11, firstName=Ελένη, lastName=Νικολάου, salary=1300.0 ευρώ\nid=22, firstName=Κώστας, lastName=Γεωργίου, salary=1500.0 ευρώ',
 notes:[['new Employee(1, "Μαρία", "Παππά")','Η κλήση δεν δίνει μισθό. Ο κατασκευαστής ορίζει 0.0.'],['e1.setSalary(1300.0)','Ο setter αλλάζει τον μισθό του πρώτου αντικειμένου μετά τη δημιουργία του.']],
 predict:'Αν ο πρώτος constructor ορίζει μισθό 0.0, μπορεί η πρώτη println να εμφανίσει 1000.0 χωρίς άλλη αλλαγή;',answer:'Όχι. Πρέπει να συμφωνούν η κλήση του κατασκευαστή, οι αναθέσεις που εκτελέστηκαν και η αναμενόμενη έξοδος.',
 task:'Συμπλήρωσε την Employee και τη main. Δημιούργησε ένα αντικείμενο με κάθε constructor, εμφάνισε τα δύο, άλλαξε όλα τα πεδία και εμφάνισέ τα ξανά. Διατήρησε τον αρχικό μισθό 0.0 στον κατασκευαστή τριών παραμέτρων.',
 starter:`public class Main {
    public static void main(String[] args) {
        // TODO: Δημιούργησε δύο Employee, ένα με κάθε constructor.
        // TODO: Εμφάνισε, άλλαξε όλα τα πεδία, εμφάνισε ξανά.
    }
}

class Employee {
    private int id;
    private String firstName;
    private String lastName;
    private double salary;
    // TODO: Κατασκευαστές, getters, setters και toString.
}`,
 solution:EMPLOYEE_MAIN+'\n\n'+EMPLOYEE_COMPLETE,
 taskExpected:'id=1, firstName=Μαρία, lastName=Παππά, salary=0.0 ευρώ\nid=2, firstName=Γιάννης, lastName=Πέτρου, salary=1200.0 ευρώ\n\nΜετά την αλλαγή:\nid=11, firstName=Ελένη, lastName=Νικολάου, salary=1300.0 ευρώ\nid=22, firstName=Κώστας, lastName=Γεωργίου, salary=1500.0 ευρώ',
 mistake:'Στον κώδικα Java γράφουμε 1200.0 με τελεία. Το 1200,0 δεν είναι η ίδια αριθμητική τιμή σε μια έκφραση Java.',prerequisites:['objects','constructors','access','tostring']
},
{
 id:'lab-player',number:'Τ1–Τ2',group:'labs',title:'Εργαστήριο Vector2D και Player',short:'Vector2D και Player · Τ1–Τ2',tag:'2η άσκηση · Τ1–Τ2',description:'Αντικείμενο ως πεδίο, ανεξάρτητα αντίγραφα, equals και hashCode σε δύο συνεργαζόμενες κλάσεις.',
 objectives:['Υλοποιώ τη Vector2D και την Player με όλους τους απαιτούμενους constructors.','Προστατεύω τη θέση με αντίγραφα σε constructor, getter και setter.','Ελέγχω ισότητα, hash codes και ανεξαρτησία αντιγράφων.'],
 theory:[
  {title:'Πρώτα ολοκλήρωσε τη Vector2D',text:'Δήλωσε private double x και y. Πρόσθεσε constructor δύο double και constructor αντιγραφής, getters/setters, toString σε μορφή (2.0, 3.0), equals με Double.compare και συμβατή hashCode. Κάθε equals πρέπει να επιστρέφει false για null και διαφορετική κλάση.'},
  {title:'Έπειτα σύνδεσε την Player',text:'Δήλωσε private String name και private Vector2D position. Ο κανονικός constructor, ο κατασκευαστής αντιγραφής και ο setter θέσης αποθηκεύουν νέο αντίγραφο Vector2D. Ο getter θέσης επιστρέφει αντίγραφο. Η equals συγκρίνει όνομα και θέση· η Objects.equals για τη θέση καλεί την equals της Vector2D όταν οι αναφορές δεν είναι null.'},
  {title:'Έλεγξε την ανεξαρτησία των αντιγράφων',text:'Μετά την αλλαγή του v2, το v1 πρέπει να παραμένει (2, 3). Μετά την αλλαγή της θέσης του p1, ο p2 πρέπει να παραμένει στη θέση (2, 3). Η σύγκριση hash codes γίνεται όταν τα αντίγραφα είναι ακόμα ίσα. Δεν απαιτούμε διαφορετικούς κωδικούς για κάθε άνισο ζευγάρι.'},
  {title:'Διάταξη αρχείων',text:'Για τον online editor έχουμε μία public Main και μη public Vector2D και Player στο ίδιο Main.java. Για το NetBeans, μετέφερε τη main μέσα στην Player, δήλωσε μόνο την Player public και αποθήκευσε τις δύο κλάσεις στο <code>Player.java</code>. Κράτησε το <code>import java.util.Objects;</code> στην αρχή. Στις δοκιμές των ασκήσεων χρησιμοποιούμε μη null ονόματα και θέσεις.'}
 ],code:JAVA_IMPORTS+PLAYER_MAIN+'\n\n'+VECTOR_COMPLETE+'\n\n'+PLAYER_COMPLETE,
 expected:'Vector v1: (2.0, 3.0)\nVector v2: (2.0, 3.0)\nVectors equal: true\nSame vector hash codes: true\nOriginal vector: (2.0, 3.0)\nChanged vector copy: (9.0, 3.0)\nVectors equal after change: false\nPlayer p1: name=Alex, position=(2.0, 3.0)\nPlayer p2: name=Alex, position=(2.0, 3.0)\nPlayers equal: true\nSame player hash codes: true\nChanged player: name=Alex, position=(5.0, 6.0)\nUnchanged player copy: name=Alex, position=(2.0, 3.0)\nPlayers equal after change: false',
 notes:[['this.position = new Vector2D(other.position);','Ο Player αντιγράφει και το εσωτερικό μεταβλητό αντικείμενο. Οι παίκτες αποκτούν ανεξάρτητες θέσεις.'],['Objects.hash(name, position)','Ο κωδικός συνδυάζει τα ίδια πεδία που συμμετέχουν στην equals του Player.']],
 predict:'Μετά την p1.setPosition(new Vector2D(5, 6)), ποια πρέπει να είναι η θέση του p2 και γιατί;',answer:'Η θέση του p2 πρέπει να παραμένει (2.0, 3.0). Ο κατασκευαστής αντιγραφής του Player έχει δημιουργήσει δικό του Vector2D, οπότε η αλλαγή στον p1 δεν επηρεάζει τον p2.',
 task:'Υλοποίησε πρώτα τη Vector2D και έλεγξέ την ξεχωριστά. Μετά πρόσθεσε την Player. Στη main εκτέλεσε τις τέσσερις δοκιμές: αντιγραφή διανύσματος, αλλαγή αντιγράφου, αντιγραφή παίκτη, αλλαγή θέσης παίκτη. Έλεγξε κάθε βήμα πριν προχωρήσεις στο επόμενο.',
 starter:JAVA_IMPORTS+`public class Main {
    public static void main(String[] args) {
        // 1. v1 (2, 3), v2 αντίγραφο, εμφάνιση και συγκρίσεις.
        // 2. Άλλαξε το x του v2 σε 9, έλεγξε ότι το v1 έμεινε ίδιο.
        // 3. p1 Alex στη θέση v1, p2 αντίγραφο, εμφάνιση και συγκρίσεις.
        // 4. Θέσε τον p1 στο (5, 6), έλεγξε ότι ο p2 έμεινε ίδιος.
    }
}

class Vector2D {
    private double x;
    private double y;
    // TODO: Κατασκευαστές, getters/setters, toString, equals, hashCode.
}

class Player {
    private String name;
    private Vector2D position;
    // TODO: Κατασκευαστές, getters/setters, toString, equals, hashCode.
}`,
 solution:JAVA_IMPORTS+PLAYER_MAIN+'\n\n'+VECTOR_COMPLETE+'\n\n'+PLAYER_COMPLETE,
 taskExpected:'Vector v1: (2.0, 3.0)\nVector v2: (2.0, 3.0)\nVectors equal: true\nSame vector hash codes: true\nOriginal vector: (2.0, 3.0)\nChanged vector copy: (9.0, 3.0)\nVectors equal after change: false\nPlayer p1: name=Alex, position=(2.0, 3.0)\nPlayer p2: name=Alex, position=(2.0, 3.0)\nPlayers equal: true\nSame player hash codes: true\nChanged player: name=Alex, position=(5.0, 6.0)\nUnchanged player copy: name=Alex, position=(2.0, 3.0)\nPlayers equal after change: false',
 mistake:'Έλεγξε τη Vector2D πριν ελέγξεις την Player. Μια λανθασμένη equals στη θέση μπορεί να οδηγήσει σε λανθασμένη σύγκριση και των παικτών.',prerequisites:['references','composition','equality','hashcode']
}
];
