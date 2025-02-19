# პითონში turtle ის გამოყენებით ააგეთ სახლი

from turtle import *
shape("turtle")
#lets draw a house

#step 1 : square

width(7)
color("light pink")
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()

#end of square

#step 2: door

forward(70)
color("beige")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

#end of door

#step 3: roof

penup()
goto(200,200)
pendown()

color("brown")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#end of floor

#step 4 windows

penup()
goto(170,170)
pendown()

color("light blue")
begin_fill()
left(30)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()

penup()
goto(30,170)
pendown()

begin_fill()
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()

#end of windows

exitonclick()