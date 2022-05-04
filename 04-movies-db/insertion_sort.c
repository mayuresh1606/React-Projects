#include <stdio.h>

// void main()
// {
//     int myNumbers[] = {1, 7, 2, 4, 3, 5, 6};
//     size_t n = sizeof(myNumbers) / sizeof(myNumbers[0]);
//     for (int j = 2; j < n; j++)
//     {
//         int key = myNumbers[j];
//         int i = j - 1;
//         while (i > 0 && myNumbers[i] > key)
//         {
//             myNumbers[i + 1] = myNumbers[i];
//             i = i - 1;
//         }
//         myNumbers[i + 1] = key;
//     }
//     for (int k = 0; k < n; k++)
//     {
//         printf("%d ", myNumbers[k]);
//     }
// }

void main()
{
    int a[] = {2, 1, 4, 5, 3, 5, 7, 8};
    size_t length = sizeof(a) / sizeof(a[0]);
    for (int j = 1; j < length; j++)
    {
        int key = a[j];
        int i = j - 1;
        while (i >= 0 && key < a[i])
        {
            a[i + 1] = a[i];
            i = i - 1;
        }
        a[i + 1] = key;
    }
    for (int i = 0; i < length; i++)
    {
        printf("%d", a[i]);
    }
}