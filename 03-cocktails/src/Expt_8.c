#include <stdio.h>
#include <conio.h>

void main()
{
    int gm, gd = DETECT, ax, x1 = 100;
    int x2 = 100, x3 = 200, y1 = 100;
    int y2 = 200, y3 = 100;

    initgraph(&gd, &gm, "C:\\TURBOC3\\BGI");
    cleardevice();

    line(getmaxx() / 2, 0, getmaxx() / 2, getmaxy());
    printf("Before reflection object"
           "in 2nd quadrant");
    setcolor(14);
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x1, y1);
    getch();

    printf("\n After Reflection");

    setcolor(4);

    line(getmaxx() - x1, getmaxy() - y1, getmaxx() - x2, getmaxy() - y2);

    line(getmaxx() - x2, getmaxy() - y2, getmaxx() - x3, getmaxy() - y3);

    line(getmaxx() - x3, getmaxy() - y3, getmaxx() - x1, getmaxy() - y1);

    setcolor(3);

    line(getmaxx() - x1, getmaxy() - y1, getmaxx() - x2, getmaxy() - y2);
    line(getmaxx() - x2, getmaxy() - y2, getmaxx() - x3, getmaxy() - y3);
    line(getmaxx() - x3, getmaxy() - y3, getmaxx() - x1, getmaxy() - y1);

    getch();

    closegraph();
}