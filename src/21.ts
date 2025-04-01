import sympy as sp
from sympy import symbols

a, b = symbols('a b')
x, y = symbols('x y')

expr1 = a*x + b*y - 3*x**2 - 4*a*y + 5*x + 7*y - 20
expr2 = a*x + b*y - 3*x**2 - 4*a*y + 5*x + 8*y - 21

solve(expr1, (x, y))
solve(expr2, (x, y))
