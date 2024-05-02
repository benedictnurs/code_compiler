const files = {
  "main.python": {
    name: "factorial.py",
    language: "python",
    language_id: "71",
    value: `
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

number = 5
print("Factorial of", number, "is", factorial(number))
`,
  },
  "main.javascript": {
    name: "factorial.js",
    language: "javascript",
    language_id: "63",
    value: `
function factorial(n) {
  if (n === 0) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

var number = 5;
console.log("Factorial of", number, "is", factorial(number));
`,
  },
  "main.cpp": {
    name: "factorial.cpp",
    language: "cpp",
    language_id: "54",
    value: `
#include <iostream>

int factorial(int n) {
    if (n == 0) return 1;
    else return n * factorial(n - 1);
}

int main() {
    int number = 5;
    std::cout << "Factorial of " << number << " is " << factorial(number) << std::endl;
    return 0;
}
`,
  },
  "main.c": {
    name: "factorial.c",
    language: "c",
    language_id: "50",
    value: `
#include <stdio.h>

int factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n-1);
}

int main() {
    int number = 5;
    printf("Factorial of %d is %d\\n", number, factorial(number));
    return 0;
}
`,
  },
  "main.csharp": {
    name: "Factorial.cs",
    language: "csharp",
    language_id: "51",
    value: `
public class Program {
    public static int Factorial(int n) {
        if (n == 0)
            return 1;
        else
            return n * Factorial(n - 1);
    }

    public static void Main() {
        int number = 5;
        System.Console.WriteLine("Factorial of " + number + " is " + Factorial(number));
    }
}
`,
  },
  "main.java": {
    name: "Factorial.java",
    language: "java",
    language_id: "62",
    value: `
public class Factorial {
    public static int factorial(int n) {
        if (n == 0)
            return 1;
        else
            return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        int number = 5;
        System.out.println("Factorial of " + number + " is " + factorial(number));
    }
}
`,
  },
  "main.ruby": {
    name: "factorial.rb",
    language: "ruby",
    language_id: "72",
    value: `
def factorial(n)
    if n == 0
        return 1
    else
        return n * factorial(n-1)
    end
end

number = 5
puts "Factorial of \#{number} is \#{factorial(number)}"
`,
  },
  "main.swift": {
    name: "factorial.swift",
    language: "swift",
    language_id: "83",
    value: `
func factorial(_ n: Int) -> Int {
    if n == 0 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

let number = 5
print("Factorial of \\(number) is \\(factorial(number))")
`,

},

};

export default files;
