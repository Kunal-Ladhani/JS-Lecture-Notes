#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    printf("Hello world\n");
    printf("num of args = %i \n", argc);
    int len = sizeof(argv) / sizeof(argv[0]);
    for (int i = 0; i < len; i++)
    {
        printf("args[%i] = %s \n", i, argv[i]);
    }
    return 0;
}