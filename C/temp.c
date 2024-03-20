#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    int i, num = 27;
    char *s = (char *)malloc(num);
    int temp = (int)'a';
    for (i = 0; i < num; i++)
    {
        s[i] = (char)temp++;
    }
    s[num] = '\0';
    printf("%s\n", s);
    free(s);

    const int *r = &num;
    printf("%p \n", r);
    printf("%li \n", sizeof(r));

    int a = 10;
    int *ptr1 = &a;
    printf("a = %d\n", a);
    printf("ptr1 = %p \n", ptr1);

    int *ptr = (int *)malloc(a * sizeof(int));
    free(ptr);

    return 0;
}

// compiles the program
// gcc-11 temp.c -o temp.c

// run executable
// ./temp

// gcc -Wall -save-temps temp.c -o temp
// will save all the files in folder

// preprocessing step
// cc -E temp.c
// will give o/p in terminal

// if you want to save the file
// gcc -E example.c -o example.i

// compilation step
// gcc -S example.i -o example.s

// assembler step
// gcc -c example.s -o example.o

// linker step
// gcc example.o -o example