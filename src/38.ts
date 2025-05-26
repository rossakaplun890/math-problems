from sympy import *
init_printing(use_unicode=True)
x = symbols('x')
f = x**2 + 3*x + 4
f.expand()
