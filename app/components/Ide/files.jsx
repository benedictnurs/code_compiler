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
"main.php": {
  name: "factorial.php",
  language: "php",
  language_id: "68",
  value: `
<?php
function factorial($n) {
  if ($n == 0) {
      return 1;
  } else {
      return $n * factorial($n - 1);
  }
}

$number = 5;
echo "Factorial of $number is " . factorial($number);
?>
`,
},
"main.perl": {
  name: "factorial.pl",
  language: "perl",
  language_id: "55",
  value: `
sub factorial {
  my ($n) = @_;
  if ($n == 0) {
      return 1;
  } else {
      return $n * factorial($n - 1);
  }
}

my $number = 5;
print "Factorial of $number is ", factorial($number), "\\n";
`,
},
"main.go": {
  name: "factorial.go",
  language: "go",
  language_id: "60",
  value: `
package main

import "fmt"

func factorial(n int) int {
  if n == 0 {
      return 1
  } else {
      return n * factorial(n - 1)
  }
}

func main() {
  number := 5
  fmt.Printf("Factorial of %d is %d\\n", number, factorial(number))
}
`,
},
"main.rust": {
  name: "factorial.rs",
  language: "rust",
  language_id: "73",
  value: `
fn factorial(n: u64) -> u64 {
  if n == 0 {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

fn main() {
  let number: u64 = 5;
  println!("Factorial of {} is {}", number, factorial(number));
}
`,
},
"main.kotlin": {
  name: "Factorial.kt",
  language: "kotlin",
  language_id: "78",
  value: `
fun factorial(n: Int): Int {
  if (n == 0) return 1
  else return n * factorial(n - 1)
}

fun main() {
  val number = 5
  println("Factorial of $number is ${factorial(number)}")
}
`,
},
"main.scala": {
  name: "Factorial.scala",
  language: "scala",
  language_id: "81",
  value: `
object Main {
  def factorial(n: Int): Int = {
      if (n == 0) 1 else n * factorial(n - 1)
  }

  def main(args: Array[String]): Unit = {
      val number = 5
      println(s"Factorial of $number is ${factorial(number)}")
  }
}
`,
},
"main.haskell": {
  name: "factorial.hs",
  language: "haskell",
  language_id: "79",
  value: `
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

main = do
  let number = 5
  putStrLn $ "Factorial of " ++ show number ++ " is " ++ show (factorial number)
`,
},
"main.objectivec": {
  name: "Factorial.m",
  language: "objectivec",
  language_id: "79",
  value: `
#import <Foundation/Foundation.h>

int factorial(int n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

int main(int argc, const char * argv[]) {
  @autoreleasepool {
      int number = 5;
      NSLog(@"Factorial of %d is %d", number, factorial(number));
  }
  return 0;
}
`,}

};

export default files;
