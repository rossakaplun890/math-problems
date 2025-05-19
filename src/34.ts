import sympy as sp
from sympy import symbols

x, y = symbols('x y')
eq1 = x**2 + 2*x*y - 3*y**2
eq2 = x**4 - 5*x**2*y + 6*y**3
solution = sp.solve((eq1, eq2), (x, y))
print(solution)
