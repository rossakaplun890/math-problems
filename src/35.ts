from sympy import symbols, solve

x = symbols('x')
eq1 = x**2 - 4*x + 5
solution = solve(eq1)
solution[0]
