package main

import "fmt"

func main() {
	// single line comment
	fmt.Println("Hello, World!")

	/*
		this is multi line comment

		Go == C for 21st century
		2007 by Ken Thompson
		high performance server side applications
		docker, cockroachDB, dGraph etc.
		statically typed complied language
		supports multithreading, concurrency via goroutines

		fast complie time due to advanced dependency analysis
		complies to executable file

		type inference and static typing both supported
		go modules - module system that helps to reuse and export code

	*/

	// declaring variables
	var name string = "kunal" // var variableName datatype = value
	surname := "ladhani"      // go will infer the type automatically
	fmt.Println("-------------------------------------------------")
	fmt.Println("declaring variables")
	fmt.Printf("name is a string, name = %s surname = %s \n", name, surname)

	var num uint32
	num++
	fmt.Printf("this is my num, num = %d \n", num)

	flag := true
	if flag {
		fmt.Printf("boolean val = %t \n", flag)
	}

	var a int
	var b string
	var c bool
	print(a, "\n")
	print(b, "\n")
	print(c, "\n")
	var num1 int32 = 100 // static type
	var num2 = 101       // automatic type inference
	num3 := 102          // automatic type inference - you need to assign a value here
	fmt.Print(num1, num2, num3, "\n")
}
